import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://www.wixapis.com/stores/v1/products", {
      headers: {
        Authorization: `Bearer ${process.env.NEW_TOKEN!}`,
        "wix-site-id": process.env.WIX_SITE_ID!,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Wix API Error:", errorText);
      return new NextResponse(errorText, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
