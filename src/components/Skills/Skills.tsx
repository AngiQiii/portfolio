import SkillsDecorItems from "./SkillsDecorItems";
import SkillsItem from "./SkillsItem";

export type starRatingTypes = {
  rating: number;
};

export type dotsRowsTypes = {
  dots: number;
  rows: number;
  className: string;
};

const Skills: React.FC = function () {
  return (
    <div className="bg-secondary flex items-center justify-center">
      <SkillsDecorItems
        dots={3}
        rows={51}
        className="left-0 !relative mobile:hidden"
      />
      <div id="skills" className="pb-5 w-full">
        <h2 className="text-2xl text-center py-3">Skills</h2>
        <SkillsItem />
      </div>
      <SkillsDecorItems
        dots={7}
        rows={51}
        className="!relative mobile:hidden"
      />
    </div>
  );
};

export default Skills;
