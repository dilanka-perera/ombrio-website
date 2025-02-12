import {
  Asset,
  createClient,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
} from 'contentful';

export type WebsiteImageSkeleton = {
  contentTypeId: 'websiteImage';
  fields: {
    slug: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
  };
};

export type CarousalSkeleton = {
  contentTypeId: 'carousal';
  fields: {
    slug: EntryFieldTypes.Text;
    order: EntryFieldTypes.Number;
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    buttonText: EntryFieldTypes.Text;
    buttonUrl: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
  };
};

export type TileSkeleton = {
  contentTypeId: 'tile';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
  };
};

export type TileCollectionSkeleton = {
  contentTypeId: 'tileCollection';
  fields: {
    slug: EntryFieldTypes.Text;
    tiles?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TileSkeleton>>;
  };
};

export type HeadBannerSkeleton = {
  contentTypeId: 'headBanner';
  fields: {
    slug: EntryFieldTypes.Text;
    text: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
  };
};

export type AuthorSkeleton = {
  contentTypeId: 'author';
  fields: {
    slug: EntryFieldTypes.Text;
    firstName: EntryFieldTypes.Text;
    lastName: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    profilePicture?: EntryFieldTypes.AssetLink;
    bio: EntryFieldTypes.RichText;
  };
};

export type BlogContentSkeleton = {
  contentTypeId: 'blogContent';
  fields: {
    subtitle: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
};

export type BlogPostSkeleton = {
  contentTypeId: 'blogPost';
  fields: {
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    featuredImage?: EntryFieldTypes.AssetLink;
    author?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<AuthorSkeleton>>;
    publishedDate: EntryFieldTypes.Date;
    content?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<BlogContentSkeleton>
    >;
  };
};

export type BlogCategorySkeleton = {
  contentTypeId: 'blogCategory';
  fields: {
    slug: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    blogs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<BlogPostSkeleton>>;
    description: EntryFieldTypes.Text;
    headerImage?: EntryFieldTypes.EntryLink<HeadBannerSkeleton>;
  };
};

export type BlogSkeleton = {
  contentTypeId: 'blog';
  fields: {
    slug: EntryFieldTypes.Text;
    blogCategory?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<BlogCategorySkeleton>
    >;
  };
};

export type TeamMemberSkeleton = {
  contentTypeId: 'teamMember';
  fields: {
    slug: EntryFieldTypes.Text;
    firstName: EntryFieldTypes.Text;
    lastName: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    profilePicture?: EntryFieldTypes.AssetLink;
  };
};

export type TeamSkeleton = {
  contentTypeId: 'team';
  fields: {
    slug: EntryFieldTypes.Text;
    teamName: EntryFieldTypes.Text;
    teamMembers?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TeamMemberSkeleton>
    >;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAsset(item: any): item is Asset {
  return item && 'fields' in item && item.fields.file;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEntry<T extends EntrySkeletonType>(item: any): item is Entry<T> {
  return item && 'fields' in item;
}

export async function fetchWebsiteImages() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  // Replace 'yourContentType' with your actual content type ID
  const response = await client.getEntries<WebsiteImageSkeleton>({
    content_type: 'websiteImage',
  });

  const data = response.items;

  const websiteImages = data.map((item) => ({
    slug: item.fields.slug,
    image: isAsset(item.fields.image)
      ? item.fields.image.fields.file?.url || '/no.png'
      : '/no.png',
  }));

  return websiteImages;
}

export async function fetchCarousal() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  // Replace 'yourContentType' with your actual content type ID
  const response = await client.getEntries<CarousalSkeleton>({
    content_type: 'carousal',
    order: ['fields.order'],
  });

  const data = response.items;

  const carousal = data.map((item) => ({
    slug: item.fields.slug,
    order: item.fields.order,
    title: item.fields.title,
    description: item.fields.description,
    buttonText: item.fields.buttonText,
    buttonUrl: item.fields.buttonUrl,
    image: isAsset(item.fields.image)
      ? item.fields.image.fields.file?.url || '/no.png'
      : '/no.png',
  }));

  return carousal;
}

export async function fetchTileCollections() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const response = await client.getEntries<TileCollectionSkeleton>({
    content_type: 'tileCollection',
    include: 2,
  });

  const data = response.items;

  const tileCollections = data.map((item) => ({
    slug: item.fields.slug,
    tiles: (item.fields.tiles ?? [])
      .filter((tile) => isEntry<TileSkeleton>(tile))
      .map((tile) => {
        const tileFields = tile;
        return {
          id: tileFields.sys.id,
          title: tileFields.fields.title,
          slug: tileFields.fields.slug,
          description: tileFields.fields.description,
          image: isAsset(tileFields.fields.image)
            ? tileFields.fields.image?.fields.file?.url || '/no.png'
            : '/no.png',
        };
      }),
  }));

  return tileCollections;
}

export async function fetchHeadBanners() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const response = await client.getEntries<HeadBannerSkeleton>({
    content_type: 'headBanner',
  });

  const data = response.items;

  return data.map((item) => ({
    slug: item.fields.slug,
    text: item.fields.text,
    image: isAsset(item.fields.image)
      ? item.fields.image.fields.file?.url || '/no.png'
      : '/no.png',
  }));
}

export async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const response = await client.getEntries<BlogSkeleton>({
    content_type: 'blog',
    include: 3,
  });

  const data = response.items;

  const blogs = data.map((blog) => ({
    slug: blog.fields.slug,
    categories:
      blog.fields.blogCategory
        ?.filter((category) => isEntry<BlogCategorySkeleton>(category))
        .map((category) => ({
          slug: category.fields.slug,
          name: category.fields.name,
          description: category.fields.description,
          headerImageSlug: isEntry<HeadBannerSkeleton>(
            category.fields.headerImage,
          )
            ? category.fields.headerImage.fields.slug
            : '',
          blogPosts: (category.fields.blogs ?? [])
            .filter((blogPost) => isEntry<BlogPostSkeleton>(blogPost))
            .map((blogPost) => ({
              slug: blogPost.fields.slug,
              title: blogPost.fields.title,
              featuredImage: isAsset(blogPost.fields.featuredImage)
                ? blogPost.fields.featuredImage.fields.file?.url || '/no.png'
                : '/no.png',
              publishedDate: blogPost.fields.publishedDate,
              authors: (blogPost.fields.author ?? [])
                .filter((author) => isEntry<AuthorSkeleton>(author))
                .map((author) => ({
                  slug: author.fields.slug,
                  firstName: author.fields.firstName,
                  lastName: author.fields.lastName,
                  email: author.fields.email,
                  profilePicture: isAsset(author.fields.profilePicture)
                    ? author.fields.profilePicture.fields.file?.url || '/no.png'
                    : '/no.png',
                  bio: author.fields.bio,
                })),
              content: (blogPost.fields.content ?? [])
                .filter((content) => isEntry<BlogContentSkeleton>(content))
                .map((content) => ({
                  subtitle: content.fields.subtitle,
                  slug: content.fields.slug,
                  content: content.fields.content,
                })),
            })),
        })) || [],
  }));

  return blogs;
}

export async function fetchTeams() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const response = await client.getEntries<TeamSkeleton>({
    content_type: 'team',
    include: 2,
  });

  const data = response.items;

  const teams = data.map((team) => ({
    slug: team.fields.slug,
    teamName: team.fields.teamName,
    teamMembers: (team.fields.teamMembers ?? [])
      .filter((member) => isEntry<TeamMemberSkeleton>(member))
      .map((member) => ({
        slug: member.fields.slug,
        firstName: member.fields.firstName,
        lastName: member.fields.lastName,
        role: member.fields.role,
        profilePicture: isAsset(member.fields.profilePicture)
          ? member.fields.profilePicture.fields.file?.url || '/no.png'
          : '/no.png',
      })),
  }));

  return teams;
}