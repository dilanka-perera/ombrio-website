"use client";

import React, { createContext, useContext } from "react";

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

export type DataType = {
  carousal: CarousalItem[];
  websiteImages: WebsiteImage[];
  tileCollections: TileCollection[];
  headBanners: HeadBanner[];
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
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
