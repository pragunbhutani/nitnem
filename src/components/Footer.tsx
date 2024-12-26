"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-center p-4 bg-gray-200 dark:bg-gray-800">
      {/* First line: disclaimer + suggest improvements */}
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <Link href="/disclaimer" className="underline hover:text-blue-600">
          Disclaimer
        </Link>
        {" | "}
        {/* Replace with your actual GitHub issues link */}
        <a
          href="https://github.com/YourRepo/YourProject/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Suggest Improvements
        </a>
      </p>

      {/* Second line: "satnam waheguru" in Gurmukhi */}
      <p className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">
        ਸਤਿਨਾਮ ਵਾਹਿਗੁਰੂ
      </p>
    </footer>
  );
}
