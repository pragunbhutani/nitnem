"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { japjiData } from "@/data/japjiData";
import { useUserPreferences } from "@/context/UserPreferencesContext";
import PauriCard from "@/components/PauriCard";

const PauriPage = () => {
  const { fontSize } = useUserPreferences();
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const currentPauri = japjiData.find((pauri) => pauri.slug === slug);
  const currentIndex = currentPauri?.id ?? 0;
  const prevPauri = currentIndex > 0 ? japjiData[currentIndex - 1] : null;
  const nextPauri =
    currentIndex < japjiData.length - 1 ? japjiData[currentIndex + 1] : null;

  if (!currentPauri) {
    return <div>Pauri not found</div>;
  }

  const handlePrevChapter = () => {
    if (prevPauri) {
      router.push(`/japji-sahib/${prevPauri.slug}`);
    }
  };

  const handleNextChapter = () => {
    if (nextPauri) {
      router.push(`/japji-sahib/${nextPauri.slug}`);
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-center mt-6 mb-8">
          {currentPauri.title}
        </h1>
        {currentPauri.lines.map((line, index) => (
          <PauriCard key={index} line={line} fontSize={fontSize} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 mb-16 px-4 md:px-0">
        <button
          onClick={handlePrevChapter}
          disabled={!prevPauri}
          className="w-12 h-12 md:w-auto md:px-6 md:py-3 rounded-lg flex items-center justify-center transition-colors hover:bg-opacity-80 bg-opacity-100 shadow-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
          <span className="hidden md:inline ml-2">Previous</span>
        </button>

        <Link
          href="/japji-sahib"
          className="text-sm md:text-base hover:underline"
        >
          Back to Index
        </Link>

        <button
          onClick={handleNextChapter}
          disabled={!nextPauri}
          className="w-12 h-12 md:w-auto md:px-6 md:py-3 rounded-lg flex items-center justify-center transition-colors hover:bg-opacity-80 bg-opacity-100 shadow-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="hidden md:inline mr-2">Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
};

export default PauriPage;
