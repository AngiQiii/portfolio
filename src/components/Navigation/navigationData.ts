export type NavigationType = {
  name: string;
  href: string;
  isLast: boolean;
  onClick?: () => void;
};

export type ClassType = {
  className: string;
};

export const NavigationData: NavigationType[] = [
  {
    name: "Home",
    href: "/",
    isLast: false,
  },
  {
    name: "About",
    href: "/#about",
    isLast: false,
  },
  {
    name: "Work experience",
    href: "/#experience",
    isLast: false,
  },
  {
    name: "Education",
    href: "/#education",
    isLast: false,
  },
  {
    name: "Skills",
    href: "/#skills",
    isLast: false,
  },
  {
    name: "Contact",
    href: "/#contact",
    isLast: false,
  },
  {
    name: "Projects",
    href: "/projects",
    isLast: true,
  },
];
