import { PortableTextBlock } from "sanity";

export type Blog={
    _id:string;
    _createdAt:string;
    name:string;
    slug:string;
    image:string;
    // url:string;
    content:PortableTextBlock[];

}