import React from "react";
import Link from "next/link";
import { japjiData } from "@/data/japjiData";

const JapjiSahibLandingPage = () => {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mt-6 mb-12">ਜਪੁਜੀ ਸਾਹਿਬ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {japjiData.map((pauri) => (
          <Link
            key={pauri.id}
            href={`/japji-sahib/${pauri.slug}`}
            className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">{pauri.title}</h2>
              <p className="text-sm opacity-75">
                {pauri.lines[0].gurmukhi.substring(0, 40)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default JapjiSahibLandingPage;
