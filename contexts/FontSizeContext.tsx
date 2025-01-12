"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface FontSizeContextType {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  increaseDisabled: boolean;
  decreaseDisabled: boolean;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<number>(16); // Default font size
  const [increaseCount, setIncreaseCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialFontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
      if (!isNaN(initialFontSize)) {
        setFontSize(initialFontSize);
      }
    }
  }, []);
  
  const increaseFontSize = () => {
    if (increaseCount < 4) {
      setFontSize((prev) => prev + 2); // Increase font size by 2px
      setIncreaseCount((prev) => prev + 1);
    }
  };

  const decreaseFontSize = () => {
    if (increaseCount > 0) {
      setFontSize((prev) => prev - 2); // Decrease font size by 2px
      setIncreaseCount((prev) => prev - 1);
    }
  };

  const increaseDisabled = increaseCount >= 4; // Disable increase button after 4 increases
  const decreaseDisabled = increaseCount === 0; // Disable decrease button when count is 0

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, increaseDisabled, decreaseDisabled }}>
      {children}
    </FontSizeContext.Provider>
  );
};
