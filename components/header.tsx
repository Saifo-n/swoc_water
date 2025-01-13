"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";
import Link from "next/link";
import { usePage } from "@/contexts/PageContext";

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { fontSize, increaseFontSize, decreaseFontSize, increaseDisabled, decreaseDisabled } = useFontSize();
  const [openFontSizeOptions, setOpenFontSizeOptions] = useState(false);
  const { setCurrentPage } = usePage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedUrl = sessionStorage.getItem("currentUrl");
    if (savedUrl && window.location.pathname !== savedUrl) {
      window.history.pushState(null, "", savedUrl);
      setCurrentPage(savedUrl);
    }
  }, [setCurrentPage]);

  const handleNavigation = (url: string, index: number) => {
    if (window.location.pathname !== url) {
      window.history.pushState(null, "", url);
      sessionStorage.setItem("currentUrl", url);
      setCurrentPage(url);
      setSelectedIndex(index);
    }
  };

  const toggleFontSizeOptions = () => {
    setOpenFontSizeOptions(prev => !prev);
  };

  const toggleDropdown = (index: number) => {
    setDropdownOpen(prev => (prev === index ? null : index));
  };

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenIndex(null);
    }, 300);
    setTimeoutId(id);
  };

  const menuItems = [
    { title: "หน้าแรก", url: "division", th: "หน้าแรก", en: "Home" },
    {
      title: "เกี่ยวกับเรา",
      th: "เกี่ยวกับเรา",
      en: "About Us",
      dropdown: [
        { title: "โครงสร้างหน่วยงาน", url: "structure", th: "โครงสร้างหน่วยงาน", en: "Organizational Structure" },
        { title: "บุคลากร", url: "management", th: "บุคลากร", en: "Personnel" },
        { title: "กฎหมาย ระเบียบ หรือข้อบังคับที่เกี่ยวข้องกับหน่วยงาน", url: "law", th: "กฎหมาย ระเบียบ หรือข้อบังคับที่เกี่ยวข้องกับหน่วยงาน", en: "Laws, Regulations, or Rules Related to the Organization" },
        { title: "หน้าที่ความรับผิดชอบ", url: "responsibility", th: "หน้าที่ความรับผิดชอบ", en: "Responsibilities" },
      ]

    },
    {
      title: "ยุทธศาสตร์",
      th: "ยุทธศาสตร์",
      en: "Strategy",
      dropdown: [
        { title: "ยุทธศาสตร์", url: "strategic", th: "ยุทธศาสตร์", en: "Strategy" },
        { title: "เอกสารแผนยุทธศาสตร์ สำนักบริหารจัดการน้ำและอุทกวิทยา 20 ปี", url: "guarantee", th: "เอกสารแผนยุทธศาสตร์ สำนักบริหารจัดการน้ำและอุทกวิทยา 20 ปี", en: "Strategic Plan Document of the Office of Water Management and Hydrology for 20 Years" },
      ],
    },
    { title: "คลังความรู้", url: "knowledge", th: "คลังความรู้", en: "Knowledge Repository" },
    { title: "หนังสือเวียน สบอ.", url: "https://water.rid.go.th/hydhome/ma/book-hyd68.html", th: "หนังสือเวียน สบอ.", en: "Circulars" },
    {
      title: "หน่วยงานที่เกี่ยวข้อง",
      th: "หน่วยงานที่เกี่ยวข้อง",
      en: "Related Organizations",
      dropdown: [
        { title: "หน่วยงานภายใน", url: "internal", th: "หน่วยงานภายใน", en: "Department of Water Resources" },
        { title: "หน่วยงานภายนอก", url: "external", th: "หน่วยงานภายนอก", en: "External Department" },
      ],
    },
    { title: "ติดต่อเรา", url: "contact", th: "ติดต่อเรา", en: "Contact Us" },
    { title: "ข่าวสารและกิจกรรม", url: "https://www.facebook.com/Kromchon", th: "ข่าวสารและกิจกรรม", en: "News and Events" },
    { title: "ผังเว็บไซต์", url: "website", th: "ผังเว็บไซต์", en: "Sitemap" },
  ];

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <div className="w-full h-8 bg-[#143556] flex items-center justify-end gap-4 px-4">
        <button
          onClick={toggleLanguage}
          className="text-white font-medium hover:underline"
        >
          <img
            src="/images/internet-write.png"
            alt="Change Language"
            width={20}
            height={20}
            className="inline-block mr-2"
          />
          {language}
        </button>

        <div className="relative inline-block">
          <button
            onClick={toggleFontSizeOptions}
            className="text-white flex items-center justify-center rounded-md w-10 h-10"
          >
            <img
              src="/images/font-size.png"
              alt="Adjust Font Size"
              width={20}
              height={20}
            />
          </button>

          {openFontSizeOptions && (
            <div
              className="absolute right-0 mt-2 shadow-md rounded-lg p-2 flex items-center justify-between border border-gray-300"
              style={{ backgroundColor: "#ffffff", opacity: 1, zIndex: 9999 }}
            >
              <button
                onClick={decreaseFontSize}
                className={`font-size-button ${decreaseDisabled ? "bg-gray-400 cursor-not-allowed" : ""}`}
                disabled={decreaseDisabled}
              >
                <img
                  src="/images/text-delete.png"
                  alt="Decrease Font Size"
                  width={20}
                  height={20}
                />
              </button>
              <button
                onClick={increaseFontSize}
                className={`font-size-button ${increaseDisabled ? "bg-gray-400 cursor-not-allowed" : ""}`}
                disabled={increaseDisabled}
              >
                <img
                  src="/images/text-plus.png"
                  alt="Increase Font Size"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
        </div>

        <button
          onClick={toggleDarkMode}
          className={`text-white font-medium hover:underline ${isDarkMode ? "text-white" : "text-blue-900"}`}
        >
          <img
            src={isDarkMode ? "/images/off-night.png" : "/images/off-sun.png"}
            alt="Toggle Dark Mode"
            width={40}
            height={30}
            className="inline-block mr-2"
          />
        </button>
      </div>

      <header className={`shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
        <div className="flex items-center justify-between p-4 font-bold">
          <div className="flex items-center font-bold">
            <img src="/images/logo.png" alt="Logo" width={40} height={40} />
            <span className={`ml-2 font-bold ${isDarkMode ? "text-white" : "text-blue-900"}`}>
              ส่วนประมวลวิเคราะห์สถานการณ์น้ำ
            </span>
          </div>

          <nav className={`hidden lg:flex items-center space-x-8 font-bold ${isDarkMode ? "text-white" : "text-blue-900"}`}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.url && item.url.startsWith("http") ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`nav-link font-bold${selectedIndex === index ? "text-gray-800" : (isDarkMode ? "text-gray-300" : "text-blue-900")} font-bold flex items-center transition-all duration-300 transform hover:text-gray-800 hover:scale-105`}
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {language === "ไทย" ? item.th : item.en}
                  </a>
                ) : (
                  <Link
                    href={item.url || "#"}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.url || "#", index);
                    }}
                    className={`nav-link ${selectedIndex === index ? "text-gray-800" : (isDarkMode ? "text-gray-300" : "text-blue-900")} font-bold flex items-center transition-all duration-300 transform hover:text-gray-800 hover:scale-105`}
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {language === "ไทย" ? item.th : item.en}
                    {item.dropdown && (
                      <span className="ml-2">
                        {openIndex === index ? "⮝" : "⮟"}
                      </span>
                    )}
                  </Link>
                )}

                {item.dropdown && openIndex === index && (
                  <div className={`absolute left-0 shadow-lg p-2 mt-2 rounded-md z-10 w-80 font-bold ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.url || "#"}
                        className={`block px-4 py-2 text-sm font-bold ${isDarkMode ? "text-white" : "text-blue-900"} ${isDarkMode ? "hover:bg-black" : "hover:bg-gray-300"} transition-colors duration-200`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(dropdownItem.url || "#", index);
                        }}
                      >
                        {language === "ไทย" ? dropdownItem.th : dropdownItem.en}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-blue-900 lg:hidden ${isDarkMode ? "text-white" : "text-blue-900"}`}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {menuOpen && (
  <nav className={`font-bold ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-blue-900"}`}>
    {menuItems.map((item, index) => (
      <div key={index} className="border-b">
        <button
          onClick={() => {
            if (!item.dropdown) {
              if (item.url === "https://water.rid.go.th/hydhome/ma/book-hyd68.html" || item.url === "https://www.facebook.com/Kromchon") {
                window.open(item.url, "_blank");
              } else {
                handleNavigation(item.url || "#", index);
              }
              setMenuOpen(false);
            } else {
              toggleDropdown(index);
            }
          }}
          className={`block w-full py-3 text-left px-4 font-medium font-bold ${isDarkMode ? "text-white" : "text-blue-900"}`}
        >
          {language === "ไทย" ? item.th : item.en}
          {item.dropdown && (
            <span className="ml-2">
              {dropdownOpen === index ? "⮝" : "⮟"}
            </span>
          )}
        </button>

        {item.dropdown && dropdownOpen === index && (
          <div className={`pl-8 font-bold ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-blue-900"}`}>
            {item.dropdown.map((dropdownItem, idx) => (
              <Link
                key={idx}
                href={dropdownItem.url || "#"}
                className={`block px-4 py-2 text-sm font-bold ${isDarkMode ? "text-white hover:bg-gray-700" : "text-blue-900 hover:bg-gray-200"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(dropdownItem.url || "#", index);
                  setMenuOpen(false);
                }}
              >
                {language === "ไทย" ? dropdownItem.th : dropdownItem.en}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </nav>
)}

      </header>
    </div>
  );
};

export default Header;
