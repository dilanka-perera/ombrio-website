import {
  Asset,
  createClient,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
} from "contentful";

export type WebsiteImageSkeleton = {
  contentTypeId: "websiteImage";
  fields: {
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
};

export type CarousalSkeleton = {
  contentTypeId: "carousal";
  fields: {
    slug: EntryFieldTypes.Text;
    order: EntryFieldTypes.Number;
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    buttonText: EntryFieldTypes.Text;
    buttonUrl: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
};

export type TileSkeleton = {
  contentTypeId: "tile";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
  };
};

export type TileCollectionSkeleton = {
  contentTypeId: "tileCollection";
  fields: {
    slug: EntryFieldTypes.Text;
    tiles: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TileSkeleton>>;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAsset(item: any): item is Asset {
  return item && "fields" in item && item.fields.file;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEntry<T extends EntrySkeletonType>(item: any): item is Entry<T> {
  return item && "fields" in item;
}

export async function fetchWebsiteImages() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  // Replace 'yourContentType' with your actual content type ID
  const response = await client.getEntries<WebsiteImageSkeleton>({
    content_type: "websiteImage",
  });

  const data = response.items;

  const websiteImages = data.map((item) => ({
    slug: item.fields.slug,
    image: isAsset(item.fields.image)
      ? item.fields.image.fields.file?.url || ""
      : "",
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
    content_type: "carousal",
    order: ["fields.order"],
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
      ? item.fields.image.fields.file?.url || ""
      : "",
  }));

  return carousal;
}

export async function fetchTileCollections() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const response = await client.getEntries<TileCollectionSkeleton>({
    content_type: "tileCollection",
  });

  const data = response.items;

  const tileCollections = data.map((item) => ({
    slug: item.fields.slug,
    tiles: item.fields.tiles
      .filter((tile) => isEntry<TileSkeleton>(tile))
      .map((tile) => {
        const tileFields = tile;
        return {
          id: tileFields.sys.id,
          title: tileFields.fields.title,
          slug: tileFields.fields.slug,
          description: tileFields.fields.description,
          image: isAsset(tileFields.fields.image)
            ? tileFields.fields.image?.fields.file?.url || ""
            : "",
        };
      }),
  }));
  
  return tileCollections;
}