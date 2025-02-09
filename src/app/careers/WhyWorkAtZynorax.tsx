"use client";

import { useData } from "@/contexts/DataContext";
import ImageSnippets from "../ImageSnippets";
import StandardContainer from "../StandardContainer";
import Topic from "../Topic";

const WhyWorkAtZynorax: React.FC = () => {
  const tileCollections = useData().tileCollections;
  const tileCollection = tileCollections.find(
    (item) => item.slug === "why-work-at-zynorax"
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
    <div className="bg-slate-300">
      <StandardContainer>
        <div>
          {/* Section Title */}
          <div className="pt-10">
            <Topic text="Why Work at ZynoraX?" />
          </div>

          {/* Image Snippets */}
          <div className="pt-6">
            <ImageSnippets topics={topics} />
          </div>
        </div>
      </StandardContainer>
    </div>
  );
};

export default WhyWorkAtZynorax;
