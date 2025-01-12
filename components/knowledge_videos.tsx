import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const Knowledge_Videos = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    const { fontSize } = useFontSize();
    const { videoId } = useParams(); 

    const videos = [
        {
            id: 1,
            title: "ประหยัดน้ำ (Save Water) - ว่าน ธนกฤต X เปา เปาวลี",
            date: "5 มิ.ย. 2022 / SWOC NEWs",
            department: "ประหยัดน้ำ (Save Water) - ว่าน ธนกฤต X เปา เปาวลี",
            linkUrl: "https://www.youtube.com/watch?v=ewnsShCZs10",
        },
    ];

    const video = videos.find(v => v.id === parseInt(videoId));

    if (!video) {
        return <div>Video not found</div>;
    }

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
                        {language === "ไทย" ? video.title : video.title}
                    </h1>
                </div>
            </div>
            <div className="p-6">
                <iframe
                    src={`${video.linkUrl.replace("watch?v=", "embed/")}?autoplay=1`}
                    title={video.title}
                    allow="autoplay; encrypted-media"
                    className="w-full h-56"
                ></iframe>
                <p className="text-lg mt-4">{video.date}</p>
                <p className="text-lg mt-2">{video.department}</p>
                <a href={video.linkUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {language === "ไทย" ? "ดูวิดีโอบน YouTube" : "Watch on YouTube"}
                </a>
            </div>
        </div>
    );
};

export default Knowledge_Videos;
