"use client"; // Required for client-side interactivity in Next.js 13

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useUserPreferences } from "@/context/UserPreferencesContext";

import { japjiData } from "@/data/japjiData";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  // Dark mode handling
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Drawer open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Next.js hooks
  const pathname = usePathname();
  const router = useRouter();

  // For user preferences (font size)
  const { fontSize, setFontSize } = useUserPreferences();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we’re on a Bani route (e.g., /japji)
  const isBaniRoute = pathname.startsWith("/japji-sahib/");

  // Toggle drawer
  // const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Theme toggle
  const handleThemeToggle = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Handle stanza click
  const handleStanzaSelect = (id: number) => {
    // For example, if your route is /japji/[id]:
    router.push(`/japji-sahib/${id}`);
    closeDrawer();
  };

  // Handle font size
  const handleFontSizeChange = (size: "sm" | "md" | "lg") => {
    setFontSize(size);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-gray-100 dark:bg-black flex items-center justify-between px-4 shadow">
        {/* Left: Logo/Home */}
        <div>
          <Link href="/">
            <span className="text-3xl font-medium cursor-pointer dark:text-gray-100 text-gray-900">
              ੴ
            </span>
          </Link>
        </div>

        {/* Right side: About Us, FontSize, Stanza Button, Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* About Us Link */}
          {/* <Link
            href="/about"
            className="dark:text-gray-100 text-gray-800 hover:underline"
          >
            About Us
          </Link> */}

          {/* Conditionally show stanza selector button if on a Bani route */}
          {isBaniRoute && (
            <button
              // onClick={!isDrawerOpen ? openDrawer : closeDrawer}
              onClick={() => router.push("/japji-sahib")}
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-900 dark:text-gray-100 text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Select Stanza
            </button>
          )}

          {/* Font size toggle (small, medium, large) */}
          {isBaniRoute && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleFontSizeChange("sm")}
                className={`px-2 py-1 rounded ${
                  fontSize === "sm"
                    ? "bg-blue-300 dark:bg-blue-700"
                    : "bg-gray-200 dark:bg-gray-700"
                } text-sm dark:text-gray-100 text-gray-800`}
              >
                A-
              </button>
              <button
                onClick={() => handleFontSizeChange("md")}
                className={`px-2 py-1 rounded ${
                  fontSize === "md"
                    ? "bg-blue-300 dark:bg-blue-700"
                    : "bg-gray-200 dark:bg-gray-700"
                } text-sm dark:text-gray-100 text-gray-800`}
              >
                A
              </button>
              <button
                onClick={() => handleFontSizeChange("lg")}
                className={`px-2 py-1 rounded ${
                  fontSize === "lg"
                    ? "bg-blue-300 dark:bg-blue-700"
                    : "bg-gray-200 dark:bg-gray-700"
                } text-sm dark:text-gray-100 text-gray-800`}
              >
                A+
              </button>
            </div>
          )}

          {/* Light/Dark Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-900 dark:text-gray-100 text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {mounted && theme == "dark" ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Drawer & Overlay */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30"
            onClick={closeDrawer}
          />
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-gray-100 dark:bg-gray-900 shadow-lg z-40 transform transition-transform duration-300 
            ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
              <h2 className="text-lg font-semibold dark:text-white">Stanzas</h2>
              <button
                onClick={closeDrawer}
                className="text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Drawer Content: List of stanzas */}
            <div className="p-4">
              {japjiData.map((stanza) => (
                <button
                  key={stanza.id}
                  onClick={() => handleStanzaSelect(stanza.id)}
                  className="block w-full text-left py-2 px-2 mb-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-100 text-gray-800"
                >
                  {stanza.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
