import { StaticImageData } from "next/image";

export interface Skill {
  name: string;
  percentage: string;
}

export type Skills = Skill[];

export interface Project {
  image: StaticImageData;
  hrefImage: string;
  title: string;
  description: string;
  url: string;
}

export type Projects = Project[];

export interface User {
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
}
