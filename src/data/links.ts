export type LinkItem = {
  href: string;
  title: string;
  label?: string;
  featured?: boolean;
};

export const links: LinkItem[] = [
  {
    href: "https://meo-mai-moi.com",
    title: "Meo Mai Moi",
    label: "Our pets management platform",
    featured: true
  },
  {
    href: "https://patreon.com/catarchy",
    title: "Become a Patron"
  },
  {
    href: "https://boosty.to/catarchy",
    title: "Boosty"
  },
  {
    href: "https://catarchy.space/#donate",
    title: "Donate"
  },
  {
    href: "https://catarchy.space/#visit",
    title: "Visit"
  },
  {
    href: "https://www.youtube.com/catarchy",
    title: "YouTube"
  }
];
