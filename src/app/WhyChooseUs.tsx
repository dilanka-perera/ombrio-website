'use client';

import { useData } from '@/contexts/DataContext';
import ImageSnippets from './ImageSnippets';
import StandardContainer from './StandardContainer';
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
    <div className="bg-white bg-opacity-20 shadow-lg backdrop-blur-lg">
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
  );
};

export default WhyChooseUs;
