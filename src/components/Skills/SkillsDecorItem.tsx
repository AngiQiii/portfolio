import { dotsType } from "./SkillsDecorItems";

type isEvenType = {
  isEven: boolean;
};

const SkillsDecorItem: React.FC<dotsType & isEvenType> = function (props) {
  const skillsDecor: unknown[] = Array.apply(null, Array(props.dots));

  const styles = !props.isEven
    ? "even:bg-tertiary/50 odd:bg-primary"
    : "even:bg-primary odd:bg-tertiary";

  return (
    <div className="flex items-center gap-2 mb-2">
      {skillsDecor.map((_, index) => (
        <li
          key={index}
          className={`${styles} list-none w-2 h-2 rounded-full`}
        ></li>
      ))}
    </div>
  );
};

export default SkillsDecorItem;
