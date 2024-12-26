// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserPreferencesProvider } from "@/context/UserPreferencesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nitnem App",
  description: "Explore Nitnem Banis in a modern interface.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <UserPreferencesProvider>
            <Navbar />
            <main className="flex flex-col items-center justify-center min-h-screen pt-16 px-6 text-center bg-gray-100 dark:bg-black">
              {children}
            </main>
            <Footer />
          </UserPreferencesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
