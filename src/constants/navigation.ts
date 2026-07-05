export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const globalNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Columns", href: "/columns" },
  { label: "About", href: "/about" },
  { label: "Brand Book", href: "/brand" },
];

export const headerPrimaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Columns", href: "/columns" },
];

export const headerBrandNavigation: NavigationGroup = {
  label: "Brand",
  items: [
    { label: "About", href: "/about" },
    { label: "Brand Book", href: "/brand" },
  ],
};
