import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactElement } from "react";

type SkillsDataTypes = {
  name: string;
  image: ReactElement;
};

export const skillsData: SkillsDataTypes[] = [
  {
    name: "HTML",
    image: AiOutlineHtml5({ size: 40 }),
  },
  {
    name: "JavaScript",
    image: IoLogoJavascript({ size: 40 }),
  },
  {
    name: "CSS",
    image: IoLogoCss3({ size: 40 }),
  },
  {
    name: "React",
    image: FaReact({ size: 40 }),
  },
  {
    name: "NextJS",
    image: RiNextjsLine({ size: 40 }),
  },
  {
    name: "TypeScript",
    image: TbBrandTypescript({ size: 40 }),
  },
  {
    name: "Tailwind",
    image: RiTailwindCssFill({ size: 40 }),
  },
];

type CertificateTypes = {
  name: string;
  href: string;
};

export const certificates: CertificateTypes[] = [
  {
    name: "HTML and CSS certificate",
    href: "/documents/html_css.pdf",
  },
  {
    name: "JavaScript certificatee",
    href: "/documents/javaScript.pdf",
  },
  {
    name: "React certificate",
    href: "/documents/React.pdf",
  },
];
