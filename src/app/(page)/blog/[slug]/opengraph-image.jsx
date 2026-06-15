import { ImageResponse } from "next/og";
import { getPostContent } from "@/libs/getPostMetadata";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "Post preview";

export default async function Image({ params }) {
  const { slug } = await params;
  const postDetails = getPostContent(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827", // tailwind bg-gray-900
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontFamily: "Inter",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          {postDetails.data.title}
        </div>
      </div>
    ),
  );
}
