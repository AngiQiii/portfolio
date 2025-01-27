import SkillsDecorItem from "./SkillsDecorItem";
import { dotsRowsTypes } from "./Skills";

export type dotsType = {
  dots: number;
};

const SkillsDecorItems: React.FC<dotsRowsTypes> = function (props) {
  const skillsDecor: unknown[] = Array.apply(null, Array(props.rows));
  return (
    <ul className={`absolute top-0 right-0 ${props.className}`}>
      {skillsDecor.map((_, index) => (
        <SkillsDecorItem isEven={index % 2 === 0} dots={props.dots} />
      ))}
    </ul>
  );
};

export default SkillsDecorItems;
