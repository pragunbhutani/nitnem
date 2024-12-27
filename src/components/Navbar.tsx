"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, BookOpenText, X, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useUserPreferences } from "@/context/UserPreferencesContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useUserPreferences();
  const [mounted, setMounted] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const buttonBaseClass =
    "px-4 py-2 rounded-md flex items-center justify-center gap-2 h-10 transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700";

  const MobileMenu = () => (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-transform duration-300">
      <div className="p-4 flex justify-between items-center border-b">
        <span className="text-3xl">ੴ</span>
        <button
          onClick={() => setShowMobileMenu(false)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <X size={24} />
        </button>
      </div>
      <div className="p-6 space-y-6">
        {/* <button
          onClick={() => {
            setShowChapterMenu(true);
            setShowMobileMenu(false);
          }}
          className="w-full py-3 px-4 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          Select Chapter
        </button> */}
        <div className="flex justify-between gap-2">
          <button
            onClick={() => setFontSize("sm")}
            className={`flex-1 py-3 px-4 rounded-md ${
              fontSize === "sm"
                ? "bg-blue-500 text-white dark:bg-blue-600"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
          >
            Small
          </button>
          <button
            onClick={() => setFontSize("md")}
            className={`flex-1 py-3 px-4 rounded-md ${
              fontSize === "md"
                ? "bg-blue-500 text-white dark:bg-blue-600"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setFontSize("lg")}
            className={`flex-1 py-3 px-4 rounded-md ${
              fontSize === "lg"
                ? "bg-blue-500 text-white dark:bg-blue-600"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
          >
            Large
          </button>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-full py-3 px-4 rounded-md flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );

  // Add this function to check if we're on a pauri page
  const isOnPauriPage = () => {
    return pathname?.startsWith("/japji-sahib/");
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="text-3xl">
              ੴ
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 items-center">
              {isOnPauriPage() && (
                <>
                  <Link href="/japji-sahib" className={buttonBaseClass}>
                    <Menu size={20} />
                    <span>All Chapters</span>
                  </Link>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setFontSize("sm")}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        fontSize === "sm"
                          ? "bg-blue-500 text-white dark:bg-blue-600"
                          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                      }`}
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setFontSize("md")}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        fontSize === "md"
                          ? "bg-blue-500 text-white dark:bg-blue-600"
                          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                      }`}
                    >
                      A
                    </button>
                    <button
                      onClick={() => setFontSize("lg")}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        fontSize === "lg"
                          ? "bg-blue-500 text-white dark:bg-blue-600"
                          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                      }`}
                    >
                      A+
                    </button>
                  </div>
                </>
              )}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={buttonBaseClass}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(true)}
              className={`md:hidden ${buttonBaseClass}`}
            >
              <BookOpenText size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && <MobileMenu />}

      {/* Chapter Selection Modal */}
      {/* {showChapterMenu && (
        <ChapterMenu onClose={() => setShowChapterMenu(false)} />
      )} */}
    </>
  );
}
