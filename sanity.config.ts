import { defineConfig } from  'sanity';
import {deskTool} from 'sanity/desk';
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';
import { visionTool } from '@sanity/vision';
// import project from "./sanity/schemas/project-schema";
export default defineConfig({
    title: 'Personel Site',

  projectId: '8v08ddav',
  dataset: 'production',
  apiVersion:'2023-03-04',
  basePath:"/admin",
  
  plugins: [deskTool(),  visionTool()],
  schema:{types: schemas}
})