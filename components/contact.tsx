import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const leafletIcon = L.Icon.Default as any;
delete leafletIcon.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
});

const Contact = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();

    const companyPosition = [13.7885101, 100.5107503];

    return (
        <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
            <div
                className="relative h-[300px] bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ fontSize: `calc(1rem + ${fontSize}px)` }}>
                        {language === "ไทย" ? "ศูนย์ปฏิบัติการน้ำอัจฉริยะ" : "Smart Water Operation Center"}
                    </h1>
                    <p className="text-lg">
                        {language === "ไทย"
                            ? "การบริหารจัดการน้ำอย่างยั่งยืนเพื่ออนาคต"
                            : "Sustainable Water Management for the Future"}
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
                            {language === "ไทย" ? "ติดต่อเรา" : "Contact Us"}
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <img
                                    src={isDarkMode ? "/images/address-white.png" : "/images/address.png"}
                                    alt="location"
                                    className="w-6 h-6"
                                />
                                <p style={{ fontSize: `${fontSize + 1}px` }}>
                                    {language === "ไทย" ? (
                                        <>
                                            811 ถนนสามเสน <br /> แขวงถนนนครไชยศรี <br /> เขตดุสิต <br /> กรุงเทพมหานคร 10300
                                        </>
                                    ) : (
                                        <>
                                            811 Sam Sen Road <br /> Nakhon Chai Si Subdistrict <br /> Dusit District <br /> Bangkok 10300
                                        </>
                                    )}
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img
                                    src={isDarkMode ? "/images/email-white.png" : "/images/email.png"}
                                    alt="email"
                                    className="w-6 h-6"
                                />
                                <p style={{ fontSize: `${fontSize + 1}px` }}>wmsc.1460@gmail.com</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img
                                    src={isDarkMode ? "/images/phone-white.png" : "/images/phone.png"}
                                    alt="phone"
                                    className="w-6 h-6"
                                />
                                <p style={{ fontSize: `${fontSize + 1}px` }}>02-6692560</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img
                                    src={isDarkMode ? "/images/fax-white.png" : "/images/fax.png"}
                                    alt="fax"
                                    className="w-6 h-6"
                                />
                                <p style={{ fontSize: `${fontSize + 1}px` }}>02-2431098, 02-2436956</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
                            {language === "ไทย" ? "ติดตามเรา" : "Follow Us"}
                        </h2>
                        <div className="flex space-x-4 mb-8">
                            <a href="https://www.facebook.com/Kromchon" target="_blank" rel="noopener noreferrer">
                                <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCO-9E_WRW_YNaU-29thdhsg" target="_blank" rel="noopener noreferrer">
                                <img src="/images/youtube.png" alt="YouTube" className="w-8 h-8" />
                            </a>
                            <a href="https://page.line.me/gql5082z" target="_blank" rel="noopener noreferrer">
                                <img src="/images/line.png" alt="Line" className="w-8 h-8" />
                            </a>
                            <a href="https://x.com/pr_rid" target="_blank" rel="noopener noreferrer">
                                <img src="/images/twitter.png" alt="Twitter" className="w-8 h-8" />
                            </a>
                            <a href="https://www.tiktok.com/@kromchon_rid" target="_blank" rel="noopener noreferrer">
                                <img src="/images/tiktok.png" alt="Tiktok" className="w-8 h-8" />
                            </a>
                        </div>
                        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
                            {language === "ไทย" ? "เวลาทำการ" : "Business Hours"}
                        </h2>
                        <p style={{ fontSize: `${fontSize}px` }}>
                            {language === "ไทย" ? "จันทร์ - ศุกร์\n08.30 - 16.30" : "Monday - Friday\n08:30 - 16:30"}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
                            {language === "ไทย" ? "แผนที่ตั้ง" : "Location Map"}
                        </h3>
                        <div className="mt-1 w-full sm:w-full md:max-w-4xl mx-auto text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.1774844886564!2d100.510758!3d13.788532000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29be6e636de21%3A0xe8a9f978893b1005!2z4Lio4Li54LiZ4Lii4LmM4Lib4LiP4Li04Lia4Lix4LiV4Li04LiB4Liy4Lij4LiZ4LmJ4Liz4Lit4Lix4LiI4LiJ4Lij4Li04Lii4Liw!5e0!3m2!1sth!2sth!4v1736476575129!5m2!1sth!2sth"
                                width="120%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
