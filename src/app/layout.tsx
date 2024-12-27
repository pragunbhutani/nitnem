// app/layout.tsx
"use client";

import "./globals.css";

import { ThemeProvider } from "next-themes";
import { UserPreferencesProvider } from "@/context/UserPreferencesContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <UserPreferencesProvider>
            <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900 dark:bg-gray-900 dark:text-white">
              <Navbar />
              {children}
              <Footer />
            </div>
          </UserPreferencesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
