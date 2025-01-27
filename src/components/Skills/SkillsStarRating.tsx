import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { starRatingTypes } from "./Skills";

const SkillsStarRating: React.FC<starRatingTypes> = function (props) {
  const totalStars = 5;
  const filledStars = Array(props.rating).fill(true);
  const emptyStars = Array(totalStars - props.rating).fill(false);
  const starRating = [...filledStars, ...emptyStars];

  return (
    <div className="flex items-center justify-start">
      {starRating.map((isFilled, index) =>
        isFilled ? (
          <IoIosStar key={index} fill="#10b981" />
        ) : (
          <IoIosStar key={index} fill="#10B98125" />
        )
      )}
    </div>
  );
};

export default SkillsStarRating;
