"use client";
import { usePage } from '@/contexts/PageContext';
import DivisionPage from '@/components/division';
import KnowledgePage from '@/components/knowledge';
import Contact from '@/components/contact';
import Structure from '@/components/structure';
import Management from '@/components/management';
import Law from '@/components/law';
import Rasponsibility from '@/components/responsibility';
import Website from '@/components/website';
import Knowledge_Videos from '@/components/knowledge_videos';
import Strategic from '@/components/strategic'
import Guarantee from '@/components/guarantee'
import Internal from '@/components/internal';
import External from '@/components/external';

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
    </main>
  );
}

export default MainContent;
