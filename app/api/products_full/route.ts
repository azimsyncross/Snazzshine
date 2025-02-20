import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    // Read products data
    const filePath = path.join(process.cwd(), "data", "products.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileData);

    // Return all products directly
    return NextResponse.json({
      products: data.products,
      filters: {
        availableTags: Array.from(
          new Set(data.products.flatMap((p: any) => p.tags))
        ),
        availableCategories: data.categories,
      },
    });
  } catch (error) {
    console.error("Product API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
