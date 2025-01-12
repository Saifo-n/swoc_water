import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const Law = () => {
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

    const pdfLinks = [
        {
            title: "กฎหมายและระเบียบ",
            files: [
                { name: "กฎกระทรวง แบ่งส่วนราชการกรมชลประทาน กระทรวงเกษตรและสหกรณ์ พ.ศ. 2557", link: "pdfs/rid-57.pdf" },
                { name: "กฎกระทรวง แบ่งส่วนราชการกรมชลประทาน กระทรวงเกษตรและสหกรณ์ พ.ศ. 2554", link: "pdfs/w_009.pdf" },
                { name: "กฎกระทรวง แบ่งส่วนราชการกรมชลประทาน กระทรวงเกษตรและสหกรณ์ พ.ศ. 2545 (ปรับปรุง)", link: "pdfs/w_007.pdf" },
                { name: "กฎกระทรวง แบ่งส่วนราชการกรมชลประทาน กระทรวงเกษตรและสหกรณ์ พ.ศ. 2545", link: "pdfs/w_006.pdf" },
                { name: "ระเบียบสำนักนายกรัฐมนตรีว่าด้วยการมอบอำนาจ พ.ศ. 2546", link: "pdfs/w_005.pdf" },
                { name: "พ.ร.ฎ.การบริหารกิจการบ้านเมืองที่ดิน พ.ศ. 2546", link: "pdfs/w_004.pdf" },
                { name: "พ.ร.บ.ข้อมูลข่าวสารของราชการ พ.ศ. 2540", link: "pdfs/w_003.pdf" },
                { name: "พ.ร.บ.ปรบปรุงกระทรวง ทบวง กรม พ.ศ. 2545", link: "pdfs/w_002.pdf" },
                { name: "พ.ร.บ.ระเบียบบริหารราชการแผ่นดิน (ฉบับที่ 5) พ.ศ. 2545", link: "pdfs/w_001.pdf" },
                { name: "พระราชบัญญัติที่ราชพัสดุ การจัดสวัสดิการและกฎกระทรวงที่เกี่ยวข้อง", link: "pdfs/พรบ_ชลประทานหลวง2485.pdf" },
                { name: "พ.ร.บ.ชลประทานหลวง2485", link: "pdfs/กรมธนารักษ์_Final_กรมชลประทาน_PPT_1.pdf" }
            ],
        },
        {
            title: "กฎหมายที่อยู่ในความรับผิดชอบของกรม",
            files: [
                { name: "พระราชบัญญัติจัดรูปที่ดินเพื่อเกษตรกรรม พ.ศ. 2558", link: "pdfs/judroob.pdf" },
                { name: "พระราชบัญญัติจัดรูปที่ดินเพื่อเกษตรกรรม พ.ศ. 2517", link: "pdfs/005.pdf" },
                { name: "พระราชบัญญัติคันและคูน้ำ พ.ศ. 2505", link: "pdfs/005.pdf" },
                { name: "พระราชบัญญัติการชลประทานหลวง พุทธศักราช 2485", link: "pdfs/003.pdf" },
                { name: "พระราชบัญญัติการชลประทานราษฎร์ พุทธศักราช 2482", link: "pdfs/002.pdf" },
                { name: "พระราชบัญญัติรักษาคลอง รัตนโกสินทร์ ศก 121 (พ.ศ. 2445)", link: "pdfs/001.pdf" },
                { name: "พ.ร.บ.น้ำ2561", link: "pdfs/พรบน้ำ2561.pdf" }
            ],
        },
        {
            title: "กฎหมายที่เกี่ยวข้อง",
            files: [
                { name: "ระเบียบสำนักนายกรัฐมนตรี ว่าด้วยการรับฟังความคิดเห็นของประชาชน พ.ศ. 2548", link: "pdfs/021.pdf" },
                { name: "ประมวลกฎหมายแพ่งและพาณิชย์", link: "pdfs/020.pdf" },
                { name: "ประมวลกฎหมายที่ดิน", link: "pdfs/019.pdf" },
                { name: "พระราชบัญญัติกำหนดแผนและขั้นตอนการกระจายอำนาจให้แก่องค์กรปกครองส่วนท้องถิ่น พ.ศ. 2542", link: "pdfs/018.pdf" },
                { name: "พระราชบัญญัติวิธีปฏิบัติราชการทางปกครอง พ.ศ. 2539", link: "pdfs/016.pdf" },
                { name: "พระราชบัญญัติสวนป่า พ.ศ. 2535", link: "pdfs/015.pdf" },
                { name: "พระราชบัญญัติสงวนและคุ้มครองสัตว์ป่า พ.ศ. 2535", link: "pdfs/014.pdf" },
                { name: "พระราชบัญญัติส่งเสริมและรักษาคุณภาพสิ่งแวดล้อมแห่งชาติ พ.ศ. 2535", link: "pdfs/013.pdf" },
                { name: "พระราชบัญญัติที่ราชพัสดุ พ.ศ. 2518", link: "pdfs/011.pdf" },
                { name: "พระราชบัญญัติการปฏิรูปที่ดินเพื่อเกษตรกรรม พ.ศ. 2518", link: "pdfs/010.pdf" },
                { name: "พระราชบัญญัติจัดที่ดินเพื่อการครองชีพ พ.ศ. 2511", link: "pdfs/009.pdf" },
                { name: "พระราชบัญญัติป่าสงวนแห่งชาติ พ.ศ. 2507", link: "pdfs/008.pdf" },
                { name: "พระราชบัญญัติอุทยานแห่งชาติ พ.ศ. 2504", link: "pdfs/007.pdf" },
                { name: "พระราชบัญญัติป่าไม้ พุทธศักราช 2484", link: "pdfs/006.pdf" },
                { name: "พ.ร.บ.น้ำ2561", link: "pdfs/พรบน้ำ2561.pdf" }
            ],
        },
    ];

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
                        {language === "ไทย" ? "กฎหมาย ระเบียบ หรือข้อบังคับที่เกี่ยวข้องกับหน่วยงาน" : "Laws, Regulations, or Rules Related to the Organization"}
                    </h1>
                </div>
            </div>

            <div className="text-left mt-1 px-6 py-8">
                <div className="mb-6">
                    <nav className="text-lg">
                        <Link
                            href="/division"
                            className="text-blue-500 font-bold hover:underline"
                            onClick={() => handleNavigation("/division")}>
                            {language === "ไทย" ? "หน้าแรก" : "Home"}
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="font-semibold">
                            {language === "ไทย" ? "เกี่ยวกับเรา" : "About Us"}
                        </span>
                        <span className="mx-2">/</span>
                        <span>{language === "ไทย" ? "กฎหมาย ระเบียบ หรือข้อบังคับที่เกี่ยวข้องกับหน่วยงาน" : "Laws, Regulations, or Rules Related to the Organization"}</span>
                    </nav>
                </div>

                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pdfLinks.map((section, index) => (
                        <div key={index} className={`bg-${isDarkMode ? 'gray-800' : 'white'} rounded-lg shadow-md p-4`}>
                            <h2 className={`text-2xl font-semibold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-blue-500'} font-bold`}
                                style={{ fontSize: `calc(0.3rem + ${fontSize}px)` }}
                            >
                                {section.title}
                            </h2>
                            <ul className="space-y-2">
                                {section.files.map((file, fileIndex) => (
                                    <li key={fileIndex} className="flex items-center">
                                        <img src="images/download.png" alt="Download" className="mr-2 w-5 h-5" />
                                        <a
                                            href={file.link}
                                            download
                                            className={`text-blue-900 hover:text-blue-700 transition duration-300 ${isDarkMode ? 'text-white' : ''}`}
                                            style={{ fontSize: `${fontSize}px` }}
                                        >
                                            {file.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Law;
