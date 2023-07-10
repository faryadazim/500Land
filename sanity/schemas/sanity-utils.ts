import clientConfig from "@/config/client-config";
import { Blog } from "@/sanity/types/blog";
import { Page } from "@/sanity/types/page";
import { createClient, groq } from "next-sanity";
import { Opportunity } from "@/sanity/types/opportunity";

export async function getBlogs(): Promise<Blog[]> {
  // const client = createClient({

  //     projectId: 'ot0o1c7j',
  //     dataset: 'production',
  //     apiVersion: '2023-03-04'

  // });
  // debugger;
  // console.log(JSON.stringify(client));
  return createClient(clientConfig).fetch(
    groq`*[_type=="blog"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image":image.asset->url,

        content
    }`
  );
}

export async function getOpportunities(): Promise<Opportunity[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="opportunity"]{
        _id,
        _createdAt,
        name,
        location,
        locationMap,
        area,
        currency,
        requestedFund,
        "slug": slug.current,
        "image": image[].asset->url,
        description
    }`
  );
}

export async function getOpportunityBySlug(
  slug: string
): Promise<Opportunity | null> {
  const opportunities = await createClient(clientConfig).fetch(
    groq`*[_type=="opportunity" && slug.current == $slug]{
        _id,
        _createdAt,
        name,
        location,
        locationMap,
        area,
        currency,
        requestedFund,
        "slug": slug.current,
        "image": image[].asset->url,
        description
      }`,
    { slug }
  );

  // Since the query might return multiple opportunities with the same slug,
  // we only return the first one. If no opportunities were found, return null.
  return opportunities.length > 0 ? opportunities[0] : null;
}

export async function getLast3Opportunities(): Promise<Opportunity[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="opportunity"] | order(_createdAt desc) [0..2] {
        _id,
        _createdAt,
        name,
        location,
        locationMap,
        area,
        currency,
        requestedFund,
        slug,
        "image": image[0].asset->url,
        description
    }`
  );
}

export async function getBlogslug(slug: string): Promise<Blog> {
  // const client = createClient({

  //     projectId: 'ot0o1c7j',
  //     dataset: 'production',
  //     apiVersion: '2023-03-04'

  // });
  // debugger;
  // console.log(JSON.stringify(client));
  return createClient(clientConfig).fetch(
    groq`*[_type=="blog" && slug.current==$slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image":image.asset->url,
       
        content
    }`,
    { slug }
  );
}
export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
       
    }`
  );
}

export async function getPageSingle(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="page" && slug.current==$slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
      
        content
    }`,
    { slug }
  );
}
