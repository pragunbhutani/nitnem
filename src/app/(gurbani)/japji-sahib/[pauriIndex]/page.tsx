"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useUserPreferences } from "@/context/UserPreferencesContext";

import { japjiData } from "@/data/japjiData";

function getPauriData(pauriIndex: number):
  | {
      id: number;
      title: string;
      lines: {
        gurmukhi: string;
        englishTranslation: string;
        hindiTranslation: string;
        romanTransliteration: string;
        devanagariTransliteration: string;
      }[];
    }
  | false {
  console.log(pauriIndex);
  const pauriData = japjiData.find((pauri) => pauri.id === pauriIndex);

  // If no data found, handle accordingly (not found, etc.)
  if (!pauriData) {
    return false;
  }

  return pauriData;
}

export default function StanzaPage() {
  const router = useRouter();
  const params = useParams(); // e.g. { stanza: "1" }
  const { fontSize } = useUserPreferences();

  const rawPauriIndex = params.pauriIndex as string;
  const pauriIndex = parseInt(rawPauriIndex, 10);
  const pauriData = getPauriData(pauriIndex);

  console.log(pauriData);

  // Find the stanza data
  // const pauriData = japjiData.find((s) => s.id === stanzaId);
  if (!pauriData) {
    return <div className="p-4 dark:text-white">Stanza not found.</div>;
  }

  // For Next/Prev:
  const totalStanzas = japjiData.length;
  const hasPrev = pauriIndex > 0;
  const hasNext = pauriIndex < totalStanzas;

  // Tailwind classes for font sizing (you can define your own scale)
  let textSizeClass = "";
  let textSizeClassPlus = "";
  switch (fontSize) {
    case "sm":
      textSizeClass = "text-sm"; // smaller
      textSizeClassPlus = "text-lg"; // smaller
      break;
    case "md":
      textSizeClass = "text-base"; // default
      textSizeClassPlus = "text-xl"; // default
      break;
    case "lg":
      textSizeClass = "text-lg"; // larger
      textSizeClassPlus = "text-2xl"; // larger
      break;
  }

  const goToStanza = (id: number) => {
    router.push(`/japji-sahib/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold my-6 dark:text-slate-200 text-slate-800">
        Japji Sahib: {pauriData.title}
      </h1>

      {/* Rendering lines with dynamic font size */}
      <div className={`${textSizeClass} dark:text-slate-200 text-slate-800`}>
        {pauriData &&
          pauriData.lines.map((line, index) => (
            <div key={index} className="mb-6">
              <p className="my-4">-</p>
              <p
                className={`${textSizeClassPlus} font-bold dark:text-slate-200 text-slate-800 mb-2`}
              >
                {line.gurmukhi}
              </p>

              <div className="dark:text-slate-400 text-slate-600 grid grid-cols-1 space-y-4 mt-4">
                <div>
                  <p className="mb-1 italic">
                    {line.devanagariTransliteration}
                  </p>
                  <p className="mb-1">{line.hindiTranslation}</p>
                </div>
                <div className="font-serif">
                  <p className="mb-1 italic">{line.romanTransliteration}</p>
                  <p className="mb-1">{line.englishTranslation}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom nav for Prev/Next */}
      <div className="flex justify-between mt-20 mb-10">
        {hasPrev ? (
          <button
            onClick={() => goToStanza(pauriIndex - 1)}
            className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-700 dark:text-slate-100 text-slate-800 hover:bg-slate-300 dark:hover:bg-slate-600"
          >
            {"<"} Prev
          </button>
        ) : (
          <button
            onClick={() => router.push("/japji-sahib")}
            className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-700 dark:text-slate-100 text-slate-800 hover:bg-slate-300 dark:hover:bg-slate-600"
          >
            Home
          </button>
        )}
        <span className="mt-1.5 mx-4 text-slate-600 dark:text-slate-400">
          Japji Sahib - {pauriData.title}
        </span>
        {hasNext ? (
          <button
            onClick={() => goToStanza(pauriIndex + 1)}
            className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-700 dark:text-slate-100 text-slate-800 hover:bg-slate-300 dark:hover:bg-slate-600"
          >
            Next {">"}
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
