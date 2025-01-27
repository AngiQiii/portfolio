type isEvenType = {
  isEven: boolean;
};

const HeroSectionItem: React.FC<isEvenType> = function (props) {
  const heroSectionDetail: unknown[] = Array.apply(null, Array(121));
  const styles = !props.isEven
    ? "even:bg-emerald-500/50 odd:inherit"
    : "even:inherit odd:bg-emerald-500";

  return (
    <div className="flex items-center gap-2 mb-2">
      {heroSectionDetail.map((_, index) => (
        <li
          key={index}
          className={`${styles} list-none min-w-2 h-2 rounded-full`}
        ></li>
      ))}
    </div>
  );
};

export default HeroSectionItem;
