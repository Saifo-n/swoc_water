import React, { useState, useEffect } from "react";
import Link from "next/link"; import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const Responsibility = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    const [selectedSection, setSelectedSection] = useState("general");

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

    const handleSectionChange = (section: string) => {
        setSelectedSection(section);
    };


    return (
        <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
            <div
                className="relative h-[250px] bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
                    <h1
                        className="text-4xl font-bold mb-4"
                        style={{ fontSize: `calc(1rem + ${fontSize}px)` }}>
                        {language === "ไทย" ? "หน้าที่ความรับผิดชอบ" : "Responsibilities"}
                    </h1>
                </div>
            </div>

            <div className="text-left mt-1 px-6 py-8">
                <div className="mb-1">
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
                        <span>{language === "ไทย" ? "หน้าที่ความรับผิดชอบ" : "Responsibilities"}</span>
                    </nav>
                </div>

                <div className="p-6 space-y-6">
                    <p
                        className={`mb-4 text-lg text-center font-bold ${isDarkMode ? "text-white" : "text-black"}`}
                        style={{
                            fontSize: `calc(0.2rem + ${fontSize}px)`,
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                        }}>
                        {language === "ไทย"
                            ? "ส่วนประมวลวิเคราะห์สถานการณ์น้ำ แบ่งออกเป็น 2 ฝ่าย ดังนี้"
                            : "The Water Situation Analysis Section is divided into two units as follows."}
                    </p>

                    <div className="flex justify-center space-x-8 flex-wrap">
                        <button
                            onClick={() => handleSectionChange("general")}
                            className={`button ${selectedSection === "general"
                                ? "bg-blue-500 text-white shadow-lg transform scale-105"
                                : "bg-gray-200 text-black hover:bg-blue-100 hover:scale-105"
                                }`}>
                            {language === "ไทย" ? "ส่วนประมวลวิเคราะห์สถานการณ์น้ำ" : "Water Situation Analysis Section"}
                        </button>
                        <button
                            onClick={() => handleSectionChange("forecast")}
                            className={`button ${selectedSection === "forecast"
                                ? "bg-blue-500 text-white shadow-lg transform scale-105"
                                : "bg-gray-200 text-black hover:bg-blue-100 hover:scale-105"
                                }`}>
                            {language === "ไทย" ? "ฝ่ายติดตามและพยากรณ์สถานการณ์น้ำ" : "Water Situation Monitoring and Forecasting Unit"}
                        </button>
                        <button
                            onClick={() => handleSectionChange("analysis")}
                            className={`button ${selectedSection === "analysis"
                                ? "bg-blue-500 text-white shadow-lg transform scale-105"
                                : "bg-gray-200 text-black hover:bg-blue-100 hover:scale-105"
                                }`}>
                            {language === "ไทย" ? "ฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ" : "Water Situation Analysis and Evaluation Unit"}
                        </button>
                    </div>

                    <div className="flex justify-center items-center mt-6 space-y-4">
                        {selectedSection === "general" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility1.png"
                                        alt="Image 1"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา รวบรวมและวิเคราะห์ข้อมูล พื้นที่ที่เคยประสบภัยจากน้ำ"
                                            : "Study, collect, and analyze data on areas previously affected by water-related disasters."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "หรือพื้นที่ที่มีแนวโน้มได้รับผลกระทบจากน้ำ เพื่อกำหนดพื้นที่เฝ้าระวัง หรือแหล่งชุมชนที่เป็นพื้นที่เสี่ยงภัยอันเนื่องมาจากน้ำฝน น้ำท่า หรือมีผลกระทบด้านคุณภาพน้ำ ตลอดจนอาคารชลประทานที่มีความสำคัญต่อการบริหารจัดการน้ำ"
                                            : "Or areas likely to be affected by water, to identify surveillance zones or communities at risk due to rainfall, runoff, or water quality issues, including irrigation structures critical to water management."
                                        }
                                    </p>
                                </div>

                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility2.png"
                                        alt="Image 2"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "จัดลำดับความสำคัญของโครงการที่ต้องติดตั้งระบบการควบคุมระยะไกล"
                                            : "Prioritize projects that need to implement automated remote control systems."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อกำหนดแผนงานและงบประมาณสำหรับใช้ในการศึกษา การวิจัย การติดตั้ง การใช้งาน การพัฒนา การปรับปรุงและบำรุงรักษา ควบคุมคุณภาพและปริมาณข้อมูล ระบบโทรมาตร ระบบ SCADA ระบบฐานข้อมูลและระบบแบบจำลองทางคณิตศาสตร์สำหรับการบริหารจัดการน้ำให้ครอบคลุม พื้นที่ ๒๕ ลุ่มน้ำ ทั้งในเขตและนอกเขตพื้นที่ชลประทาน"
                                            : "To define plans and budgets for research, installation, operation, development, improvement, and maintenance, as well as quality and data quantity control for telemetering systems, SCADA systems, databases, and mathematical models for water management across 25 river basins, both inside and outside irrigation areas."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility6.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา รวบรวมข้อมูล และวิเคราะห์ข้อมูลระบบโทรมาตร ระบบ SCADA ระบบแบบจำลอง ทางคณิตศาสตร์ และเทคโนโลยีที่เกี่ยวข้อง"
                                            : "Study, collect and analyze data on telemetering systems, SCADA systems, mathematical models, and related technologies."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อกำหนดหลักเกณฑ์และมาตรฐานของระบบโทรมาตร ระบบ SCADA ระบบแบบจำลองทางคณิตศาสตร์ รวมถึงเครื่องมือ อุปกรณ์ ฐานข้อมูล โปรแกรม ระบบย่อยการเชื่อมโยงข้อมูล คุณภาพและปริมาณข้อมูล หรือส่วนประกอบอื่น ๆ"
                                            : "To define criteria and standards for telemetering systems, SCADA systems, mathematical models, including tools, equipment, databases, programs, subsystems for data linkage, and components for data quality and quantity control."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility10.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา รวบรวมข้อมูล และวิเคราะห์ข้อมูลระบบโทรมาตร ระบบ SCADA ระบบแบบจำลอง ทางคณิตศาสตร์ และเทคโนโลยีที่เกี่ยวข้อง"
                                            : "Study, collect and analyze data on telemetering systems, SCADA systems, mathematical models, and related technologies."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อกำหนดหลักเกณฑ์และมาตรฐานของระบบโทรมาตร ระบบ SCADA ระบบแบบจำลองทางคณิตศาสตร์ รวมถึงเครื่องมือ อุปกรณ์ ฐานข้อมูล โปรแกรม ระบบย่อยการเชื่อมโยงข้อมูล คุณภาพและปริมาณข้อมูล หรือส่วนประกอบอื่น ๆ"
                                            : "To define criteria and standards for telemetering systems, SCADA systems, mathematical models, including tools, equipment, databases, programs, subsystems for data linkage, and components for data quality and quantity control."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility3.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา วิเคราะห์ วิจัย พัฒนาการติดตั้ง การสอบเทียบ การใช้งาน การปรับปรุงและบำรุงรักษา การควบคุมคุณภาพและปริมาณข้อมูลของระบบโทรมาตร ระบบ SCADA และระบบแบบจำลอง ทางคณิตศาสตร์"
                                            : "Study, analyze, research, develop installation, calibration, usage, improvement, maintenance, and control of data quality and quantity in telemetering systems, SCADA systems, and mathematical models."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อให้ระบบมีความถูกต้องแม่นยำและเกิดประสิทธิภาพการทำงานสูงสุด ตลอดจน จัดทำแผนการปรับปรุงและบำรุงรักษา"
                                            : "To ensure the system's accuracy and maximize operational efficiency, as well as develop plans for improvements and maintenance."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility8.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2"
                                    />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "กำกับ ตรวจสอบ ความถูกต้องของการนำเข้าข้อมูล การวิเคราะห์ข้อมูลจากระบบโทรมาตร ระบบ SCADA ระบบแบบจำลองทางคณิตศาสตร์ และแหล่งข้อมูลอื่นๆ"
                                            : "Supervise and verify the accuracy of data entry, data analysis from telemetering systems, SCADA systems, mathematical models, and other data sources."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "การประมวลผลข้อมูลเพื่อจัดทำรายงานผลรูปแบบต่าง ๆ เช่น ผลการตรวจวัดระดับน้ำ อัตราการไหล ปริมาณน้ำฝน คุณภาพน้ำ ผลการพยากรณ์/การคาดการณ์ ทั้งในภาวะปกติและวิกฤต รวมทั้งรายงานข้อมูลแบบอนุกรมเวลาและ การพยากรณ์ ให้มีความถูกต้อง สามารถใช้ในการบริหารจัดการน้ำอย่างมีประสิทธิภาพสอดคล้องกับความต้องการของผู้ใช้งาน"
                                            : "Process data to generate various types of reports such as water level measurements, flow rates, rainfall amounts, water quality, forecasting/prediction results, both under normal and crisis conditions, as well as time-series data and forecasts, ensuring accuracy for effective water management aligned with user needs."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility5.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ติดตาม วิเคราะห์ ประมวลผลข้อมูลสภาพน้ำฝน น้ำท่า ปริมาณน้ำ การประยุกต์ใช้แบบจำลองทางคณิตศาสตร์สำหรับการพยากรณ์สภาพน้ำ แนวโน้มสถานการณ์น้ำจากข้อมูลระบบโทรมาตร และข้อมูลที่เกี่ยวข้องทั้งจากหน่วยงานภายใน ภายนอก และสื่อต่าง ๆ แบบรายวัน รายสัปดาห์ และรายเดือนทั้งในฤดูแล้ง ฤดูน้ำหลาก ในภาวะปกติและภาวะวิกฤต"
                                            : "Monitor, analyze, and process data on rainfall, water flow, water volume, and apply mathematical models for forecasting water conditions, trends in water situations, using telemetering system data and related information from internal and external agencies, as well as various media on a daily, weekly, and monthly basis during dry and wet seasons, under normal and crisis conditions."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อจัดทำรายงานสรุปสถานการณ์น้ำที่มีความถูกต้องทันสมัยสำหรับผู้บริหารกรมใช้เป็นข้อมูลประกอบการตัดสินใจในการบริหารจัดการน้ำ"
                                            : "To generate up-to-date water situation summary reports with accuracy for department executives, used as data for decision-making in water management."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility9.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ตรวจสอบ วิเคราะห์ ข้อมูลสถานการณ์น้ำแล้ง น้ำท่วม"
                                            : "Monitor and analyze drought and flood water situation data."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "การสูบน้ำช่วยเหลือเกษตรกรจากโครงการชลประทานและหน่วยงานที่เกี่ยวข้อง ให้มีความถูกต้อง รวดเร็ว ทันต่อสถานการณ์ เพื่อใช้ในการบริหารจัดการน้ำ"
                                            : "Pump water to assist farmers from irrigation projects and related agencies, ensuring accuracy, speed, and timely response to the situation for water management."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility7.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ให้คำปรึกษา แนะนำ ถ่ายทอดความรู้ เทคโนโลยี และประสานงานกับหน่วยงานที่เกี่ยวกับ งานด้านระบบโทรมาตร ระบบ SCADA ระบบแบบจำลองทางคณิตศาสตร์"
                                            : "Provide consultation, advice, knowledge transfer, technology, and coordination with relevant agencies regarding telemetering systems, SCADA systems, and mathematical models."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อให้มีความรู้ความเข้าใจ และสามารถปฏิบัติงานได้บรรลุตามวัตถุประสงค์และมีประสิทธิภาพ รวมทั้งการเผยแพร่ประชาสัมพันธ์ข้อมูลเกี่ยวกับสถานการณ์น้ำในสภาวการณ์ต่าง ๆ ให้กับหน่วยงานต่าง ๆ ที่เกี่ยวข้อง"
                                            : "To ensure understanding and efficient operation to achieve objectives, as well as disseminating information about water situations in various conditions to relevant agencies."
                                        }
                                    </p>
                                </div>
                            </div>

                        )}

                        {selectedSection === "forecast" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility1.png"
                                        alt="Image 1"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "วางแผน จัดทำโครงการที่ต้องติดตั้งระบบการควบคุมระยะไกลแบบอัตโนมัติ"
                                            : "Plan and create projects that need to implement automated remote control systems."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "และจัดลำดับความสำคัญของโครงการที่ต้องติดตั้งระบบการควบคุมระยะไกลแบบอัตโนมัติ เพื่อการบริหารจัดการน้ำให้ครอบคลุมพื้นที่ 25 ลุ่มน้ำทั้งในเขตและนอกเขตพื้นที่ชลประทาน"
                                            : "And prioritize projects that need to implement automated remote control systems for water management across 25 river basins, both within and outside irrigation areas."
                                        }
                                    </p>

                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility2.png"
                                        alt="Image 2"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "กำหนดแผนงาน งบประมาณ และการบริหารงบประมาณ"
                                            : "Define plans, budgets, and budget management."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อใช้ในการศึกษาการวิจัย การติดตั้ง การใช้งาน การพัฒนา การปรับปรุงและบำรุงรักษา สาธารณูปโภค การควบคุมคุณภาพและปริมาณข้อมูลระบบโทรมาตร ระบบ SCADA ระบบฐานข้อมูล และระบบจำลแงทางคณิตศาสตร์"
                                            : "To define plans and budgets for research, installation, operation, development, improvement, and maintenance, as well as quality and data quantity control for telemetering systems, SCADA systems, databases, and mathematical models for water management across 25 river basins, both inside and outside irrigation areas."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
                                    <img
                                        src="images/responsibility6.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className="font-semibold text-md mb-1 text-center" style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา รวบรวม วิเคราะห์ข้อมูลระบบโทรมาตร ระบบ SCADA แบบจำลองทาง"
                                            : "Study, collect, and analyze data on telemetering systems, SCADA systems, mathematical models, and related technologies."
                                        }
                                    </h2>
                                    <p className="text-md text-center" style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "และเทคโนโลยีที่เกี่ยวข้อง เพื่อกำหนดหลักเกณฑ์และมาตรฐานของระบบโทรมาตร ระบบ SCADA แบบจำลองทางคณิตศาสตร์รวมถึงเครื่องมืออุปกรณ์ ฐานข้อมูลโปรแกรม ระบบย่อย การเชื่อมโยงข้อมูล คุณภาพและปริมาณข้อมูล หรือส่วนประกอบอื่น ๆ"
                                            : "To define criteria and standards for telemetering systems, SCADA systems, mathematical models, including tools, equipment, databases, programs, subsystems for data linkage, and components for data quality and quantity control."
                                        }
                                    </p>
                                </div>

                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility10.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา พัฒนา และออกแบบระบบฐานข้อมูล โปรแกรม ระบบย่อย"
                                            : "Study, develop, and design databases, programs, and subsystems."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "การเชื่อมโยงข้อมูลคุณภาพและปริมาณข้อมูล หรือส่วนประกอบอื่น ๆ ที่ใช้ในระบบโทรมาตร ระบบ SCADA แบบจำลองทางคณิตศาสตร์ เพื่อให้มีระบบที่เหมาะสม ทันสมัย และสามารถใช้งานได้อย่างมีประสิทธิภาพ"
                                            : "Linking data quality and quantity, or other components used in telemetering systems, SCADA systems, and mathematical models, to ensure the system is appropriate, modern, and efficient."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility3.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา วิเคราะห์ วิจัย พัฒนาการติดตั้ง"
                                            : "Study, analyze, research, develop installation, calibration, usage, improvement, maintenance, and control of data quality and quantity in telemetering systems, SCADA systems, and mathematical models."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "การสอบเทียบ การใช้งาน การปรับปรุงและบำรุงรักษา การควบคุมคุณภาพ และปริมาณข้อมูล ระบบโทรมาตร ระบบ SCADA ระบบฐานข้อมูล และระบบแบบจำลองทางคณิตศาสตร์ เพื่อให้ระบบมีความถูกต้องแม่นยำ และเกิดประสิทธิภาพการทำงานสูงสุด"
                                            : "To ensure the system's accuracy and maximize operational efficiency, as well as develop plans for improvements and maintenance."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility8.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2"
                                    />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ตรวจสอบความถูกต้องของการบันทึกข้อมูลจากระบบโทรมาตร"
                                            : "Supervise and verify the accuracy of data entry, data analysis from telemetering systems, SCADA systems, mathematical models, and other data sources."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ระบบ SCADA ระบบแบบจำลองทางคณิตศาสตร์ และแหล่งข้อมูลอื่น ๆ เพื่อจัดทำรายงานข้อมูลน้ำฝน น้ำท่า คุณภาพน้ำ ผลการพยากรณ์/การคาดการณ์ ทั้งในภาวะปกติและวิกฤตให้มีความถูกต้อง สามารถใช้ในการบริหารจัดการน้ำอย่างมีประสิทธิภาพและตรงความต้องการกับผู้ใช้งาน"
                                            : "Process data to generate various types of reports such as water level measurements, flow rates, rainfall amounts, water quality, forecasting/prediction results, both under normal and crisis conditions, as well as time-series data and forecasts, ensuring accuracy for effective water management aligned with user needs."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility5.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ควบคุม ดูแล คลังข้อมูลน้ำ"
                                            : "Monitor, analyze, and process data on rainfall, water flow, water volume, and apply mathematical models for forecasting water conditions, trends in water situations, using telemetering system data and related information from internal and external agencies, as well as various media on a daily, weekly, and monthly basis during dry and wet seasons, under normal and crisis conditions."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ที่ได้จากเครื่องวัดระดับน้ำ น้ำฝน คุณภาพน้ำ แบบอัตโนมัติ หรือระบบโทรมาตร เพื่อเป็นศูนย์กลางข้อมูลน้ำของหรมชลประทาน"
                                            : "To generate up-to-date water situation summary reports with accuracy for department executives, used as data for decision-making in water management."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility9.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ให้คำแนะนำ ถ่ายทอดความรู้ เทคโนโลยี"
                                            : "Monitor and analyze drought and flood water situation data."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "และประสานกับหน่วยงานที่เกี่ยวข้องด้านระบบโทรมาตร ระบบ SCADA แบบจำลองทางคณิตศาสตร์ เพื่อให้มีความรู้ความเข้าใจและสามารถปฏิบัติงานได้บรรลุตามวัตถุประสงค์และมีประสิทธิภาพ"
                                            : "Pump water to assist farmers from irrigation projects and related agencies, ensuring accuracy, speed, and timely response to the situation for water management."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility7.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ปฏิบัติงานร่วมกับหน่วยงานอื่นที่เกี่ยว"
                                            : "Provide consultation, advice, knowledge transfer, technology, and coordination with relevant agencies regarding telemetering systems, SCADA systems, and mathematical models."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "หรือสนับสนุนการปฏิบัติงานของหน่วยงานอื่นที่เกี่ยวข้องหรือได้รับมอบหมาย เพื่อให้การดำเนินงานเป็นไปตามเป้าหมายที่กำหนด"
                                            : "To ensure understanding and efficient operation to achieve objectives, as well as disseminating information about water situations in various conditions to relevant agencies."
                                        }
                                    </p>
                                </div>
                            </div>
                        )}

                        {selectedSection === "analysis" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility01.png"
                                        alt="Image 1"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ศึกษา รวบรวม และวิเคราะห์ข้อมูลพื้นที่ที่เคยประสบภัยจากน้ำ"
                                            : "Study, collect, and analyze data on areas that have previously been affected by water-related disasters."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "หรือพื้นที่ที่เสี่ยงภัยจากน้ำ อาคารชลประทานที่สำคัญในการเฝ้าระวังเพื่อประเมินสถานการณ์น้ำอย่างมีประสิทธิภาพ"
                                            : "Or areas at risk of water-related disasters, and critical irrigation structures for monitoring to assess water situations efficiently."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility02.png"
                                        alt="Image 2"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ติดตาม รวบรวม ตรวจสอบ วิเคราะห์ ประมวลผลข้อมูลน้ำฝน น้ำท่า ปริมาณน้ำในอ่างเก็บน้ำขนาดใหญ่ ขนาดกลาง และการไหลของน้ำ"
                                            : "Track, collect, verify, analyze, and process data on rainfall, runoff, large and medium reservoir water levels, and water flow."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "เพื่อติดตามการจัดการน้ำและควบคุมข้อมูลน้ำต่าง ๆ ผ่านการประยุกต์ใช้ระบบภูมิสารสนเทศในการจัดการฐานข้อมูลอย่างถูกต้องตามหลักวิชาการ"
                                            : "To track water management and control water-related data through the application of geographic information systems to manage databases accurately according to academic principles."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility03.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ประยุกต์ใช้ข้อมูลจากคลังข้อมูลน้ำของกรมชลประทาน"
                                            : "Apply data from the Department of Water Resources' water database."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "สำหรับการพยากรณ์น้ำ การคาดการณ์แนวโน้มสถานการณ์น้ำ เพื่อจัดทำรายงานสรุปสถานการณ์น้ำที่มีความถูกต้องทันสมัย สำหรับผู้บริหารใช้เป็นข้อมูลประกอบการตัดสินใจในการบริหารจัดการน้ำทั้งในภาวะปกติ และภาวะวิกฤติ และหน่วยงานอื่น ๆ ที่เกี่ยวข้อง ให้มีความถูกต้อง รวดเร็ว ทันต่อสถานการณ์"
                                            : "For water forecasting, predicting water situation trends, and creating up-to-date water situation reports, providing accurate and timely information for decision-makers in both normal and crisis water management situations, and other relevant agencies to ensure correctness, speed, and responsiveness."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility04.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ประมวลผลข้อมูลจากแบบจำลองทางคณิตศาสตร์"
                                            : "Process data from mathematical models."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "สำหรับการพยากรณ์น้ำ การคาดการณ์แนวโน้มสถานการณ์น้ำ เพื่อจัดทำรายงานสรุปสถานการณ์น้ำที่มีความถูกต้องทันสมัย สำหรับผู้บริหารใช้เป็นข้อมูลประกอบการตัดสินใจในการบริหารจัดการน้ำทั้งในภาวะปกติ และภาวะวิกฤติ และหน่วยงานอื่น ๆ ที่เกี่ยวข้อง ให้มีความถูกต้อง รวดเร็ว ทันต่อสถานการณ์"
                                            : "For water forecasting, predicting water situation trends, and creating up-to-date water situation reports, providing accurate and timely information for decision-makers in both normal and crisis water management situations, and other relevant agencies to ensure correctness, speed, and responsiveness."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility05.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ติดตาม ตรวจสอบ วิเคราะห์ข้อมูลที่เกี่ยวข้องกับการแก้ไขปัญหาน้ำแล้ง น้ำท่วม"
                                            : "Monitor, inspect, and analyze data related to solving drought and flood issues."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "คุณภาพน้ำ รวมทั้งการสูบน้ำช่วยเหลือเกษตรกร เพื่อใช้เป็นข้อมูลในการบริหารจัดการน้ำที่มีความถูกต้องรวดเร็ว ทันต่อสถานการณ์"
                                            : "Water quality, including water pumping to assist farmers, to be used as data for accurate, quick, and timely water management decisions."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility06.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2"
                                    />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ตรวจสอบ ประมวลผลข้อมูลน้ำฝน น้ำท่า น้ำชลประทาน"
                                            : "Supervise and verify the accuracy of data entry, data analysis from telemetering systems, SCADA systems, mathematical models, and other data sources."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ปริมาณน้ำในอ่างเก็บน้ำสถานการณ์น้ำแล้ง น้ำท่วม คุณภาพน้ำจากระบบโทรมาตร จากหน่วยงานภายใน หน่วยงานภายนอก และสื่อต่าง ๆ เพื่อสรุปเป็นรายงานสถานการณ์น้ำเป็นรายวัน รายสัปดาห์ รายเดือน รายฤดูกาล แจ้งผู้เกี่ยวข้องทราบ และเผยแพร่สู่สาธารณชน"
                                            : "Process data to generate various types of reports such as water level measurements, flow rates, rainfall amounts, water quality, forecasting/prediction results, both under normal and crisis conditions, as well as time-series data and forecasts, ensuring accuracy for effective water management aligned with user needs."
                                        }
                                    </p>
                                </div>
                                <div className={`border p-2 rounded-lg shadow-lg w-full max-w-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <img
                                        src="images/responsibility07.png"
                                        alt="Image 3"
                                        className="w-full h-50 object-cover rounded-md mb-2" />
                                    <h2 className={`font-semibold text-md mb-1 text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "ปฏิบัติงานร่วมกับหน่วยงานอื่นที่เกี่ยวข้อง"
                                            : "Monitor, analyze, and process data on rainfall, water flow, water volume, and apply mathematical models for forecasting water conditions, trends in water situations, using telemetering system data and related information from internal and external agencies, as well as various media on a daily, weekly, and monthly basis during dry and wet seasons, under normal and crisis conditions."
                                        }
                                    </h2>
                                    <p className={`text-md text-center ${isDarkMode ? "text-white" : "text-black"}`} style={{ fontSize: `${fontSize}px` }}>
                                        {language === "ไทย"
                                            ? "หรือสนับสนุนการปฏิบัติงานของหน่วยงานอื่นที่เกี่ยวข้องหรือได้รับมอบหมาย เพื่อให้การดำเนินงานเป็นไปตามเป้าหมายที่กำหนด"
                                            : "To generate up-to-date water situation summary reports with accuracy for department executives, used as data for decision-making in water management."
                                        }
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Responsibility;
