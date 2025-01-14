"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const { fontSize } = useFontSize();

  return (
    <footer className={isDarkMode ? "bg-gray-800 text-white" : "bg-[#1A4A73] text-white"}>
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-start gap-4 flex-wrap">

        <div className="flex-1 min-w-[250px] mb-4 md:mb-0">
          <img src="/images/logo.png" alt="Logo" className="h-20 w-18 mb-2" />
          <p style={{ fontSize: `${fontSize}px` }}>
            {language === "ไทย" ? "ส่วนประมวลวิเคราะห์สถานการณ์น้ำ" : "Water Situation Analysis Unit"}
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>
            {language === "ไทย"
              ? "ที่อยู่: 811 ถนนสามเสน แขวงถนนนครไชยศรี เขตดุสิต กรุงเทพมหานคร 10300"
              : "Address: 811 Samsen Rd, Nakhon Chai Si, Dusit, Bangkok 10300"}
          </p>
        </div>

        <div className="flex-1 min-w-[100px] mb-4 md:mb-0">
          <h4 className="font-bold mb-0" style={{ fontSize: `${fontSize}px`, marginBottom: "0.25rem" }}>
            {language === "ไทย" ? "ช่วยเหลือ" : "Help"}
          </h4>
          <ul className="list-none">
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="#!" className="hover:underline">
                {language === "ไทย" ? "• คำถามที่พบบ่อย" : "• FAQ"}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[260px] mb-4 md:mb-0">
          <h4 className="font-bold mb-2" style={{ fontSize: `${fontSize}px` }}>
            {language === "ไทย" ? "ติดต่อเรา" : "Contact Us"}
          </h4>
          <ul>
            <li style={{ fontSize: `${fontSize}px` }}>
              {language === "ไทย" ? "• โทรศัพท์: 02-6692560" : "• Phone: 02-6692560"}
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              {language === "ไทย" ? "• โทรสาร: 02-2431098, 02-2436956" : "• Fax: 02-2431098, 02-2436956"}
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              {language === "ไทย" ? "• อีเมล: wmsc.1460@gmail.com" : "• Email: wmsc.1460@gmail.com"}
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[270px] mb-4 md:mb-0">
          <h4 className="font-bold mb-2" style={{ fontSize: `${fontSize}px` }}>
            {language === "ไทย" ? "เว็บไซต์" : "Websites"}
          </h4>
          <ul className="list-none">
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="https://www.rid.go.th/index.php/th/" target="_blank" className="block hover:underline">
                {language === "ไทย" ? "• กรมชลประทาน" : "• Irrigation Department"}
              </a>
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="http://hydrology.rid.go.th/" target="_blank" className="block hover:underline">
                {language === "ไทย"
                  ? "• สำนักบริหารจัดการน้ำและอุทกวิทยา"
                  : "• Water Resources and Hydrology Bureau"}
              </a>
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="https://wmsb.rid.go.th/" target="_blank" className="block hover:underline">
                {language === "ไทย"
                  ? "• ฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ"
                  : "• Water Situation Analysis Unit"}
              </a>
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="http://hydrology.rid.go.th/wsmf/ridtele.html" target="_blank" className="block hover:underline">
                {language === "ไทย"
                  ? "• ฝ่ายติดตามและพยากรณ์สถานการณ์น้ำ"
                  : "• Water Situation Monitoring and Forecasting Unit"}
              </a>
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="https://wmsc.rid.go.th/" target="_blank" className="block hover:underline">
                {language === "ไทย"
                  ? "• ศูนย์ปฏิบัติการน้ำอัจริยะ"
                  : "• Smart Water Operations Center"}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[280px] mb-4 md:mb-0">
          <ul className="list-none mt-8">
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="https://swocmodel.rid.go.th/" target="_blank" className="block hover:underline">
                {language === "ไทย" ? "• SWOC MODEL" : "• SWOC MODEL"}
              </a>
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="https://swoc.rid.go.th/" target="_blank" className="block hover:underline">
                {language === "ไทย" ? "• Swoc.rid.go.th" : "• Swoc.rid.go.th"}
              </a>
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="https://bigdata-swoc.rid.go.th/dashboard" target="_blank" className="block hover:underline">
                {language === "ไทย" ? "• BigData" : "• BigData"}
              </a>
            </li>
            <li style={{ fontSize: `${fontSize}px` }}>
              <a href="https://telerid.rid.go.th/#/" target="_blank" className="block hover:underline">
                {language === "ไทย"
                  ? "• โทรมาตรเพื่อการพยากรณ์น้ำและเตือนภัย"
                  : "• Telemetry for Water Forecasting and Warning"}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] mb-4 md:mb-0">
          <h4 className="font-bold mb-2" style={{ fontSize: `${fontSize}px` }}>
            {language === "ไทย" ? "เครือข่ายสังคมออนไลน์" : "Social Media"}
          </h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Kromchon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" className="w-10 h-10 object-contain" />
            </a>
            <a href="https://www.youtube.com/channel/UCO-9E_WRW_YNaU-29thdhsg" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <img src="/images/youtube.png" alt="YouTube" className="w-10 h-10 object-contain" />
            </a>
            <a href="https://page.line.me/gql5082z" aria-label="Line" target="_blank" rel="noopener noreferrer">
              <img src="/images/line.png" alt="Line" className="w-10 h-10 object-contain" />
            </a>
            <a href="https://x.com/pr_rid" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.png" alt="Twitter" className="w-10 h-10 object-contain" />
            </a>
            <a href="https://www.tiktok.com/@kromchon_rid" aria-label="Tiktok" target="_blank" rel="noopener noreferrer">
              <img src="/images/tiktok.png" alt="Tiktok" className="w-10 h-10 object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#143556] py-2 text-center">
        <p style={{ fontSize: `${fontSize}px` }}>
          {language === "ไทย" ? "@ลิขสิทธิ์ 2024 กรมชลประทาน" : "@Copyright 2024 Irrigation Department"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
