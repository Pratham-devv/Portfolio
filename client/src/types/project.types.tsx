export interface ProjectTypes{
    title: string;
    desc: string;
    tech: string[];
    link: string;
    icon: Element;
    size: string;
    color: string;
}
export interface ProjectCardProps {
  item: ProjectTypes;
  side: "left" | "right";
}