export type Project = {
    tags: string[];
    title: string;
    description: string;
    summary: string;
    image: string;
    links?: ProjectLinks;
}

export type LinkType = 'source' | 'video' | 'demo';

export type ProjectLinks = {
    source?: string;
    video?: string;
    demo?: string;
}

export type SidebarLink = {
    label: string;
    hrefTag: string;
}