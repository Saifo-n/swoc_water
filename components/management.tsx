"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Management = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const { fontSize } = useFontSize();

  const [currentPage, setCurrentPage] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUrl = sessionStorage.getItem("currentUrl");
      const currentPath = window.location.pathname;
      if (savedUrl && currentPath !== savedUrl) {
        window.history.replaceState(null, "", savedUrl);
        setCurrentPage(savedUrl);
      } else {
        setCurrentPage(currentPath);
      }
    }
  }, []);

  const handleNavigation = (url: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== url) {
      window.history.pushState(null, "", url);
      sessionStorage.setItem("currentUrl", url);
      setCurrentPage(url);
    }
  };

  return (
    <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
      <div
        className="relative h-[250px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontSize: `calc(1rem + ${fontSize}px)` }}
          >
            {language === "ไทย" ? "บุคลากร" : "Personnel"}
          </h1>
        </div>
      </div>

      <div className="text-left mt-1 px-6 py-8">
        <div className="mb-6">
          <nav className="text-lg">
            <Link
              href="/division"
              className="text-blue-500 font-bold hover:underline"
              onClick={() => handleNavigation("/division")}
            >
              {language === "ไทย" ? "หน้าแรก" : "Home"}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">
              {language === "ไทย" ? "เกี่ยวกับเรา" : "About Us"}
            </span>
            <span className="mx-2">/</span>
            <span>{language === "ไทย" ? "บุคลากร" : "Personnel"}</span>
          </nav>
        </div>

        <div className="flex justify-center mt-6 mb-12">
          <div className="w-full max-w-[1000px]">
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={5}
              wheel={{ disabled: false }}
              pinch={{ disabled: false }}
            >
              <TransformComponent>
                <img
                  src="/images/chart.png"
                  alt={language === "ไทย" ? "โครงสร้างหน่วยงาน" : "Organization Structure"}
                  className="cursor-move"
                  style={{ width: "100%", height: "auto" }}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
