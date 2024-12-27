export type GraphicPath = {
  path: string;
  viewBox?: string;
  fill?: boolean;
};

export type Line = {
  gurmukhi: string;
  romanTransliteration: string;
  devanagariTransliteration: string;
  englishTranslation: string;
  hindiTranslation: string;
  graphic?: GraphicPath;
};

export type Pauri = {
  id: number;
  title: string;
  lines: Line[];
};
