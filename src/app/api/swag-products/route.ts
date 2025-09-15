import { NextResponse } from "next/server";

const SHOPIFY_STORE = "swag-store-by-quranium.myshopify.com";
const STOREFRONT_API_TOKEN = process.env.SHOPIFY_API_KEY; // keep it safe in .env.local

export async function GET() {
  try {
    const query = `
      {
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 1) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(`https://${SHOPIFY_STORE}/api/2025-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_API_TOKEN!,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched products:", data);
    return NextResponse.json(data.data.products.edges.map((p: any) => p.node));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
