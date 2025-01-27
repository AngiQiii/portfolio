import HeroSectionItems from "./HeroSectionItems";

const HeroSection: React.FC = function () {
  return (
    <div className="relative mb-10">
      <HeroSectionItems />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mobile:w-full">
        <h1 className="flex m-auto w-auto text-5xl bg-primary p-5 tablet:text-3xl mobile:text-2xl mobile:items-center mobile:justify-center">
          Angelique Bonita Pretorius
        </h1>
        <h3 className="inline m-auto w-auto text-center text-xl bg-primary p-5 mobile:text-lg">
          Junior UI / web developer
        </h3>
      </div>
    </div>
  );
};

export default HeroSection;
