type HeroSectionItemProps = {
  dots: number;
};

const HeroSectionItem: React.FC<HeroSectionItemProps> = function (props) {
  const heroSectionDetail: unknown[] = Array.apply(null, Array(props.dots));

  return (
    <div className="flex items-center gap-2 mb-5">
      {heroSectionDetail.map(() => (
        <li className="bg-lime-100 list-none w-2 h-2 rounded-full"></li>
      ))}
    </div>
  );
};

export default HeroSectionItem;
