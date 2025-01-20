'use client';

import dynamic from 'next/dynamic';
import { usePage } from '@/contexts/PageContext';

const DivisionPage = dynamic(() => import('@/components/division'), { ssr: false });
const KnowledgePage = dynamic(() => import('@/components/knowledge'), { ssr: false });
const Contact = dynamic(() => import('@/components/contact'), { ssr: false });
const Structure = dynamic(() => import('@/components/structure'), { ssr: false });
const Management = dynamic(() => import('@/components/management'), { ssr: false });
const Law = dynamic(() => import('@/components/law'), { ssr: false });
const Rasponsibility = dynamic(() => import('@/components/responsibility'), { ssr: false });
const Website = dynamic(() => import('@/components/website'), { ssr: false });
const Knowledge_Videos = dynamic(() => import('@/components/knowledge_videos'), { ssr: false });
const Strategic = dynamic(() => import('@/components/strategic'), { ssr: false });
const Guarantee = dynamic(() => import('@/components/guarantee'), { ssr: false });
const Internal = dynamic(() => import('@/components/internal'), { ssr: false });
const External = dynamic(() => import('@/components/external'), { ssr: false });
const News = dynamic(() => import('@/components/news'), { ssr: false });


function MainContent() {
  const { currentPage } = usePage();

  return (
    <main>
      {currentPage === 'division' && <DivisionPage />}
      {currentPage === 'knowledge' && <KnowledgePage />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'structure' && <Structure />}
      {currentPage === 'management' && <Management />}
      {currentPage === 'law' && <Law />}
      {currentPage === 'responsibility' && <Rasponsibility />}
      {currentPage === 'website' && <Website />}
      {currentPage === 'knowledge_videos' && <Knowledge_Videos />}
      {currentPage === 'strategic' && <Strategic />}
      {currentPage === 'guarantee' && <Guarantee />}
      {currentPage === 'internal' && <Internal />}
      {currentPage === 'external' && <External />}
      {currentPage === 'news' && <News />}
    </main>
  );
}

export default MainContent;
