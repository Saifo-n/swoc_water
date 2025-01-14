import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Structure: React.FC = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    const [currentPage, setCurrentPage] = useState<string>(window.location.pathname);

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
        if (window.location.pathname !== url) {
            window.history.pushState(null, "", url);
            sessionStorage.setItem("currentUrl", url);
            setCurrentPage(url);
        }
    };

    const textColor = isDarkMode ? "text-white" : "text-black";

    const genderData = {
        labels: language === "ไทย" ? ['ชาย', 'หญิง'] : ['Male', 'Female'],
        datasets: [
            {
                data: [27, 36],
                backgroundColor: isDarkMode ? ['#007BFF', '#6C757D'] : ['#1f77b4', '#aec7e8'],
            },
        ],
    };

    const genderOptions = {
        plugins: {
            legend: {
                labels: {
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                },
            },
            y: {
                ticks: {
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                },
            },
        },
    };

    const titlesData = {
        labels: language === "ไทย"
            ? [
                'ผู้อำนวยการส่วนฯ', 'หัวหน้าฝ่ายประมวล', 'หัวหน้าฝ่ายติดตาม',
                'วิศวกรฯ ชำนาญการ', 'วิศวกรฯ ปฏิบัติการ', 'วิศวกรสื่อประสาน',
                'เจ้าหน้าที่บันทึกข้อมูล', 'นักประชาสัมพันธ์', 'นายช่างไฟฟ้าลอิสาร',
                'วิศวกรควบคุม', 'นักจัดการงานทั่วไป', 'วิศวกรไฟฟ้า',
                'เจ้าพนักงานธุรการ', 'พนักงานทั่วไป',
            ]
            : [
                'Director', 'Processing Head', 'Monitoring Head',
                'Experienced Engineer', 'Junior Engineer', 'Communication Engineer',
                'Data Entry Staff', 'Public Relations', 'Electric Technician',
                'Control Engineer', 'General Manager', 'Electrical Engineer',
                'Administrative Officer', 'General Worker',
            ],
        datasets: [
            {
                label: language === "ไทย" ? 'จำนวน' : 'Number',
                data: [1, 1, 1, 6, 7, 16, 1, 1, 2, 2, 21, 2, 1, 2],
                backgroundColor: isDarkMode ? '#007BFF' : '#1f77b4',
            },
        ],
    };

    const titlesOptions = {
        plugins: {
            legend: {
                labels: {
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                },
            },
            y: {
                ticks: {
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                },
            },
        },
    };

    return (
        <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
            <div
                className="relative h-[250px] bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
                    <h1
                        className="text-4xl font-bold mb-4"
                        style={{ fontSize: `calc(1rem + ${fontSize}px)` }}
                    >
                        {language === "ไทย" ? "โครงสร้างหน่วยงาน" : "Organizational Structure"}
                    </h1>
                </div>
            </div>

            <div className="text-left mt-1 px-6 py-8">
                <div className="mb-6" >
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
                        <span>{language === "ไทย" ? "โครงสร้างหน่วยงาน" : "Organization Structure"}</span>
                    </nav>
                </div>

                <div className="flex justify-center mt-6">
                    <img
                        src="/images/org_chart.png"
                        alt={language === "ไทย" ? "โครงสร้างหน่วยงาน" : "Organization Structure"}
                        className="w-full max-w-[700px] shadow-lg rounded-lg"
                    />
                </div>

                <div className="summary-charts mt-8">
                    <h2 className="text-center text-xl font-bold mb-6">
                        {language === "ไทย" ? "แผนภูมิสรุปจำนวนเจ้าหน้าที่" : "Summary of Staff Charts"}
                    </h2>

                    <div
                        className="chart-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[80%] mx-auto"
                        style={{
                            overflowX: 'hidden',
                        }}
                    >
                        <div className="text-center chart-wrapper">
                            <h3 className={`mb-4 text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                {language === "ไทย" ? "แผนภูมิแสดงจำนวนบุคลากร" : "Personnel Distribution Chart"}
                            </h3>
                            <div
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    margin: '0 auto',
                                }}
                            >
                                <Pie data={genderData} />
                            </div>
                        </div>

                        <div className="text-center chart-wrapper">
                            <h3 className={`mb-4 text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                {language === "ไทย" ? "แผนภูมิแสดงจำนวนบุคลากรในแต่ละตำแหน่ง" : "Staff by Position Chart"}
                            </h3>
                            <Bar data={titlesData} options={{ indexAxis: 'y' }} />
                        </div>

                        <div className="text-center chart-wrapper">
                            <h3 className="mb-4 text-lg font-semibold">
                                {language === "ไทย" ? "แผนภูมิแสดงบุคลากรตามอายุ" : "Staff by Age Chart"}
                            </h3>
                            <Bar data={titlesData} options={titlesOptions} />
                        </div>

                        <div className="text-center chart-wrapper">
                            <h3 className="mb-4 text-lg font-semibold">
                                {language === "ไทย" ? "แผนภูมิแสดงบุคลากรตามประเภทเจ้าหน้าที่" : "Staff by Category Chart"}
                            </h3>
                            <Bar data={titlesData} options={titlesOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Structure;