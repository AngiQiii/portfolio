import HeroSectionItem from "./HeroSectionItem";

const HeroSectionItems: React.FC = function () {
  return (
    <ul className="pt-20 mb-20">
      <HeroSectionItem dots={10} />
      <HeroSectionItem dots={20} />
      <HeroSectionItem dots={30} />
      <HeroSectionItem dots={40} />
      <HeroSectionItem dots={50} />
    </ul>
  );
};

export default HeroSectionItems;
