export type skillsDataType = {
  heading: string;
  skills: { name: string; rating: number }[];
};

export const SkillsData: skillsDataType[] = [
  {
    heading: "Personal",
    skills: [
      {
        name: "Adaptability",
        rating: 4,
      },
      {
        name: "Continuous Learning",
        rating: 5,
      },
      {
        name: "Teamwork",
        rating: 4,
      },
      {
        name: "Time Management",
        rating: 4,
      },
      {
        name: "Creativity",
        rating: 3,
      },
      {
        name: "Dependability",
        rating: 4,
      },
    ],
  },
  {
    heading: "Programming",
    skills: [
      {
        name: "HTML",
        rating: 4,
      },
      {
        name: "CSS",
        rating: 4,
      },
      {
        name: "JavaScript",
        rating: 4,
      },
      {
        name: "Node.js",
        rating: 3,
      },
      {
        name: "Firebase",
        rating: 3,
      },
      {
        name: "React",
        rating: 4,
      },
      {
        name: "Tailwind",
        rating: 3,
      },
      {
        name: "TypeScript",
        rating: 3,
      },
      {
        name: "Next.js",
        rating: 4,
      },
      {
        name: "API",
        rating: 3,
      },
      {
        name: "WordPress",
        rating: 3,
      },
    ],
  },
  {
    heading: "Software",
    skills: [
      {
        name: "Github",
        rating: 2,
      },
      {
        name: "Clickup",
        rating: 3,
      },
      {
        name: "Visual Studio Code",
        rating: 4,
      },
    ],
  },
];
