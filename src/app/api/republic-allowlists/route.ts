import { NextResponse } from "next/server";

import { post } from "@/src/lib/axiosInterceptor";
import {
  CONTACT_EMAIL_SUBJECT,
  CONTACT_HERO_BANNER_URL,
  CONTACT_THANKS_FOR_APPLYING,
  CONTACT_TYPE,
} from "@/src/constants/emailConstant";
import { contactTransporter } from "@/src/lib/nodemailer";
import { generateEmailContent } from "@/src/constants/republicEmailTemplate";

interface ContactRequestBody {
  name: string;
  email: string;
  country: string;
  address: string;
  privacy: string;
  acknowledge: string;
  referCode?: number;
}

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { name, email, country, address, privacy, acknowledge, referCode }: ContactRequestBody =
      body;

    console.log("Received data:", referCode);

    if (!name || !email || !country || !address || !privacy || !acknowledge) {
      return NextResponse.json({
        message: "All fields are required",
        status: 400,
      });
    }

    const data = {
      data: {
        fullname: name,
        email,
        country,
        qrnaddress: address,
        privacy,
        acknowledge,
        referralcode: String(referCode || ""),
      },
    };

    const url = `${process.env.BASE_URL}/api/republic-allowlists`;

    // Call external API
    try {
      await post(url, data);
    } catch (error: any) {
      console.error("Error submitting form:", error.response?.data?.error);
      return NextResponse.json(
        {
          error: error.response?.data?.error?.message || "Error submitting form",
        },
        { status: error.response?.data?.error?.status || 500 }
      );
    }

    // Send notification email to admin
    // try {
    //   await contactTransporter.sendMail({
    //     from: email,
    //     to: process.env.CONTACT_EMAIL_NODEMAILER,
    //     subject: `New Contact Form Submission: ${CONTACT_EMAIL_SUBJECT}`,
    //     html: `<p>You have a new contact request from <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>)</p>
    //            <p><strong>Country:</strong> ${country}</p>
    //            <p><strong>Address:</strong> ${address}</p>
    //            <p><strong>Privacy:</strong> ${privacy}</p>
    //            <p><strong>Acknowledge:</strong> ${acknowledge}</p>`,
    //   });
    // } catch (adminError: any) {
    //   console.error("Error sending admin notification email:", adminError);
    //   // Do not block user flow if admin email fails
    // }

    // Send thank-you confirmation email to user
    // try {
    //   await contactTransporter.sendMail({
    //     from: process.env.CONTACT_EMAIL_NODEMAILER,
    //     to: email,
    //     subject: CONTACT_EMAIL_SUBJECT,
    //     ...generateEmailContent(
    //       CONTACT_TYPE,
    //       name,
    //       email,
    //       CONTACT_EMAIL_SUBJECT,
    //       CONTACT_HERO_BANNER_URL,
    //       CONTACT_THANKS_FOR_APPLYING,
    //       ""
    //     ),
    //   });
    // } catch (error: any) {
    //   console.error("Error sending confirmation email:", error);
    //   return NextResponse.json({
    //     message: "Error sending confirmation email",
    //     error: error.message || "Unknown error",
    //     status: 500,
    //   });
    // }

    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      message: "Error processing request",
      error: error.message || "Unknown error",
      status: 500,
    });
  }
}
