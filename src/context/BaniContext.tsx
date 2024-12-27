"use client";

import React, { createContext, useContext, useState } from "react";
import { japjiData } from "@/data/japjiData";

interface BaniContextType {
  currentBani: string;
  currentChapter: number;
  totalChapters: number;
  setCurrentBani: (bani: string) => void;
  setCurrentChapter: (chapter: number) => void;
  getCurrentChapterData: () => any;
}

const BaniContext = createContext<BaniContextType | undefined>(undefined);

export function BaniProvider({ children }: { children: React.ReactNode }) {
  const [currentBani, setCurrentBani] = useState("japji");
  const [currentChapter, setCurrentChapter] = useState(0);

  const getBaniData = (bani: string) => {
    switch (bani) {
      case "japji":
        return japjiData;
      default:
        return japjiData; // Default to Japji Sahib for now
    }
  };

  const getTotalChapters = (bani: string) => {
    return getBaniData(bani).length;
  };

  const getCurrentChapterData = () => {
    const baniData = getBaniData(currentBani);
    return baniData[currentChapter];
  };

  return (
    <BaniContext.Provider
      value={{
        currentBani,
        currentChapter,
        totalChapters: getTotalChapters(currentBani),
        setCurrentBani,
        setCurrentChapter,
        getCurrentChapterData,
      }}
    >
      {children}
    </BaniContext.Provider>
  );
}

export function useBani() {
  const context = useContext(BaniContext);
  if (context === undefined) {
    throw new Error("useBani must be used within a BaniProvider");
  }
  return context;
}
