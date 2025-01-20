"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const KnowledgePage = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    const [activeTab, setActiveTab] = useState("documents");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const activeItems = activeTab === "documents" ? documents : videos;
    const totalPages = Math.ceil(activeItems.length / itemsPerPage);
    const paginatedItems = activeItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    return (
        <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
            <div
                className="relative h-[250px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ fontSize: `calc(1rem + ${fontSize}px)` }}>
                        {language === "ไทย" ? "คลังความรู้" : "Knowledge Repository"}
                    </h1>
                </div>
            </div>
            <div className="text-left mt-1 px-6 py-8">
                <div className="mb-6">
                    <nav className="text-lg">
                        <Link href="/division" className="text-blue-500 font-bold hover:underline">
                            {language === "ไทย" ? "หน้าแรก" : "Home"}
                        </Link>
                        <span className="mx-2">/</span>
                        <span>
                            {language === "ไทย"
                                ? "คลั่งความรู้"
                                : "Knowledge Repository"}
                        </span>
                    </nav>
                </div>

                <div className="max-w-6xl mx-auto mt-2 py-4 px-4 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        className={`button ${activeTab === "documents"
                            ? "bg-blue-500 text-white shadow-lg transform scale-105 w-full sm:w-60"
                            : "bg-gray-200 text-black hover:bg-blue-100 hover:scale-105 w-full sm:w-60"
                            }`}
                        onClick={() => handleTabChange("documents")}
                    >
                        {language === "ไทย" ? "เอกสาร" : "Documents"}
                    </button>
                    <button
                        className={`button ${activeTab === "videos"
                            ? "bg-blue-500 text-white shadow-lg transform scale-105 w-full sm:w-60"
                            : "bg-gray-200 text-black hover:bg-blue-100 hover:scale-105 w-full sm:w-60"
                            }`}
                        onClick={() => handleTabChange("videos")}
                    >
                        {language === "ไทย" ? "วิดีโอ" : "Videos"}
                    </button>
                </div>

                <div className="max-w-7xl mx-auto py-8 px-4">
                    {activeTab === "documents" && (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {paginatedItems.map((doc) => (
                                    <div
                                        key={doc.id}
                                        className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full sm:w-72 mx-auto"
                                    >
                                        <a href={doc.linkUrl} target="_blank" rel="noopener noreferrer">
                                            <div className="flex justify-center p-2">
                                                <img
                                                    src={doc.thumbnailUrl || "/images/default-thumbnail.png"}
                                                    alt={doc.title}
                                                    className="w-full h-60 object-contain"
                                                />
                                            </div>
                                        </a>
                                        <div className="p-2 flex flex-col justify-center items-center text-center">
                                            <h3 className="text-lg font-bold mb-1" style={{ fontSize: `calc(0.2rem + ${fontSize - 4}px)` }}>
                                                {doc.title}
                                            </h3>
                                            <p className="text-sm mb-1">
                                                {language === "ไทย" ? "วันที่" : "Date"}: {doc.date}
                                            </p>
                                            <p className="text-sm">{doc.department}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "videos" && (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {paginatedItems.map((video) => (
                                    <div
                                        key={video.id}
                                        className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        <iframe
                                            src={`${video.linkUrl.replace("watch?v=", "embed/")}`}
                                            title={video.title}
                                            allow="autoplay; encrypted-media"
                                            className="w-full h-56"
                                        ></iframe>

                                        <div className="p-4">
                                            <h3 className="text-lg font-bold mb-2" style={{ fontSize: `calc(0.2rem + ${fontSize - 4}px)` }}>
                                                {video.title}
                                            </h3>
                                            <p className="text-sm mb-1">
                                                {language === "ไทย" ? "วันที่" : "Date"}: {video.date}
                                            </p>
                                            <p className="text-sm">{video.department}</p>
                                            <a
                                                href={video.linkUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                {language === "ไทย" ? "อ่านเพิ่มเติม" : "Read More"}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>

    );
};

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center items-center space-x-2 mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-400"}`}
            >
                {"<"}
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-400"
                        }`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-400"}`}
            >
                {">"}
            </button>
        </div>
    );
};

export default KnowledgePage;

const documents = [
    {
        id: 1,
        title: "คู่มือการปฏิบัติงานส่วนอุทกวิทยา",
        date: "18 ส.ค. 2019",
        department: "ส่วนอุทกวิทยา",
        thumbnailUrl: "/knowledge/knowledge01.png",
        linkUrl: "/knowledge/manual_hyd.pdf",
    },
    {
        id: 2,
        title: "คู่มือการคำนวณปริมาณน้ำ",
        date: "25 พ.ค. 2010",
        department: "กลุ่มงานสารสนเทศและมาตรวิทยา",
        thumbnailUrl: "/knowledge/knowledge02.png",
        linkUrl: "/knowledge/calcurate-rating_curve.pdf",
    },
    {
        id: 3,
        title: "คู่มือการสร้างความสัมพันธ์ระดับน้ำ-ปริมาณ (Rating Curve)",
        date: "25 พ.ค. 2010",
        department: "กลุ่มงานสารสนเทศและพยากรณ์สารสนเทศ",
        thumbnailUrl: "/knowledge/knowledge03.png",
        linkUrl: "/knowledge/problem-rating_curve.pdf",
    },
    {
        id: 4,
        title: "คู่มือการประเมินค่าปริมาณการไหลของน้ำ ด้วยวิธี Manning's formula",
        date: "25 พ.ค. 2010",
        department: "กลุ่มงานสารสนเทศและพยากรณ์สารสนเทศ",
        thumbnailUrl: "/knowledge/knowledge04.png",
        linkUrl: "/knowledge/manning_s_formula.pdf",
    },
    {
        id: 5,
        title: "คู่มือการกรอก Coding form",
        date: "25 พ.ค. 2010",
        department: "กลุ่มงานสารสนเทศและมาตรวิทยา",
        thumbnailUrl: "/knowledge/knowledge05.png",
        linkUrl: "/knowledge/c-form.pdf",
    },
    {
        id: 6,
        title: "คู่มือการใช้โปรแกรม Basin และ Station Unit Hydrograph",
        date: "1 ม.ค. 2011",
        department: "ดร.ทองเปลว กองจันทร์",
        thumbnailUrl: "/knowledge/Basin_page-0001.jpg",
        linkUrl: "/knowledge/Basin.pdf",
    },
    {
        id: 7,
        title: "ลำดับความสำคัญของงานปรับปรุง",
        date: "1 ม.ค. 1970",
        department: "-",
        thumbnailUrl: "/knowledge/knowledge07.png",
        linkUrl: "/knowledge/Imp_Management01.pdf",
    },
    {
        id: 8,
        title: "รายงานการศึกษาปรับปรุงเกณฑ์ปฏิบัติการอ่างเก็บน้ำ",
        date: "1 ก.ย. 2012",
        department: "ส่วนบริหารจัดการน้ำ",
        thumbnailUrl: "/knowledge/knowledge08.png",
        linkUrl: "/knowledge/Learning_Center_for_Agriculture.pdf",
    },
    {
        id: 9,
        title: "รายงานการปรับปรุงระบบพยากรณ์น้ำท่า",
        date: "1 ก.ย. 2012",
        department: "ส่วนบริหารจัดการน้ำ",
        thumbnailUrl: "/knowledge/knowledge09.png",
        linkUrl: "/knowledge/Streamflow forecasting.pdf",
    },
    {
        id: 10,
        title: "การเฝ้าระวังภัยน้ำท่วมเมืองพัทลุง",
        date: "18 ก.ค. 2014",
        department: "ศูนย์อุทกวิทยาภาคใต้",
        thumbnailUrl: "/knowledge/knowledge10.png",
        linkUrl: "/knowledge/phatthalung_57.pdf",
    },
    {
        id: 11,
        title: "การวิเคราะห์ความเสี่ยงของเขื่อนและอาคารประกอบ",
        date: "23 ก.ย. 2014",
        department: "คณะจัดทำคู่มือความเสี่ยงของเขื่อน",
        thumbnailUrl: "/knowledge/knowledge11.png",
        linkUrl: "/knowledge/mannual02.pdf",
    },
];

const videos = [
    {
        id: 1,
        title: "ประหยัดน้ำ (Save Water) - ว่าน ธนกฤต X เปา เปาวลี",
        date: "5 มิ.ย. 2022 / SWOC NEWs",
        department: "ประหยัดน้ำ (Save Water) - ว่าน ธนกฤต X เปา เปาวลี",
        linkUrl: "https://www.youtube.com/watch?v=ewnsShCZs10",
        thumbnailUrl: "/images/video01.png",
    },
    {
        id: 2,
        title: "รวมพลังประหยัดน้ำ สู้ภัยแล้ง",
        date: "5 พ.ค. 2020 / SWOC NEWs",
        department: "รวมพลังประหยัดน้ำ สู้ภัยแล้ง",
        linkUrl: "https://www.youtube.com/watch?v=A2m8_Q2wWF0",
        thumbnailUrl: "/images/video02.png",
    },
    {
        id: 3,
        title: "SWOC “นวัตกรรม สายน้ำ” แก้ไขปัญหา นำพาสุข",
        date: "30 พ.ย. 2021 / SWOC NEWs",
        department: "SWOC “นวัตกรรม สายน้ำ” แก้ไขปัญหา นำพาสุข",
        linkUrl: "https://www.youtube.com/watch?v=dXOmweRLSAQ",
        thumbnailUrl: "/images/video03.png",
    },
    {
        id: 4,
        title: "เรื่องเล่าจากสายน้ำ กว่าจะเป็น SWOC",
        date: "30 พ.ย. 2021 / SWOC NEWs",
        department: "เรื่องเล่าจากสายน้ำ กว่าจะเป็น SWOC",
        linkUrl: "https://www.youtube.com/watch?v=_w2NdLmeFJg",
        thumbnailUrl: "/images/video04.png",
    },
    {
        id: 5,
        title: "ความเป็นมา ตึก SWOC",
        date: "30 พ.ย. 2021 / SWOC NEWs",
        department: "ความเป็นมา ตึก SWOC",
        linkUrl: "https://www.youtube.com/watch?v=2R-XXbgGrTc",
        thumbnailUrl: "/images/video05.png",
    },
    {
        id: 6,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะ (2564)",
        date: "27 พ.ค. 2021 / SWOC NEWs",
        department: "ศูนย์ปฏิบัติการน้ำอัจฉริยะ (2564)",
        linkUrl: "https://www.youtube.com/watch?v=63CEU_vkk6o",
        thumbnailUrl: "/images/video06.png",
    },
];
