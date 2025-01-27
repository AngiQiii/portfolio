import HeroSectionItem from "./HeroSectionItem";

const HeroSectionItems: React.FC = function () {
  const heroSectionItem: unknown[] = Array.apply(null, Array(25));
  return (
    <ul className="overflow-hidden">
      {heroSectionItem.map((_, index) => (
        <HeroSectionItem isEven={index % 2 === 0} />
      ))}
    </ul>
  );
};

export default HeroSectionItems;
