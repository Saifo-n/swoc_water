"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize } from "@/contexts/FontSizeContext";

const DivisionPage = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const { fontSize } = useFontSize();

  return (
    <div className={isDarkMode ? "bg-gray-900/90 text-white" : "bg-white text-black"}>
      <div
        className="relative h-[250px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://blog.carro.co/wp-content/uploads/2022/05/10-Dam-In-Thailand-4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontSize: `calc(1rem + ${fontSize}px)` }}>
            {language === "ไทย" ? "ส่วนประมวลวิเคราะห์สถานการณ์น้ำ" : "Water Situation Analysis Unit"}
          </h1>
          <p className="max-w-3xl" style={{ fontSize: `${fontSize}px` }}>
            {language === "ไทย"
              ? "การเพิ่มประสิทธิภาพการบริหารจัดการน้ำแบบบูรณาการให้ทุกภาคส่วนอย่างเพียงพอ ทั่วถึง และเป็นธรรม โดยใช้นวัตกรรมเทคโนโลยีที่ทันสมัย เพื่อให้ครบชลประทาน เป็นองค์กรอัจฉริยะในปี 2580"
              : "Enhancing integrated water management efficiency for all sectors in a sufficient, equitable, and fair manner by using modern technology and innovations to make irrigation a smart organization by the year 2580."}
          </p>
        </div>
      </div>

      <div className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://drive.google.com/file/d/1qLW0flli2XNiTP7uv4Y6bktP8R45i1oO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mun_River_-_Sisaket.jpg/1280px-Mun_River_-_Sisaket.jpg"
                  alt="แผนที่ สชป.1-17"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แผนที่ สชป.1-17" : "Map S.P.1-17"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://www.tmd.go.th/daily_forecast.php" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.prachachat.net/wp-content/uploads/2023/01/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%81-728x546.jpg"
                  alt="พยากรณ์อากาศ"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย"
                      ? "พยากรณ์อากาศและปริมาณฝน (กรมอุตุนิยมวิทยา)"
                      : "Weather Forecast and Rainfall (Meteorological Department)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://www.tmd.go.th/supportData/synopticCharts" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.expedia.co.th/stories/wp-content/uploads/2022/07/01-Amur-River-2.jpg"
                  alt="แผนที่อากาศ"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แผนที่อากาศ (กรมอุตุนิยมวิทยา)" : "Weather Map (Meteorological Department)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://satda.tmd.go.th/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4vAvCoFOlET5xOTj4ZTj67bURmgBWgMgPORNvqj7N0QEhqFMBLl.webp"
                  alt="Satellite Image Analysis"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "วิเคราะห์ภาพดาวเทียม" : "Satellite Image Analysis"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://nationalthaiwater.onwr.go.th/main#box-rain" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20220221/pngtree-stunning-sight-of-lampoon-thailands-mountainous-river-landscape-photo-image_3453997.jpg"
                  alt="24-Hour Rainfall (PWA)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ปริมาณฝนย้อนหลัง 24 ชม. (สทนช.)" : "24-Hour Rainfall (PWA)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://water.rid.go.th/flood/flood/res_table.htm" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://mpics.mgronline.com/pics/Images/565000009156801.JPEG"
                  alt="Department of Meteorology Announcements"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ประกาศกรมอุตุนิยมวิทยา" : "Department of Meteorology Announcements"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://www.windy.com/?13.775,100.520,5" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5x5fIKySis7YHlCEq114HowaAxvjgiDCMTS2FnlwEuWDYuEYnGY.webp"
                  alt="Weather and Rainfall Forecast Map (windy.com)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แผนที่พยากรณ์อากาศ และปริมาณฝน (windy.com)" : "Weather and Rainfall Forecast Map (windy.com)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://water.rid.go.th/flood/flood/res_table.htm" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.salika.co/wp-content/uploads/2022/04/%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B9%82%E0%B8%95%E0%B8%99%E0%B8%941-1068x561.jpg"
                  alt="National Large-Scale Reservoir Data"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ข้อมูลอ่างเก็บน้ำขนาดใหญ่ทั้งประเทศ" : "National Large-Scale Reservoir Data"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://ichpp.egat.co.th/hydrointernet/statusdam_report_internet.php" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.energynewscenter.com/wp-content/uploads/2018/12/Dam_Ratcha-e1544181060222.jpg"
                  alt="EGAT Large-Scale Reservoir Data"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ข้อมูลอ่างเก็บน้ำขนาดใหญ่ (กฟผ.)" : "EGAT Large-Scale Reservoir Data"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://app.rid.go.th/reservoir/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://mpics.mgronline.com/pics/Images/564000010213203.JPEG"
                  alt="National Medium-Scale Reservoir Data"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ข้อมูลอ่างเก็บน้ำขนาดกลางทั้งประเทศ" : "National Medium-Scale Reservoir Data"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://rid-iot.serveftp.net:8080/index.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.matichon.co.th/wp-content/uploads/2024/09/%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%8A4-1024x768.jpg"
                  alt="Hourly Reservoir Water Situation Data"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ข้อมูลสถานการณ์น้ำในอ่างเก็บน้ำราย ชม." : "Hourly Reservoir Water Situation Data"}
                  </h3>
                </div>
              </div>
            </a>
          </div>


          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://drive.google.com/drive/folders/1153XEbTohyDni8MrZW0QnjgmMyFXC381?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.matichon.co.th/wp-content/uploads/2018/08/a4.jpeg"
                  alt="เกณฑ์การระบาย"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "เกณฑ์การระบาย" : "Water Release Criteria"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://dss.bigdata-swoc.rid.go.th/water-plan" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.thailandplus.tv/wp-content/uploads/2022/08/4-136.jpg"
                  alt="แผนผังทางน้ำ"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แผนผังทางน้ำ" : "Waterway Diagram"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://water.rid.go.th/hyd/Diagram/Diagram22.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://static.thairath.co.th/media/00_A5B1905085C3E1280.webp"
                  alt="แผนที่และแผนผัง 22 ลุ่มน้ำ"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แผนที่และแผนผัง 22 ลุ่มน้ำ" : "22 Watershed Maps and Diagrams"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://telerid.rid.go.th/#/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://mpics.mgronline.com/pics/Images/560000009893505.JPEG"
                  alt="ข้อมูลสถานีโทรมาตรขนาดใหญ่"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ข้อมูลสถานีโทรมาตรขนาดใหญ่" : "Large Telemetry Station Data"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://www.arcgis.com/apps/Embed/index.html?webmap=f137a08fd978460f984b3c6440e0194d&extent=83.9957,3.9011,116.4493,21.7938&home=true&zoom=true&scale=true&basemap_gallery=true&disable_scroll=false&theme=light" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://i0.wp.com/greennews.agency/wp-content/uploads/2024/08/flood-230824-00005.jpg?fit=2048%2C1688&ssl=1"
                  alt="สถานีวัดน้ำฝนศูนย์อุทกวิทยา"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "สถานีวัดน้ำฝนศูนย์อุทกวิทยา" : "Hydrology Center Rain Gauge Station"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro1h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://static.thairath.co.th/media/Dtbezn3nNUxytg04avc77il9608p5YVzTLj7j4IIzpfFTI.webp"
                  alt="ระดับน้ำรายชั่วโมงภาคเหนือตอนบน (เชียงใหม่)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคเหนือตอนบน (เชียงใหม่)" : "Hourly Water Level in Upper Northern Region (Chiang Mai)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro2h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://mpics.mgronline.com/pics/Images/567000010638805.JPEG"
                  alt="ระดับน้ำรายชั่วโมงภาคเหนือตอนล่าง (พิษณุโลก)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคเหนือตอนล่าง (พิษณุโลก)" : "Hourly Water Level in Lower Northern Region (Phitsanulok)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro3h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/7b/11/d8/15-10-07-15-42-22-928.jpg"
                  alt="ระดับน้ำรายชั่วโมงภาคตะวันออกเฉียงเหนือตอนบน (ขอนแก่น)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคตะวันออกเฉียงเหนือตอนบน (ขอนแก่น)" : "Hourly Water Level in Upper Northeastern Region (Khon Kaen)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro4h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.khaosod.co.th/wpapp/uploads/2021/10/%E0%B8%A1%E0%B8%A5%E0%B8%9A%E0%B8%994-25.jpg"
                  alt="ระดับน้ำรายชั่วโมงภาคตะวันออกเฉียงเหนือตอนล่าง (นครราชสีมา)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคตะวันออกเฉียงเหนือตอนล่าง (นครราชสีมา)" : "Hourly Water Level in Lower Northeastern Region (Nakhon Ratchasima)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro5h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.prachachat.net/wp-content/uploads/2024/10/Cover-photo-6-728x485.jpg"
                  alt="ระดับน้ำรายชั่วโมงภาคกลาง (ชัยนาท)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคกลาง (ชัยนาท)" : "Hourly Water Level in Central Region (Chai Nat)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro6h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://cdn2.mushroomtravel.com/files/MUSH/Uploads/Attraction/202008/Bang%20Phra%20Reservoir%2C%20Chonburi%20-%20Getty%20Images%20%286%29.jpg"
                  alt="ระดับน้ำรายชั่วโมงภาคตะวันออก (ชลบุรี)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคตะวันออก (ชลบุรี)" : "Hourly Water Level in the Eastern Region (Chonburi)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro7h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.riverkwairesotel.net/wp-content/uploads/2023/12/1-%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%94%E0%B8%B5-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%A5%E0%B8%A1%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B8%A7%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%81.webp"
                  alt="ระดับน้ำรายชั่วโมงภาคตะวันตก (กาญจนบุรี)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคตะวันตก (กาญจนบุรี)" : "Hourly Water Level in the Western Region (Kanchanaburi)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://hyd-app.rid.go.th/hydro8h.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://phatthalungreview.com//pic/36/1.jpg"
                  alt="ระดับน้ำรายชั่วโมงภาคใต้ (พัทลุง)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระดับน้ำรายชั่วโมงภาคใต้ (พัทลุง)" : "Hourly Water Level in the Southern Region (Phatthalung)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://ridcctv.com/CctvList.aspx#" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://today-obs.line-scdn.net/0hzEYalumoJWpkGArGWp9aPV5OJgVXdDZpAC50aTh2e15BejE-WitrX0gaeVxJKGI0Ci5oC0AaPltPKWQ4CCxr/w644"
                  alt="ระบบเฝ้าระวังระดับน้ำด้วยกล้องวงจร (CCTV) กรมชลประทาน"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ระบบเฝ้าระวังระดับน้ำด้วยกล้องวงจร (CCTV) กรมชลประทาน" : "Water Level Surveillance System with CCTV (Irrigation Department)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://mekhala.dwr.go.th/cctv/cctv-active.php" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://riverkwairesotel.net/wp-content/uploads/2023/12/5-%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87.webp"
                  alt="ติดตามระดับน้ำจากกล้อง CCTV ศูนย์ป้องกันวิกฤตน้ำกรมทรัพยากรน้ำ"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ติดตามระดับน้ำจากกล้อง CCTV ศูนย์ป้องกันวิกฤตน้ำกรมทรัพยากรน้ำ" : "Monitor Water Levels via CCTV at the Water Crisis Prevention Center, Department of Water Resources"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://183.88.214.137:8000/#" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.bethailand.com/Picture/P03006628_1.jpeg"
                  alt="ติดตามระดับน้ำจากกล้อง CCTV ในพื้นที่เทศบาลนครอุบลราชธานี"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ติดตามระดับน้ำจากกล้อง CCTV ในพื้นที่เทศบาลนครอุบลราชธานี" : "Monitor water levels from CCTV cameras in Ubon Ratchathani Municipal Area"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://water.eon-solution.com/waterlevel01/public/system-portal.php" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.js100.com/uploads/ckeditor/9778d5d219c5080b9a6a17bef029331cimages/216032135_301360151783316_8935993333250948326_n.jpg"
                  alt="ติดตามระดับน้ำจากกล้อง CCTV ในพื้นที่เทศบาลนครปากเกร็ด"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ติดตามระดับน้ำจากกล้อง CCTV ในพื้นที่เทศบาลนครปากเกร็ด" : "Monitor Water Levels via CCTV in the Area of Pak Kret Municipality"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://www.hydro.navy.mi.th/servicestide.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://mpics.mgronline.com/pics/Images/566000002361105.JPEG"
                  alt="แผนที่คาดการ์ณระดับน้ำทะเลของกรมอุทกศาสตร์"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แผนที่คาดการ์ณระดับน้ำทะเลของกรมอุทกศาสตร์" : "Sea Level Forecast Map by the Hydrographic Department"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://water.rid.go.th/flood/tide/tide.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.greennetworkthailand.com/wp-content/uploads/2020/02/coastal-protection-03.jpg"
                  alt="กราฟคาดการ์ณระดับน้ำทะเล"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "กราฟคาดการ์ณระดับน้ำทะเล" : "Sea Level Forecast Graph"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://rwc.mwa.co.th/page/stats/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://mpics.mgronline.com/pics/Images/562000012837501.JPEG"
                  alt="สถานีตรวจวัดคุณภาพน้ำ (กปน.)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "สถานีตรวจวัดคุณภาพน้ำ (กปน.)" : "Water Quality Monitoring Station (MWA)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://rwc.mwa.co.th/migrate/test/samlae_monitoring.php" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://thaipublica.org/wp-content/uploads/2020/02/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B9%89%E0%B8%B32.jpg"
                  alt="ตรวจวัดคุณภาพน้ำดิบ (หน้าสถานีสูบน้ำดิบสำแล)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ตรวจวัดคุณภาพน้ำดิบ (หน้าสถานีสูบน้ำดิบสำแล)" : "Raw Water Quality Monitoring (in front of the Samla Raw Water Pump Station)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://hydrowq.rid.go.th/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://thaipublica.org/wp-content/uploads/2020/02/%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B2.jpg"
                  alt="สถานีวัดคุณภาพน้ำ เจ้าพระยา ปราจีน-บางปะกง ท่าจีน แม่กลอง"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "สถานีวัดคุณภาพน้ำ เจ้าพระยา ปราจีน-บางปะกง ท่าจีน แม่กลอง" : "Chao Phraya Water Quality Monitoring Station, Prachin-Bang Pakong, Tha Chin, Mae Klong"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://wq-thachin.rid.go.th/stats" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.thailandplus.tv/wp-content/uploads/2021/02/%E0%B8%9B%E0%B8%95%E0%B8%A3_1.%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B8%B2_%E0%B9%92%E0%B9%91%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%97_0.jpg"
                  alt="ตรวจวัดคุณภาพน้ำท่าจีน (ปตร.คลองจินดา)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ตรวจวัดคุณภาพน้ำท่าจีน (ปตร.คลองจินดา)" : "Tha Chin Water Quality Monitoring (Klong Jinda Pumping Station)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://log.ddnsthai.com/Monitor_RID" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.technologychaoban.com/wp-content/uploads/2021/03/%E0%B8%9B%E0%B8%95%E0%B8%A3_0.%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B8%B2_%E0%B9%92%E0%B9%91%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%97_2-1024x682.jpg"
                  alt="ตรวจคุณภาพน้ำท่าจีน (ท้ายปตร.คลองจินดา)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ตรวจคุณภาพน้ำท่าจีน (ท้ายปตร.คลองจินดา)" : "Tha Chin Water Quality Monitoring (End of Klong Jinda Pumping Station)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://tele-wrd.pwa.co.th/web/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://image.bangkokbiznews.com/uploads/images/contents/w1024/2024/06/M2XZNsF6gdb2Ja6YlobX.webp?x-image-process=style/lg-webp"
                  alt="แผนที่จุดติดตั้ง สถานีตรวจวัดน้ำดิบ (กปภ.)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แผนที่จุดติดตั้ง สถานีตรวจวัดน้ำดิบ (กปภ.)" : "Map of Installation Points for Raw Water Quality Monitoring Stations (PWA)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://water.rid.go.th/hwm/cropwater/Statistic/index.htm" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZYjmzwxmlKUaCrv575tgr6eJKyKtFfFfiyFdtpuS4Jn1HRCaJmiX.jpg"
                  alt="สภาพการเพาะปลูกพืช"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "สภาพการเพาะปลูกพืช" : "Crop Cultivation Conditions"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://www.nirapai.com/1784/index.php/th/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://img.freepik.com/premium-photo/river-cam-sunset-reservoir_40804-25.jpg?w=360"
                  alt="รายงานสถานการ์ณสาธารณภัย (ปภ.)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "รายงานสถานการ์ณสาธารณภัย (ปภ.)" : "Disaster Situation Report (DDPM)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://irw101.ldd.go.th/index.php/2017-05-23-02-00-40/2017-05-23-02-00-40" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.dailynews.co.th/wp-content/uploads/2022/09/306155576_5720552191321573_7616417200496110082_n-1.jpg"
                  alt="พื้นที่น้ำท่วมซ้ำซาก"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "พื้นที่น้ำท่วมซ้ำซาก" : "Repeated Flooded Areas"}
                  </h3>
                </div>
              </div>
            </a>
          </div>


          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="http://irw101.ldd.go.th/index.php/2017-05-23-02-00-40/2017-05-23-02-00-39" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.tcijthai.com/office-tcij/headpicture/Zbmxr9tTue12201.jpg"
                  alt="พื้นที่น้ำแล้งซ้ำซาก"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "พื้นที่น้ำแล้งซ้ำซาก" : "Repeated Drought Areas"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://www.thaiwater.net/report/yearly/history" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://s359.kapook.com/pagebuilder/c4ebed69-3913-47dd-ab67-26c0bbfcc983.jpg"
                  alt="สถิติอุทกภัยที่ผ่านมา"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "สถิติอุทกภัยที่ผ่านมา" : "Past Flood Statistics"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://water.rid.go.th/hyd/PORTAL/submenu/4-06-1.html" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://promotions.co.th/wp-content/uploads/2022/12/cover-travel-at-south-of-thailand.jpg"
                  alt="ช่วงเวลาเฝ้าระวังภัยน้ำท่วม"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ช่วงเวลาเฝ้าระวังภัยน้ำท่วม" : "Flood Monitoring Period"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://flood.gistda.or.th/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://www.tqm.co.th/gallery/2675.jpg"
                  alt="ช่องทางการดาวน์โหลดภาพถ่ายดาวเทียม ของ Gistda"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "ช่องทางการดาวน์โหลดภาพถ่ายดาวเทียม ของ Gistda" : "Satellite Imagery Download Channels of GISTDA"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://apps.apple.com/th/app/wmsc/id881559159" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="/images/division.png"
                  alt="แอปพลิเคชั่น WMSC (IOS)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แอปพลิเคชั่น WMSC (IOS)" : "WMSC Application (IOS)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://play.google.com/store/apps/details?id=io.cordova.wmsc.app.rid.go.th&hl=th&gl=US" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="/images/division.png"
                  alt="แอปพลิเคชั่น WMSC (android)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แอปพลิเคชั่น WMSC (android)" : "WMSC Application (android)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://play.google.com/store/apps/details?id=rid.swoc.swocpr" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/40/ad/be/40adbe99-a8db-9bf7-80f8-5725bb641183/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp"
                  alt="แอปพลิเคชั่น SWOC PR (IOS)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แอปพลิเคชั่น SWOC PR (IOS)" : "SWOC PR Application (IOS)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <a href="https://www.tmd.go.th/supportData/synopticCharts" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/40/ad/be/40adbe99-a8db-9bf7-80f8-5725bb641183/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp"
                  alt="แอปพลิเคชั่น SWOC PR (android)"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-white">
                  <h3 className="text-lg font-semibold text-center" style={{ fontSize: `${fontSize}px` }}>
                    {language === "ไทย" ? "แอปพลิเคชั่น SWOC PR (android)" : "SWOC PR Application (android)"}
                  </h3>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DivisionPage;
