"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const News = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedPage = sessionStorage.getItem("currentPage");
            if (savedPage) {
                setCurrentPage(parseInt(savedPage, 10));
            }
        }
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        if (typeof window !== "undefined") {
            sessionStorage.setItem("currentPage", page.toString());
        }
    };

    const totalPages = Math.ceil(documents.length / itemsPerPage);
    const paginatedItems = documents.slice(
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
                    <h1
                        className="text-4xl font-bold mb-4"
                        style={{ fontSize: `calc(1rem + ${fontSize}px)` }}
                    >
                        {language === "ไทย" ? "ข่าวสารและกิจกรรม" : "News and Events"}
                    </h1>
                </div>
            </div>

            <div className="text-left mt-1 px-6 py-8">
                <div className="mb-1">
                    <nav className="text-lg">
                        <Link
                            href="/division"
                            className="text-blue-500 font-bold hover:underline"
                        >
                            {language === "ไทย" ? "หน้าแรก" : "Home"}
                        </Link>
                        <span className="mx-2">/</span>
                        <span>
                            {language === "ไทย" ? "ข่าวสารและกิจกรรม" : "News and Events"}
                        </span>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
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
                                <div className="p-6 flex flex-col justify-center items-center text-center">
                                    <p className="text-sm mb-1">
                                        {language === "ไทย" ? "วันที่" : "Date"}: {doc.date}
                                    </p>
                                    <h3
                                        className="text-lg font-bold mb-1"
                                        style={{ fontSize: `calc(0.2rem + ${fontSize - 4}px)` }}
                                    >
                                        {doc.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

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

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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
                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-400"}`}
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

export default News;

const documents = [
    {
        id: 1,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะให้การต้อนรับคณะผู้ฝึกอบรมหลักสูตรผู้อำนวยการท้องถิ่น รุ่นที่ 20 และหลักสูตรครูฝึกป้องกันและบรรเทาสาธารณภัย รุ่นที่ 16",
        date: "3 กรกฎาคม 2567",
        thumbnailUrl: "/naws/ต้อนรับ ปภ. 030767.jpg",
        linkUrl: "/naws/ต้อนรับ ปภ. 030767.pdf",
    },
    {
        id: 2,
        title: "สบอ. ให้การต้อนรับคณะผู้เข้ารับการฝึกอบรมหลักสูตรวิทยาการเกษตรระดับสูง (วกส.) รุ่นที่ 5",
        date: "28 มิถุนายน 2567",
        thumbnailUrl: "/naws/280667 ต้อนรับ วกส.jpg",
        linkUrl: "/naws/280667 ต้อนรับ วกส.pdf",
    },
    {
        id: 3,
        title: "สบอ. ให้การต้อนรับคณะจากศูนย์เตรียมความพร้อมป้องกันภัยพิบัติแห่งเอเชีย(Asian Disaster Preparedness Center: ADPC)",
        date: "27 มิถุนายน 2567",
        thumbnailUrl: "/naws/270667 ต้อนรับ ADPC.jpg",
        linkUrl: "/naws/270667 ต้อนรับ ADPC.pdf",
    },
    {
        id: 4,
        title: "สบอ. ต้อนรับนักวิจัยไทยและนักวิจัยต่างชาติ โดยคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        date: "6 มิถุนายน 2567",
        thumbnailUrl: "/naws/060667 ต้อนรับ นักวิจัยจุฬาลงกรณ์มหาวิทยาลัย.jpg",
        linkUrl: "/naws/060667 ต้อนรับ นักวิจัยจุฬาลงกรณ์มหาวิทยาลัย.pdf",
    },
    {
        id: 5,
        title: "สบอ. ให้การต้อนรับคณะผู้แทนจากกระทรวงสิ่งแวดล้อมญี่ปุ่น ประเทศญี่ปุ่น",
        date: "6 มิถุนายน 2567",
        thumbnailUrl: "/naws/060667 ต้อนรับ กระทรวงสิ่งแวดล้อมญี่ปุ่น.jpg",
        linkUrl: "/naws/060667 ต้อนรับ กระทรวงสิ่งแวดล้อมญี่ปุ่น.pdf",
    },

    {
        id: 6,
        title: "สบอ. ต้อนรับคณะผู้อบรมหลักสูตรผู้นำการส่งเสริมเมืองอัจฉริยะ",
        date: "14 พฤษภาคม 2567",
        thumbnailUrl: "/naws/140567 ต้อนรับ หลักสูตรผู้นำการส่งเสริมเมืองอัจฉริยะ.jpg",
        linkUrl: "/naws/140567 ต้อนรับ หลักสูตรผู้นำการส่งเสริมเมืองอัจฉริยะ.pdf",
    },
    {
        id: 7,
        title: "รธบ. ให้การต้อนรับคณะนักศึกษาหลักสูตรการบริหารจัดการด้านความมั่นคงขั้นสูง รุ่นที่ 16",
        date: "5 เมษายน 2567",
        thumbnailUrl: "/naws/050467 ต้อนรับ ด้านความมั่นคงขั้นสูง รุ่น 16.jpg",
        linkUrl: "/naws/050467 ต้อนรับ ด้านความมั่นคงขั้นสูง รุ่น 16.pdf",
    },
    {
        id: 8,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะให้การต้อนรับ อาจารย์ นักศึกษา คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยา",
        date: "29 มีนาคม 2567",
        thumbnailUrl: "/naws/290367 ต้อนรับ สมเด็จเจ้าพระยา.jpg",
        linkUrl: "/naws/290367 ต้อนรับ สมเด็จเจ้าพระยา.pdf",
    },
    {
        id: 9,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะให้การต้อนรับคณะผู้เข้าอบรมหลักสูตรครูฝึกป้องกันและบรรเทาสาธารณภัย",
        date: "5 มีนาคม 2567",
        thumbnailUrl: "/naws/050467 ต้อนรับ ด้านความมั่นคงขั้นสูง รุ่น 16.jpg",
        linkUrl: "/naws/050467 ต้อนรับ ด้านความมั่นคงขั้นสูง รุ่น 16.pdf",
    },
    {
        id: 10,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะให้การต้อนรับคณะอาจารย์ และนิสิต จากวิทยาลัยการชลประทาน",
        date: "4 มีนาคม 2567",
        thumbnailUrl: "/naws/040367 ต้อนรับ วิทยาลัยชลประทาน.jpg",
        linkUrl: "/naws/040367 ต้อนรับ วิทยาลัยชลประทาน.pdf",
    },
    {
        id: 11,
        title: "รธบ. ให้การต้อนรับคณะศึกษาดูงานศูนย์ปฏิบัติการน้ำอัจฉริยะ (SWOC)",
        date: "27 กุมภาพันธ์ 2567",
        thumbnailUrl: "/naws/270267 ต้อนรับ World Bank.jpg",
        linkUrl: "/naws/270267 ต้อนรับ World Bank.pdf",
    },
    {
        id: 12,
        title: "สบอ. ให้การต้อนรับพร้อมร่วมหารือกระทรวงที่ดินโครงสร้างพื้นฐานการขนส่ง และการท่องเที่ยวของญี่ปุ่น (MLIT)",
        date: "23 กุมภาพันธ์ 2567",
        thumbnailUrl: "/naws/230267 ต้อนรับ MLIT ญี่ปุ่น.jpg",
        linkUrl: "/naws/230267 ต้อนรับ MLIT ญี่ปุ่น.pdf",
    },
    {
        id: 13,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะให้การต้อนรับคณะผู้เข้าอบรมหลักสูตรผู้อำนวยการท้องถิ่น รุ่นที่ 18",
        date: "22 กุมภาพันธ์ 2567",
        thumbnailUrl: "/naws/220267 ต้อนรับ ผอ.ท้องถิ่น.jpg",
        linkUrl: "/naws/220267 ต้อนรับ ผอ.ท้องถิ่น.pdf",
    },
    {
        id: 14,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะให้การต้อนรับคณะนักศึกษาจากสถาบันเทคโนโลยีแห่งเอเชีย Asian Institute of Technology (AIT)",
        date: "21 กุมภาพันธ์ 2567",
        thumbnailUrl: "/naws/210267 ต้อนรับ AIT1.jpg",
        linkUrl: "/naws/210267 ต้อนรับ AIT1.pdf",
    },
    {
        id: 15,
        title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะให้การต้อนรับคณะเจ้าหน้าที่จากการไฟฟ้าฝ่ายผลิต",
        date: "11 มกราคม 2567",
        thumbnailUrl: "/naws/110167 ต้อนรับ การไฟฟ้า.jpg",
        linkUrl: "/naws/110167 ต้อนรับ การไฟฟ้า.pdf",
    },

];
