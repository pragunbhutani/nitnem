"use client";

import { GraphicPath } from "@/types/japji";

interface LineGraphicProps {
  graphic: GraphicPath;
  className?: string;
}

export default function LineGraphic({
  graphic,
  className = "",
}: LineGraphicProps) {
  return (
    <svg
      className={`opacity-15 text-gray-900 dark:text-white ${className}`}
      viewBox={graphic.viewBox || "0 0 100 100"}
    >
      <path
        d={graphic.path}
        fill={graphic.fill ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
