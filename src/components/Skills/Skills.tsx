import { skillsData, certificates } from "./SkillsData";

const Skills: React.FC = function () {
  return (
    <div id="skills" className=" w-full h-auto mb-10">
      <h2 className="text-center text-3xl mb-5">My Skills</h2>
      <div className="w-full h-auto flex items-center justify-evenly mb-10">
        {skillsData.map((skill) => (
          <div className="bg-lime-300 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-sm shadow-slate-700">
            <div>{skill.image}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-evenly text-center">
        {certificates.map((certificate) => (
          <a
            className="bg-lime-300 mb-2 w-60 py-3 px-5 shadow-sm shadow-slate-700"
            target="_black"
            key={certificate.name}
            href={certificate.href}
          >
            {certificate.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
