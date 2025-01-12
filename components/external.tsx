"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const External = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const { fontSize } = useFontSize();

  const [currentPage, setCurrentPage] = useState<string>("");

  // จัดการ URL ปัจจุบันเมื่อโหลดหน้า
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

  const departments = [
    { title: "สำนักทรัพยากรน้ำแห่งชาติ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Emblem_of_the_Office_of_the_National_Water_Resources.svg/1200px-Emblem_of_the_Office_of_the_National_Water_Resources.svg.png", link: "http://www.onwr.go.th/" },
    { title: "กรมอุตุนิยมวิทยา", image: "https://upload.wikimedia.org/wikipedia/commons/6/63/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%B8%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2.png", link: "https://www.tmd.go.th/" },
    { title: "สถาบันสารสนเทศทรัพยากรน้ำ", image: "https://gdcatalog.go.th/assets/images/organization_logo/hii.png", link: "https://www.hii.or.th/" },
    { title: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย", image: "https://gdcatalog.go.th/assets/images/organization_logo/fifha.png", link: "https://www.egat.co.th/home/" },
    { title: "กรมทรัพยากรน้ำ", image: "https://upload.wikimedia.org/wikipedia/th/2/26/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B3.gif", link: "https://www.dwr.go.th/index.php" },
    { title: "กรมโยธาธิการและผังเมือง", image: "https://upload.wikimedia.org/wikipedia/th/f/fd/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%82%E0%B8%A2%E0%B8%98%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87.png", link: "https://www.dpt.go.th/th" },
    { title: "กรมทางหลวงชนบท", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Seal_of_the_Department_of_Rural_Roads_of_Thailand.svg", link: "https://drr.go.th/" },
    { title: "สถาบันน้ำและสิ่งแวดล้อมเพื่อความยั่งยืน สภาอุตสาหกรรมแห่งประเทศไทย", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JZMXCZ2-pVN4hdgVzpl_6kifrFwjPrTaQQ&s", link: "https://weis.fti.or.th/" },
    { title: "สำนักการระบายน้ำ", image: "https://iao.bangkok.go.th/storage/uploads/form//81899/1653375310_Untitled-12%20%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3.png", link: "https://dds.bangkok.go.th/" },
    { title: "สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ", image: "https://gdcatalog.go.th/assets/images/organization_logo/gistda.png", link: "https://www.gistda.or.th/home.php" },
    { title: "กรมป้องกันและบรรเทาสาธรณภัย", image: "https://gdcatalog.go.th/assets/images/organization_logo/ddpm.png", link: "https://www.disaster.go.th/" },
    { title: "กรมอุทกศาสตร์", image: "https://lh6.googleusercontent.com/proxy/80HwfC5U626lrcuGqyVdPc4g9xdNNJNCnDE0gbe_FPfIOkxhXLVJZ-AYq0ViB9z-Xt4AI9Y", link: "http://www.hydro.navy.mi.th/" },
    { title: "การประปานครหลวง", image: "https://gdcatalog.go.th/assets/images/organization_logo/mwa.png", link: "https://web.mwa.co.th/" },
    { title: "ฐานข้อมูลหน่วยงานรัฐ", image: "https://www.suratcity.go.th/web/components/com_flexicontent/uploads/02-logo2-block-wxh100-2021-1920x540-600dpi-1.png", link: "https://www.oic.go.th/ginfo/" },
    { title: "การประปาส่วนภูมิภาค", image: "https://gdcatalog.go.th/assets/images/organization_logo/pwa.png", link: "https://www.pwa.co.th/" },
    { title: "กรมฝนหลวงและการบินเกษตร", image: "https://gdcatalog.go.th/assets/images/organization_logo/drraa.png", link: "https://www.royalrain.go.th/" },
    { title: "กปร.", image: "https://catalog.rdpb.go.th/uploads/admin/2022-10-28-035654.612226logo-RDPB.png", link: "https://www.rdpb.go.th/th" },
  ];

  return (
    <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
      {/* Header Section */}
      <div
        className="relative h-[250px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontSize: `calc(1rem + ${fontSize}px)` }}
          >
            {language === "ไทย" ? "หน่วยงานภายนอก" : "External Department"}
          </h1>
        </div>
      </div>

      {/* Navigation Section */}
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
              {language === "ไทย" ? "หน่วยงานที่เกี่ยวข้อง" : "Related Organizations"}
            </span>
            <span className="mx-2">/</span>
            <span>{language === "ไทย" ? "หน่วยงานภายนอก" : "External Department"}</span>
          </nav>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((department, index) => (
            <a
              key={index}
              href={department.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden border border-gray-300 transition duration-300 flex flex-col items-center"
            >
              <div className="w-[100px] h-[100px] flex justify-center items-center">
                <img
                  src={department.image}
                  alt={department.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-4 text-center">
                <h2
                  className={`text-sm font-semibold ${isDarkMode ? "text-black" : ""}`}
                  style={{ fontSize: `calc(0.1rem + ${fontSize}px)` }}
                >
                  {department.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default External;
