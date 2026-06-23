import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const { img } = await params;

  const filePath = path.join(path.resolve("images"), img);
  const imageBuffer = fs.readFileSync(filePath);
  if (!imageBuffer) {
    console.log("[READ_IMG] file not found: ", filePath);
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(imageBuffer, {
    headers: { "content-type": "image/png" },
  });
}
