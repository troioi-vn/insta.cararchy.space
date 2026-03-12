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
    href: "https://catarchy.space/how-to-donate/",
    title: "Donate"
  },
  {
    href: "https://catarchy.space/booking/",
    title: "Booking"
  },
  {
    href: "https://www.youtube.com/catarchy",
    title: "YouTube"
  },
  {
    href: "https://maps.app.goo.gl/fqPvyLtoZ1qeH4Pv6",
    title: "Google Maps"
  }
];
