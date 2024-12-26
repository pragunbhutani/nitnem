"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Possible font sizes
type FontSize = "sm" | "md" | "lg";

interface UserPreferencesContextProps {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const UserPreferencesContext = createContext<UserPreferencesContextProps>({
  fontSize: "md",
  setFontSize: () => {},
});

export const UserPreferencesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fontSize, setFontSizeState] = useState<FontSize>("md");

  // Optional: persist in localStorage or sessionStorage
  useEffect(() => {
    const storedSize = window.localStorage.getItem("fontSize");
    if (storedSize === "sm" || storedSize === "md" || storedSize === "lg") {
      setFontSizeState(storedSize);
    }
  }, []);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    window.localStorage.setItem("fontSize", size); // persist setting
  };

  return (
    <UserPreferencesContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => useContext(UserPreferencesContext);
