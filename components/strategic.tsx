import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const Strategic = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();
    const [activeTab, setActiveTab] = useState(1);

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


    const objectives = [
        {
            title: language === "ไทย" ? "ด้านประสิทธิผลตามพันธกิจ" : "Mission Effectiveness",
            content: language === "ไทย"
                ? [
                    "การบริหารจัดการน้ำโดยให้ทุกภาคส่วนได้รับน้ำที่มีคุณภาพอย่างทั่วถึงและเป็นธรรมตามปริมาณน้ำต้นทุนที่มีในแต่ละปี",
                    "ลดความสูญเสียทางเศรษฐกิจที่สืบเนื่องมาจากอุทกภัยและภัยแล้ง",
                    "เป็นองค์กรอัจฉริยะที่นำเทคโนโลยีทันสมัยมาใช้ในการบริหารจัดการน้ำ"
                ]
                : [
                    "Managing water resources to ensure all sectors receive high-quality water equitably and fairly based on available resources each year.",
                    "Reducing economic losses caused by floods and droughts.",
                    "Becoming a smart organization utilizing advanced technologies in water management."
                ]
        },
        {
            title: language === "ไทย" ? "ด้านคุณภาพการบริการ" : "Service Quality",
            content: language === "ไทย"
                ? [
                    "การพยากรณ์สถานการณ์น้ำที่มีความทันสมัยและแม่นยำ",
                    "ส่งข้อมูลสถานการณ์น้ำถึงกลุ่มเป้าหมายอย่างรวดเร็วและทันต่อเหตุการณ์"
                ]
                : [
                    "Modernizing and improving the accuracy of water situation forecasting.",
                    "Delivering water situation updates to target groups promptly and effectively."
                ]
        },
        {
            title: language === "ไทย" ? "ด้านประสิทธิภาพ" : "Operational Efficiency",
            content: language === "ไทย"
                ? [
                    "เพิ่มมูลค่าทางเศรษฐกิจในพื้นที่ชลประทานผ่านการบริหารจัดการน้ำที่มีประสิทธิภาพ",
                    "การใช้น้ำในภาคเกษตรอย่างคุ้มค่าและมีประสิทธิภาพ",
                    "บูรณาการการบริหารจัดการน้ำร่วมกับหน่วยงานในท้องถิ่น"
                ]
                : [
                    "Enhancing economic value in irrigated areas through effective water management.",
                    "Optimizing water usage in the agricultural sector.",
                    "Integrating water management efforts with local agencies."
                ]
        },
        {
            title: language === "ไทย" ? "ด้านการพัฒนาองค์กร" : "Organizational Development",
            content: language === "ไทย"
                ? [
                    "สนับสนุนการวิจัยและพัฒนานวัตกรรม",
                    "พัฒนาทักษะและศักยภาพบุคลากรอย่างต่อเนื่อง",
                    "ปรับปรุงระบบและกระบวนการทำงานด้วยเทคโนโลยีสมัยใหม่"
                ]
                : [
                    "Supporting research and innovation development.",
                    "Continuously improving staff skills and capabilities.",
                    "Enhancing systems and workflows with modern technologies."
                ]
        }
    ];

    return (
        <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
            <div
                className="relative h-[300px] bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center p-6 rounded-lg">
                    <h1
                        className="text-5xl font-bold mb-4 leading-tight"
                        style={{ fontSize: `calc(1rem + ${fontSize}px)` }}
                    >
                        {language === "ไทย" ? "ยุทธศาสตร์" : "Strategy"}
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
                            {language === "ไทย" ? "ยุทธศาสตร์" : "Strategy"}
                        </span>
                        <span className="mx-2">/</span>
                        <span>{language === "ไทย" ? "ยุทธศาสตร์" : "Strategy"}</span>
                    </nav>
                </div>


                <div className="p-8 max-w-full mx-auto">
                    <div className="text-center mb-8">
                        <h3
                            className="text-2xl font-semibold mb-1"
                            style={{ fontSize: `${fontSize + 4}px` }}
                        >
                            {language === "ไทย" ? "วิสัยทัศน์" : "Vision"}
                        </h3>
                        <p
                            className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}
                            style={{ fontSize: `${fontSize + 2}px` }}
                        >
                            {language === "ไทย"
                                ? `"การเพิ่มประสิทธิภาพการบริหารจัดการน้ำแบบบูรณาการ ให้ทุกภาคส่วนอย่างเป็นธรรมโดยใช้นวัตกรรมเทคโนโลยีที่ทันสมัยเพื่อให้กรมชลประทานเป็นองค์กรอัจฉริยะในปี 2580"`
                                : `"Enhancing the efficiency of integrated water management for all sectors fairly using modern technological innovations to make the Royal Irrigation Department a smart organization by 2037."`}
                        </p>
                    </div>

                    <div className={`mission-container ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}>
                        <div className="text-center mb-8">
                            <h3
                                className="text-2xl font-semibold mb-1"
                                style={{ fontSize: `${fontSize + 4}px` }}
                            >
                                {language === "ไทย" ? "พันธกิจ" : "Mission"}
                            </h3>
                            <p style={{ fontSize: `${fontSize}px`}}>
                                {language === "ไทย"
                                    ? "พันธกิจนี้คือพันธกิจของกรมชลประทาน"
                                    : "This mission is the mission of the Royal Irrigation Department."}
                            </p>
                        </div>

                        <div className="mission-image">
                            <img src="/images/strategic.png" alt="Man climbing chart" />
                        </div>

                        <div className="mission-steps">
                            <div className="mission-step-row">
                                <div className="mission-step">
                                    <div
                                        className="step-number" style={{ fontSize: `${fontSize}px` }}>1</div>
                                    <p style={{ fontSize: `${fontSize}px`, color: isDarkMode ? 'white' : 'black', }}>
                                        {language === "ไทย"
                                            ? "บริหารจัดการน้ำอย่างบูรณาการให้เพียงพอ ทั่วถึงและเป็นธรรม"
                                            : "Manage water resources in an integrated manner to ensure sufficiency, equity, and fairness."}
                                    </p>
                                </div>
                                <div className="mission-step">
                                    <div className="step-number"style={{ fontSize: `${fontSize}px` }}>2</div>
                                    <p style={{ fontSize: `${fontSize}px`, color: isDarkMode ? 'white' : 'black', }}>
                                        {language === "ไทย"
                                            ? "สนับสนุนวิชาการในด้านการบริหารจัดการน้ำ และ การป้องกันและบรรเทาภัยอันเกิดจากน้ำ"
                                            : "Support academic knowledge in water management and the prevention and mitigation of water-related disasters."}
                                    </p>
                                </div>
                            </div>

                            <div className="mission-step-row">
                                <div className="mission-step">
                                    <div className="step-number" style={{ fontSize: `${fontSize}px` }}>3</div>
                                    <p style={{ fontSize: `${fontSize}px`, color: isDarkMode ? 'white' : 'black', }}>
                                        {language === "ไทย"
                                            ? "สนับสนุนการปรับปรุงการบำรุงรักษาอาคารชลประทานให้พร้อมใช้งาน"
                                            : "Support improvements in the maintenance of irrigation infrastructure to ensure functionality."}
                                    </p>
                                </div>
                                <div className="mission-step">
                                    <div className="step-number"style={{ fontSize: `${fontSize}px` }}>4</div>
                                    <p style={{ fontSize: `${fontSize}px`, color: isDarkMode ? 'white' : 'black', }}>                                        {language === "ไทย"
                                        ? "พัฒนาฐานข้อมูลให้ถูกต้องและใช้นวัตกรรมและเทคโนโลยีทันสมัย"
                                        : "Develop accurate databases and utilize innovative and modern technologies."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-12 mt-8">
                        <h3
                            className="text-2xl font-semibold mb-4"
                            style={{
                                fontSize: `${fontSize + 4}px`,
                                color: isDarkMode ? "white" : "black",
                            }}
                        >
                            {language === "ไทย" ? "ประเด็นยุทธศาสตร์" : "Strategic Issues"}
                        </h3>

                        <div className="flex flex-wrap justify-center gap-6">
                            <div
                                className={`border-2 ${isDarkMode ? 'border-gray-700' : 'border-blue-500'} p-6 rounded-lg text-lg w-96 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'} shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105`}
                            >
                                <h4 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white hover:text-black' : 'text-blue-700'}`}style={{ fontSize: `${fontSize}px` }}>
                                    {language === "ไทย" ? "บริหารจัดการน้ำอย่างบูรณาการ" : "Integrated Water Management"}
                                </h4>
                                <p
                                    className={`text-base ${isDarkMode ? "text-white hover:text-black" : "text-black"}`}
                                    style={{ fontSize: `${fontSize}px` }}
                                >
                                    {language === "ไทย"
                                        ? "การบริหารจัดการน้ำในลักษณะบูรณาการเพื่อให้มีประสิทธิภาพและความยั่งยืน"
                                        : "Managing water in an integrated manner for efficiency and sustainability."}
                                </p>
                            </div>

                            <div
                                className={`border-2 ${isDarkMode ? 'border-gray-700' : 'border-green-500'} p-6 rounded-lg text-lg w-96 ${isDarkMode ? 'bg-gray-900' : 'bg-green-50'} shadow-lg hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105`}
                            >
                                <h4 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white hover:text-black' : 'text-green-700'}`}style={{ fontSize: `${fontSize}px` }}>
                                    {language === "ไทย" ? "การป้องกันและบรรเทาภัยอันเกิดจากน้ำ" : "Water-Related Hazard Prevention and Mitigation"}
                                </h4>
                                <p
                                    className={`text-base ${isDarkMode ? "text-white hover:text-black" : "text-black"}`}
                                    style={{ fontSize: `${fontSize}px` }}
                                >
                                    {language === "ไทย"
                                        ? "การป้องกันและลดผลกระทบจากภัยอันเกิดจากน้ำ"
                                        : "Preventing and mitigating the impacts of water-related hazards."}
                                </p>
                            </div>

                            <div
                                className={`border-2 ${isDarkMode ? 'border-gray-700' : 'border-purple-500'} p-6 rounded-lg text-lg w-96 ${isDarkMode ? 'bg-gray-900' : 'bg-purple-50'} shadow-lg hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105`}
                            >
                                <h4 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white hover:text-black' : 'text-purple-700'}`}style={{ fontSize: `${fontSize}px` }}>
                                    {language === "ไทย" ? "องค์กรอัจฉริยะที่มุ่งเน้นประสิทธิภาพการบริหารจัดการน้ำ" : "Smart Organization Focused on Water Management Efficiency"}
                                </h4>
                                <p
                                    className={`text-base ${isDarkMode ? "text-white hover:text-black" : "text-black"}`}
                                    style={{ fontSize: `${fontSize}px` }}
                                >
                                    {language === "ไทย"
                                        ? "สร้างองค์กรที่มีเทคโนโลยีทันสมัยเพื่อการบริหารจัดการน้ำที่มีประสิทธิภาพ"
                                        : "Creating a smart organization using modern technology to manage water efficiently."}
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="text-center my-12">
                        <h3
                            className="text-2xl font-semibold mb-1"
                            style={{ fontSize: `${fontSize + 4}px` }}
                        >
                            {language === "ไทย" ? "เป้าประสงค์" : "Objectives"}
                        </h3>
                        <p
                            className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}
                            style={{ fontSize: `${fontSize + 2}px` }}
                        >
                            {language === "ไทย"
                                ? "สำนักบริหารจัดการน้ำและอุทกวิทยา ได้กำหนดเป้าประสงค์ตามกรอบการประเมินผลการปฏิบัติงาน 4 ด้าน ได้แก่ ด้านประสิทธิภาพตามพันธกิจ ด้านคุณภาพการให้บริการ ด้านประสิทธิภาพของการปฏิบัติราชการ และด้านการพัฒนาองค์กร รวมทั้งหมด 11 เป้าประสงค์ ดังนี้"
                                : "The Bureau of Water Management and Hydrology has set objectives based on four performance evaluation frameworks: mission efficiency, service quality, operational efficiency, and organizational development, totaling 11 objectives as follows."}
                        </p>

                        <div className="max-w-6xl mx-auto mt-8 py-4 px-4 flex flex-wrap justify-center gap-4">
                            {objectives.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index + 1)}
                                    className={`button ${activeTab === index + 1
                                        ? `${isDarkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-white"} shadow-lg transform scale-105 w-full sm:w-60`
                                        : `${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} hover:bg-blue-100 hover:scale-105 w-full sm:w-60`
                                        }`}
                                        style={{ fontSize: `${fontSize}px` }}>
                                    {language === "ไทย" ? `ด้านที่ ${index + 1}` : `Tab ${index + 1}`}
                                </button>
                            ))}
                        </div>

                        <div
                            className={`p-6 rounded-lg shadow-md mt-4 ${isDarkMode ? "bg-gray-800" : "bg-blue-100"
                                }`} style={{ fontSize: `${fontSize}px` }}
                        >
                            <h4 className="font-semibold text-lg mb-2 text-blue-700"style={{ fontSize: `${fontSize}px` }}>
                                {objectives[activeTab - 1].title} 
                            </h4>
                            <div>
                                {objectives[activeTab - 1].content.map((item, idx) => (
                                    <p key={idx} className="mb-2 text-lg" style={{ fontSize: `${fontSize}px` }}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strategic;
