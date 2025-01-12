import React, { useState, useEffect } from "react";
import Link from "next/link";import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const Website = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    const [currentPage, setCurrentPage] = useState<string>("");
    
    useEffect(() => {
        if (typeof window !== "undefined") {
          const savedUrl = sessionStorage.getItem("currentUrl");
          if (savedUrl && window.location.pathname !== savedUrl) {
            window.history.pushState(null, "", savedUrl);
            setCurrentPage(savedUrl);
          }
        }
      }, [setCurrentPage]);
    
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
                        {language === "ไทย" ? "ผังเว็บไซต์" : "Sitemap"}
                    </h1>
                </div>
            </div>
            <div className="p-6">
            <div className="mb-6">
          <nav className="text-lg">
            <Link
              href="/division"
              className="text-blue-500 font-bold hover:underline"
              onClick={() => handleNavigation("/division")}>
              {language === "ไทย" ? "หน้าแรก" : "Home"}
            </Link>
            <span className="mx-2">/</span>
            <span>{language === "ไทย" ? "ผังเว็บไซต์" : "Sitemap"}</span>
          </nav>
        </div>

                <ul className="list-disc pl-6" style={{ fontSize: `${fontSize}px` }}>
                    <li>
                        <a href="division" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "หน้าแรก" : "Home"}</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "เกี่ยวกับเรา" : "About Us"}</a>
                        <ul className="list-circle pl-6">
                            <li>
                                <a href="structure" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "โครงสร้างหน่วยงาน" : "Organizational Structure"}</a>
                            </li>
                            <li>
                                <a href="/personnel" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "บุคลากร" : "Personnel"}</a>
                            </li>
                            <li>
                                <a href="law" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "กฎหมาย ระเบียบ หรือข้อบังคับที่เกี่ยวข้องกับหน่วยงาน" : "Laws, Regulations, or Related Policies"}</a>
                            </li>
                            <li>
                                <a href="/responsibilities" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "หน้าที่ความรับผิดชอบ" : "Responsibilities"}</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/strategy" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "ยุทธศาสตร์" : "Strategies"}</a>
                        <ul className="list-circle pl-6">
                            <li>
                                <a href="/strategy" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "ยุทธศาสตร์" : "Strategy"}</a>
                            </li>
                            <li>
                                <a href="/strategic-plan" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "เอกสารแผนยุทธศาสตร์ สำนักบริหารจัดการน้ำและอุทกวิทยา 20 ปี" : "20-Year Strategic Plan of Water Resources and Hydrology Bureau"}</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="knowledge" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "คลังความรู้" : "Knowledge Repository"}</a>
                    </li>
                    <li>
                        <a href="/circulars" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "หนังสือเวียน สบอ." : "Circular Letters"}</a>
                    </li>
                    <li>
                        <a href="/related-agencies" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "หน่วยงานที่เกี่ยวข้อง" : "Related Agencies"}</a>
                        <ul className="list-circle pl-6">
                            <li>
                                <a href="/strategy" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "หน่วยงานภายใน" : "Internal Department"}</a>
                            </li>
                            <li>
                                <a href="/strategic-plan" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "หน่วยงานภายนอก" : "External Department"}</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "ติดต่อเรา" : "Contact Us"}</a>
                    </li>
                    <li>
                        <a href="/news" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "ข่าวสารและกิจกรรม" : "News and Events"}</a>
                    </li>
                    <li>
                        <a href="website" className="hover:text-blue-500 hover:no-underline">{language === "ไทย" ? "ผังเว็บไซต์" : "Sitemap"}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Website;
