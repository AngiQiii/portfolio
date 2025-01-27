import { SkillsData, skillsDataType } from "./SkillsData";
import SkillsStarRating from "./SkillsStarRating";

const SkillsItem: React.FC = function () {
  return (
    <>
      {SkillsData.map((skillData) => (
        <div key={skillData.heading} className="mb-5">
          <h3 className="text-center mb-5 bg-tertiary w-40 m-auto">
            {skillData.heading}
          </h3>
          <div className="w-full max-w-[600px]  mx-auto tablet:max-w-[300px] mobile:max-w-[250px]">
            <ul>
              {skillData.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between tablet:text-base"
                >
                  {skill.name}
                  <SkillsStarRating rating={skill.rating} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsItem;
