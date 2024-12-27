import React from "react";

interface Line {
  gurmukhi: string;
  englishTranslation: string;
  hindiTranslation: string;
  romanTransliteration: string;
  devanagariTransliteration: string;
}

interface PauriCardProps {
  line: Line;
  fontSize: "sm" | "md" | "lg";
}

const PauriCard: React.FC<PauriCardProps> = ({ line, fontSize }) => {
  const getFontSizeClass = () => {
    switch (fontSize) {
      case "sm":
        return "text-sm";
      case "lg":
        return "text-xl";
      default:
        return "text-base";
    }
  };

  return (
    <div
      className={`py-8 px-4 md:px-8 rounded-xl shadow-lg xl:min-w-6xl relative overflow-hidden bg-white dark:bg-gray-800 ${getFontSizeClass()}`}
    >
      <div className="space-y-8 relative z-10">
        <p className="text-center font-bold text-2xl leading-relaxed tracking-wide">
          {line.gurmukhi}
        </p>
        <div className="space-y-6 opacity-90">
          {/* Roman */}
          <div className="space-y-2">
            <p className="text-center italic">{line.romanTransliteration}</p>
            <p className="text-center">{line.englishTranslation}</p>
          </div>
          {/* Devanagari */}
          <div className="space-y-2">
            <p className="text-center font-devanagari italic">
              {line.devanagariTransliteration}
            </p>
            <p className="text-center font-hindi">{line.hindiTranslation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauriCard;
