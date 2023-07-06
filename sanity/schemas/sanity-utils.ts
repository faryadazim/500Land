import clientConfig from "@/config/client-config";
import { Blog } from "@/sanity/types/blog";
import { Page } from "@/sanity/types/page";
import { createClient, groq } from "next-sanity";

export async function getBlogs(): Promise<Blog[]> {
    // const client = createClient({

    //     projectId: 'ot0o1c7j',
    //     dataset: 'production',
    //     apiVersion: '2023-03-04'

    // });
    // 
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


    )
}

export async function getBlogslug(slug: string): Promise<Blog> {
    // const client = createClient({

    //     projectId: 'ot0o1c7j',
    //     dataset: 'production',
    //     apiVersion: '2023-03-04'

    // });
    // 
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

    )
}
export async function getPages(): Promise<Page[]> {
  
    return createClient(clientConfig).fetch(
        groq`*[_type=="page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
       
    }`


    )
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

    )
}