'use client';

import { useData } from '@/contexts/DataContext';
import ImageSnippets from './ImageSnippets';
import StandardContainer from './StandardContainer';
import WideContainer from './WideContainer';
import Topic from './Topic';

const WhyChooseUs: React.FC = () => {
  const { tileCollections } = useData();
  const tileCollection = tileCollections.find(
    (item) => item.slug === 'why-choose-us',
  );

  if (!tileCollection) {
    return null;
  }

  const topics = tileCollection.tiles.map((tile) => ({
    slug: tile.slug,
    title: tile.title,
    description: tile.description,
    imageSrc: `https:${tile.image}`,
  }));

  return (
    <WideContainer id="why-choose-us">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-300" />

        <div className="relative">
          <StandardContainer>
            <div>
              <div className="pt-10">
                <Topic text="Why Choose Us?" />
              </div>

              <div className="pt-6">
                <ImageSnippets topics={topics} />
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default WhyChooseUs;
