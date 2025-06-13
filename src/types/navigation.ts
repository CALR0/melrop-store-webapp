export interface SocialLink {
  icon: any;
  href: string;
  label: string;
}

export interface QuickLink {
  name: string;
  href: string;
}

export type { SocialLink as SocialLinkType };
export type { QuickLink as QuickLinkType };