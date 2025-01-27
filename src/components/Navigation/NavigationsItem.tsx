import { NavigationType, ClassType } from "./NavigationData";

type NavigationItemProps = NavigationType &
  ClassType & {
    onClick?: () => void; // Add an optional onClick prop
  };

const NavigationItem: React.FC<NavigationType & ClassType> = function (props) {
  return (
    <li
      className={`${props.className} last:bg-tertiary py-2 px-4 last:rounded-full`}
    >
      <a
        className={props.isLast ? "bg-tertiary" : "bg-inherit"}
        href={props.href}
        onClick={props.onClick}
      >
        {props.name}
      </a>
    </li>
  );
};

export default NavigationItem;
