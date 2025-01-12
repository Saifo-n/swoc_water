import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

interface DropdownProps {
    title: string;
    options?: { label: string; link: string; target?: string }[];
    link?: string;
    target?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, options, link }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode } = useTheme();

    const toggleDropdown = () => {
        if (options) {
            setIsOpen(!isOpen);
        }
    };

    if (!options && link) {
        return (
            <a
                href={link}
                target="_blank"
                className={`w-full block py-3 px-5 text-left border border-gray-300 rounded-lg shadow-md hover:bg-blue-300 focus:outline-none ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}
            >
                <span className="font-semibold">{title}</span>
            </a>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className={`w-full py-3 px-5 text-left border border-gray-300 rounded-lg shadow-md hover:bg-blue-300 focus:outline-none flex justify-between items-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}
            >
                <span className="font-semibold">{title}</span>
                <span className="ml-2">{isOpen ? "⮝" : "⮟"}</span>
            </button>
            {isOpen && (
                <ul className={`mt-2 border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
                    {options &&
                        options.map((option, index) => (
                            <li key={index} className="py-3 px-5 hover:bg-blue-300 dark:hover:bg-blue-300 cursor-pointer transition duration-300" >                                <a
                                href={option.link}
                                target={option.target || "_self"}
                                className="w-full block text-left"
                            >
                                {option.label}
                            </a>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};


const DropdownMenu: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>("");
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const [openFontSizeOptions, setOpenFontSizeOptions] = useState<boolean>(false);

    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    useEffect(() => {
        const savedUrl = sessionStorage.getItem("currentUrl");
        if (savedUrl && window.location.pathname !== savedUrl) {
            window.history.pushState(null, "", savedUrl);
            setCurrentPage(savedUrl);
        }
    }, []);

    const handleNavigation = (url: string) => {
        if (window.location.pathname !== url) {
            window.history.pushState(null, "", url);
            sessionStorage.setItem("currentUrl", url);
            setCurrentPage(url);
        }
    };

    const toggleFontSizeOptions = () => {
        setOpenFontSizeOptions(prev => !prev);
    };

    const toggleDropdown = (index: number) => {
        setDropdownOpen(prev => (prev === index ? null : index));
    };

    const handleMouseEnter = (index: number) => {
        setOpenIndex(index);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setOpenIndex(null);
        }, 300);
        setTimeoutId(id);
    };

    return (
        <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
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
                        {language === "ไทย" ? "หน่วยงานภายนอก" : "Internal Department"}
                    </h1>
                </div>
            </div>

            <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
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
                                {language === "ไทย" ? "หน่วยงานที่เกี่ยวข้อง" : "Related Organizations"}
                            </span>
                            <span className="mx-2">/</span>
                            <span>{language === "ไทย" ? "หน่วยงานภายใน" : "Internal Department"}</span>
                        </nav>
                    </div>

                    <div className="space-y-1">
                        <Dropdown
                            title="สำนักงานชลประทาน"
                            options={[
                                { label: "สำนักงานชลประทานที่ 1", link: "http://rio1.rid.go.th/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 2", link: "http://www.ori2.go.th/main/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 3", link: "http://irrigation.rid.go.th/rid3/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 4", link: "http://irrigation.rid.go.th/rid4/index.html", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 5", link: "https://rio5.go.th/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 6", link: "http://rio6.rid.go.th/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 7", link: "https://rio7.rid.go.th/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 8", link: "http://rio8.rid.go.th/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 9", link: "http://pis9.rid.go.th/rid9/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 10", link: "http://irrigation.rid.go.th/rid10/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 11", link: "http://www11.rid.go.th/rid11/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 12", link: "http://irrigation.rid.go.th/rid12/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 13", link: "http://rio13.rid.go.th/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 14", link: "http://irrigation.rid.go.th/rid14/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 15", link: "https://rio15.org/index.php/th/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 16", link: "http://irrigation.rid.go.th/rid16/", target: "_blank" },
                                { label: "สำนักงานชลประทานที่ 17", link: "http://irrigation.rid.go.th/rid17/", target: "_blank" },
                            ]}
                        />
                        <Dropdown
                            title={language === "ไทย" ? "สำนักบริหารจัดการน้ำและอุทกวิทยา" : "Water Management and Hydrology Bureau"}
                            link="http://hydrology.rid.go.th/"
                            target="_blank"
                        />
                        <Dropdown
                            title={language === "ไทย" ? "ส่วนบริหารทั่วไป" : "General Management Section"}
                            link="https://water.rid.go.th/hydhome/ma/ma/"
                            target="_blank"
                        />
                        <Dropdown
                            title="ส่วนยุทธศาสตร์"
                            options={[
                                { label: "ฝ่ายพัฒนาคุณภาพการบริหารจัดการ", link: "http://hydrology.rid.go.th/strategy/2019/admin/department2.php", target: "_blank" },
                                { label: "ฝ่ายยุทธศาสตร์การบริหารจัดการน้ำ", link: "http://hydrology.rid.go.th/strategy/2019/admin/department1.php", target: "_blank" },
                                { label: "ฝ่ายติดตามและประเมินผล", link: "http://hydrology.rid.go.th/strategy/2019/admin/department3.php", target: "_blank" },
                            ]}
                        />
                        <Dropdown
                            title="ส่วนบริหารจัดการน้ำ"
                            options={[
                                { label: "ฝ่ายจัดสรรน้ำที่ 1", link: "https://water.rid.go.th/hwm/wmoc/", target: "_blank" },
                                { label: "ฝ่ายจัดสรรน้ำที่ 2", link: "https://water.rid.go.th/hwm/wmoc/", target: "_blank" },
                                { label: "ฝ่ายพัฒนาการบริหารจัดการน้ำ", link: "https://water.rid.go.th/waterm/template/manager/home.html", target: "_blank" },
                            ]}
                        />
                        <Dropdown
                            title="ส่วนอุทกวิทยา"
                            options={[
                                { label: "ฝ่ายวิจัยและอุทกวิทยาประยุกต์", link: "http://hydrology.rid.go.th/research-hydro/index.php/th/", target: "_blank" },
                                { label: "ฝ่ายตะกอนและคุณภาพน้ำ", link: "http://hydrology.rid.go.th/sediment-wq/index.php/th/", target: "_blank" },
                                { label: "ฝ่ายมาตรฐานเครื่องมืออุทกวิทยา", link: "http://hydrology.rid.go.th/std/2019/", target: "_blank" },
                                { label: "ฝ่ายสารสนเทศและพยากรณ์น้ำ", link: "https://water.rid.go.th/hyd/index.html", target: "_blank" },
                            ]}
                        />
                        <Dropdown
                            title="ส่วนปรับปรุงบำรุงรักษา"
                            options={[
                                { label: "ฝ่ายปรับปรุงโครงการชลประทาน", link: "http://hydrology.rid.go.th/imd/main/index.php/2018-08-21-04-27-28/2018-08-21-04-29-33", target: "_blank" },
                                { label: "ฝ่ายบำรุงรักษาหัวงาน", link: "http://hydrology.rid.go.th/imd/main/index.php/2018-08-21-04-27-28/2018-08-21-04-32-01", target: "_blank" },
                                { label: "ฝ่ายบำรุงรักษาระบบชลประทาน", link: "http://hydrology.rid.go.th/imd/main/index.php/2018-08-21-04-27-28/2018-08-21-04-32-51", target: "_blank" },
                                { label: "ฝ่ายการใช้พื้นที่ด้านชลประทาน", link: "http://hydrology.rid.go.th/imd/main/index.php/2018-08-21-04-27-28/2018-08-21-04-34-04", target: "_blank" },
                            ]}
                        />
                        <Dropdown
                            title="ส่วนความปลอดภัยเขื่อน"
                            options={[
                                { label: "ฝ่ายวิศวกรรม", link: "https://dam-safety.rid.go.th/index.php/2019-09-01-16-28-54/2021-04-06-15-19-18", target: "_blank" },
                                { label: "ฝ่ายวิเคราะห์และติดตามพฤติกรรมเขื่อน", link: "https://dam-safety.rid.go.th/index.php/2019-09-01-16-28-54/2021-04-06-15-20-20", target: "_blank" },
                            ]}
                        />
                        <Dropdown
                            title="ส่วนการใช้น้ำชลประทาน"
                            options={[
                                { label: "ฝ่ายสถิติการใช้น้ำชลประทาน", link: "https://water.rid.go.th/hwm/cropwater/iwmd/sb/index.php", target: "_blank" },
                                { label: "ฝ่ายวิจัยการใช้น้ำชลประทาน", link: "https://water.rid.go.th/hwm/cropwater/iwmd/rg/default.htm", target: "_blank" },
                                { label: "ฝ่ายเผยแพร่การใช้น้ำชลประทาน", link: "https://water.rid.go.th/hwm/cropwater/iwmd/db/default.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 1", link: "https://water.rid.go.th/hwm/cropwater/iwmd/sta/index_sta1_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 2", link: "https://water.rid.go.th/hwm/cropwater/iwmd/rg/index_sta2_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 3", link: "https://water.rid.go.th/hwm/cropwater/iwmd/rg/index_sta3_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 4", link: "https://water.rid.go.th/hwm/cropwater/iwmd/sta/index_sta4_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 5", link: "https://water.rid.go.th/hwm/cropwater/iwmd/sta/index_sta5_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 6", link: "https://water.rid.go.th/hwm/cropwater/iwmd/sta/index_sta6_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 7", link: "https://water.rid.go.th/hwm/cropwater/iwmd/sta/index_sta7_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 8", link: "https://water.rid.go.th/hwm/cropwater/iwmd/rg/index_sta8_th.htm", target: "_blank" },
                                { label: "สถานีทดลองการใช้น้ำชลประทานที่ 9", link: "https://water.rid.go.th/hwm/cropwater/iwmd/rg/index_sta9_th.htm", target: "_blank" },
                            ]}
                        />
                        <Dropdown
                            title="ศูนย์อุทกวิทยาชลประทาน"
                            options={[
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคเหนือตอนบน", link: "http://hydro-1.rid.go.th/", target: "_blank" },
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคเหนือตอนล่าง", link: "http://hydro-2.rid.go.th/", target: "_blank" },
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคตะวันออกเฉียงเหนือตอนบน", link: "http://hydro-3.rid.go.th/", target: "_blank" },
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคตะวันออกเฉียงเหนือตอนล่าง", link: "http://hydro-4.rid.go.th/", target: "_blank" },
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคกลาง", link: "http://hydro-5.rid.go.th/", target: "_blank" },
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคตะวันออก", link: "http://hydro-6.rid.go.th/", target: "_blank" },
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคตะวันตก", link: "http://hydro-7.rid.go.th/", target: "_blank" },
                                { label: "ศูนย์อุทกวิทยาชลประทานภาคใต้", link: "http://hydro-8.rid.go.th/", target: "_blank" },
                            ]}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
