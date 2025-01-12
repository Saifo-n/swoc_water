import { Prompt } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { PageProvider } from '@/contexts/PageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from "@/contexts/LanguageContext";
import { FontSizeProvider } from "@/contexts/FontSizeContext";
import '../styles/globals.css';
import MainContent from '@/app/mainContent';

export const metadata = {
  title: "ส่วนประมวลวิเคราะห์สถานการณ์น้ำ",
  description: "เว็บไซต์ของส่วนประมวลวิเคราะห์สถานการณ์น้ำเพื่อการติดตามและบริหารจัดการน้ำ",
};

const prompt = Prompt({
  weight: '200',
  subsets: ['latin', 'thai'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${prompt.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <FontSizeProvider>
              <PageProvider>
                <Header />
                <MainContent />
                <Footer />
              </PageProvider>
            </FontSizeProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
