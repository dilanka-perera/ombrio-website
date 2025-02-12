'use client';

import React, { createContext, useContext } from 'react';
import { Document } from '@contentful/rich-text-types';

export type CarousalItem = {
  slug: string;
  order: number;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
};

export type WebsiteImage = {
  slug: string;
  image: string;
};

export type Tile = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export type TileCollection = {
  slug: string;
  tiles: Tile[];
};

export type HeadBanner = {
  slug: string;
  text: string;
  image: string;
};

export type BlogAuthor = {
  slug: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  bio: Document;
};

export type BlogContent = {
  subtitle: string;
  slug: string;
  content: Document;
};

export type BlogPost = {
  slug: string;
  title: string;
  featuredImage: string;
  publishedDate: string;
  authors: BlogAuthor[];
  content: BlogContent[];
};

export type BlogCategory = {
  slug: string;
  name: string;
  blogPosts: BlogPost[];
  description: string;
  headerImageSlug: string;
};

export type Blog = {
  slug: string;
  categories: BlogCategory[];
};

export type TeamMember = {
  slug: string;
  firstName: string;
  lastName: string;
  role: string;
  profilePicture: string;
};

export type Team = {
  slug: string;
  teamName: string;
  teamMembers: TeamMember[];
};

export type DataType = {
  carousal: CarousalItem[];
  websiteImages: WebsiteImage[];
  tileCollections: TileCollection[];
  headBanners: HeadBanner[];
  blogs: Blog[];
  teams: Team[];
};

const DataContext = createContext<DataType | undefined>(undefined);

type DataProviderProps = {
  initialData: DataType;
  children: React.ReactNode;
};

export function DataProvider({ initialData, children }: DataProviderProps) {
  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
