import clientConfig from "@/config/client-config";
import { Project } from "@/sanity/types/Project";
import { Page } from "@/sanity/types/page";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    // const client = createClient({

    //     projectId: 'ot0o1c7j',
    //     dataset: 'production',
    //     apiVersion: '2023-03-04'

    // });
    // debugger;
    // console.log(JSON.stringify(client));
    return createClient(clientConfig).fetch(
        groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image":image.asset->url,
        url,
        content
    }`


    )
}

export async function getProjectsslug(slug: string): Promise<Project> {
    // const client = createClient({

    //     projectId: 'ot0o1c7j',
    //     dataset: 'production',
    //     apiVersion: '2023-03-04'

    // });
    // debugger;
    // console.log(JSON.stringify(client));
    return createClient(clientConfig).fetch(
        groq`*[_type=="project" && slug.current==$slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image":image.asset->url,
        url,
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