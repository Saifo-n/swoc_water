"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const Guarantee = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะการโหลด
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchDocuments = async () => {
            setLoading(true); // เริ่มโหลดข้อมูล
            try {
                // สมมติว่าเราดึงข้อมูลจาก API
                const doc = [
                    {
                        id: 1,
                        title: language === "ไทย" ? "แผนยุทธศาสตร์ 20 ปี" : "20-Year Strategic Plan",
                        thumbnailUrl: "https://wmsw.rid.go.th/sbe/media/img_section/20y.png",
                        linkUrl: "/pdfs/10.pdf",
                    },
                    // More documents can be added here
                ];
                setDocuments(doc); // อัพเดทเอกสาร
            } catch (error) {
                console.error("Failed to fetch documents:", error);
            } finally {
                setLoading(false); // การโหลดเสร็จสิ้น
            }
        };

        fetchDocuments(); // เรียกใช้ฟังก์ชันดึงข้อมูลเอกสาร
    }, [language]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(documents.length / itemsPerPage);
    const paginatedItems = documents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
            <div className="relative h-[250px] bg-cover bg-center" style={{ backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ fontSize: `calc(1rem + ${fontSize}px)` }}>
                        {language === "ไทย" ? "เอกสารแผนยุทธศาสตร์ สำนักบริหารจัดการน้ำและอุทกวิทยา 20 ปี" : "Strategic Plan of the Water Resources and Hydrology Management Bureau: 20-Year Plan"}
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
                        <span className="font-semibold">
                            {language === "ไทย" ? "ยุทธศาสตร์" : "Strategy"}
                        </span>
                        <span className="mx-2">/</span>
                        <span>{language === "ไทย" ? "เอกสารแผนยุทธศาสตร์ สำนักบริหารจัดการน้ำและอุทกวิทยา 20 ปี" : "Strategic Plan of the Water Resources and Hydrology Management Bureau: 20-Year Plan"}</span>
                    </nav>
                </div>

                <div className="max-w-6xl mx-auto py-8 px-4">
                    {loading ? (
                        <div className="text-center">กำลังโหลดข้อมูล...</div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                            {paginatedItems.map((doc) => (
                                <div key={doc.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full max-w-xs">
                                    <a href={doc.linkUrl} download className="flex flex-col items-center">
                                        <div className="flex justify-center w-full">
                                            <img src={doc.thumbnailUrl || null} alt={doc.title} className="w-full h-auto object-cover" />
                                        </div>
                                        <h3 className="text-lg font-bold mt-2" style={{ fontSize: `calc(0.2rem + ${fontSize - 4}px)` }}>
                                            {doc.title}
                                        </h3>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center items-center space-x-2 mt-6">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-400"}`}>
                {"<"}
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-400"}`}
                >
                    {index + 1}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-400"}`}>
                {">"}
            </button>
        </div>
    );
};

export default Guarantee;
