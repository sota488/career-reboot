export type NavigationItem = {
  label: string;
  href: string;
};

export const globalNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Columns", href: "/columns" },
  { label: "About", href: "/about" },
  { label: "Brand Book", href: "/brand" },
];
