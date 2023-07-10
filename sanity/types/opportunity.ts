import { PortableTextBlock } from "sanity";

type Image = {
  asset: {
    _ref: string;
  };
  alt: string;
};

export type Opportunity = {
  _id: string;
  _createdAt: string;
  name: string;
  location: string;
  locationMap: string;
  area: string;
  currency: string;
  requestedFund: number;
  slug: {
    current: string;
  };
  image: Image[];
  description: PortableTextBlock[];
};
