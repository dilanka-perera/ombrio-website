import StandardContainer from '@/app/StandardContainer';
import Topic from '../../Topic';
import { BlogPostCard } from '../BlogCard';
import BlogList from '../BlogList';
import WideContainer from '@/app/WideContainer';
import { useData } from '@/contexts/DataContext';

interface ExploreOurBlogCategoryProps {
  posts: BlogPostCard[];
}

const ExploreOurBlogCategory: React.FC<ExploreOurBlogCategoryProps> = ({
  posts,
}) => {
  const { websiteImages } = useData();

  const backgroundImage = `url('https:${
    websiteImages.find((item) => item.slug === 'background-5')?.image ||
    'no.png'
  }')`;

  return (
    <WideContainer>
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: '75% center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="absolute inset-0 bg-blue-300 bg-opacity-50" />

        <div className="relative">
          <StandardContainer id="blog">
            <div className="pt-10 pb-[60px]">
              <div>
                <Topic text="Explore Our Blog" />
              </div>

              <div className="pt-6">
                <BlogList posts={posts} />
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default ExploreOurBlogCategory;
