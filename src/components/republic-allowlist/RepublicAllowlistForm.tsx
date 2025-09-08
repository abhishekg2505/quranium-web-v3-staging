"use client";

import { useState, useRef, useEffect } from "react";
import axiosInstance from "@/src/lib/axiosInterceptor";
import toast, { Toaster } from "react-hot-toast";
import { countriesCode } from "@/src/constants/countriesCode";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface FormErrors {
  name?: string;
  email?: string;
  country?: string;
  address?: string;
  privacy?: string;
  acknowledge?: string;
}

export default function RepublicAllowlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    privacy: false,
    acknowledge: false,
  });
  const [error, setError] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submitting state
  const searchParams = useSearchParams();
  const referCode = searchParams.get("refercode");
  console.log("Form data to submit:", referCode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    });
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Regex patterns
    const nameRegex = /^[A-Za-z ]+$/;
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;

    // Name validation
    if (!formData.name) {
      newErrors.name = "* Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "* Name must only contain letters and spaces";
    }

    // Email validation
    if (!formData.email) newErrors.email = "* Email is required";

    // Country validation
    if (!formData.country) newErrors.country = "* Country is required";

    // Address validation
    if (!formData.address) {
      newErrors.address = "* Address is required";
    } else if (!addressRegex.test(formData.address)) {
      newErrors.address = "* Address must be a valid Ethereum address (0x + 40 hex chars)";
    }

    // Privacy validation
    if (!formData.privacy) newErrors.privacy = "* You must agree to the Privacy Policy";

    // Acknowledge validation
    if (!formData.acknowledge) {
      newErrors.acknowledge = "* Please acknowledge registration is non-binding";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const isValidated = validateForm();
    if (!isValidated) {
      setIsSubmitting(false);
      return;
    }

    let safeReferCode = Number(referCode);
    if (isNaN(safeReferCode) || safeReferCode < 1 || safeReferCode > 20) {
      safeReferCode = 0;
    }
    console.log("Using referCode:", safeReferCode);
    try {
      const response = await axiosInstance.post("/api/republic-allowlists", {
        ...formData,
        referCode: safeReferCode,
      });
      if (response.status === 200) {
        toast.success("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          country: "",
          address: "",
          privacy: false,
          acknowledge: false,
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Submission failed, try again.");
    }
    setIsSubmitting(false);
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      tl.from(".form-wrapper", {
        opacity: 0,
        y: 70,
        duration: 1,
        ease: "back.out(1.7)",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="rounded-lg bg-background pb-[89px]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex border border-violet-3 rounded-[30px] text-sm lg:text-base lg:rounded-[50px] overflow-hidden">
          <div className="form-wrapper w-full lg:w-3/5 px-4 lg:px-12 py-8 lg:py-12">
            <h4 className="text-h4 font-montserrat font-semibold mb-[24px]">Registration Form</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-white-3 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name here"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-background border border-violet-3 text-white-3"
                />
                <p className="text-red-500">{error.name}</p>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white-3 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email here"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-background border border-violet-3 text-white-3"
                />
                <p className="text-red-500">{error.email}</p>
              </div>

              {/* Country Dropdown */}
              <div>
                <label htmlFor="country" className="block text-white-3 mb-2">
                  Country of Residence
                </label>
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-[12px_20px_12px_12px] rounded-full bg-background border border-violet-3 text-white-3 appearance-none bg-no-repeat bg-right bg-[length:1.25rem_1.25rem]"
                  >
                    <option value="">Select your Country</option>
                    {countriesCode.map((c) => (
                      <option key={c.code} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-6 h-6 fill-current text-gray-700" viewBox="0 0 20 20">
                      <path d="M5.293 7.293l4.293 4.293 4.293-4.293-1.414-1.414L9.586 8.758 6.707 5.879z" />
                    </svg>
                  </div>
                </div>
                <p className="text-red-500">{error.country}</p>
              </div>

              {/* Quranium Address */}
              <div>
                <label htmlFor="address" className="block text-white-3 mb-2">
                  Quranium Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your Quranium address here"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-background border border-violet-3 text-white-3"
                />
                <p className="text-red-500">{error.address}</p>
                <small className="block text-white-3 mt-[12px]">
                  Don&rsquo;t have a Quranium wallet?{" "}
                  <Link
                    href="https://www.qsafewallet.com"
                    target="_blank"
                    className="underline text-white"
                  >
                    Download QSafe
                  </Link>
                </small>
              </div>

              {/* Consent Boxes */}
              <div className="flex flex-col space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  I agree to the{" "}
                  <a href="/privacy-policy" target="_blank" className="underline text-white ml-1">
                    Privacy Policy
                  </a>
                </label>
                {error.privacy && <p className="text-red-500">{error.privacy}</p>}

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="acknowledge"
                    checked={formData.acknowledge}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  I acknowledge that this registration is non-binding.
                </label>
                <p className="text-red-500">{error.acknowledge}</p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Join Allowlist
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </form>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "#1a1a1a",
                  color: "#fff",
                  borderRadius: "10px",
                },
              }}
            />
          </div>
          <div className="w-2/5 hidden lg:block">
            <div className="relative h-full bg-[url('/images/republic-allowlist/formbg.webp')] bg-cover bg-left-top bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
