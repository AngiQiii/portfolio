import birthdayInvite from "../../../public/Images/birthday_invite.png";
import carServiceWebsite from "../../../public/Images/car_service_website.png";
import cardPage from "../../../public/Images/Card_page-0001.jpg";
import coursePracticeWebsite from "../../../public/Images/course_practice_website.png";
import coursePracticeWebsite2 from "../../../public/Images/course_practice_website2.png";
import golfwebsite from "../../../public/Images/golf_website.png";
import wordCounterWebsite from "../../../public/Images/word_counter_course_challenge.png";
import recipeBookWebsite from "../../../public/Images/RecipeBook_page-0001.jpg";

export type workSectionTypes = {
  url: string;
  text: string;
};

export const workSectionData: workSectionTypes[] = [
  {
    url: birthdayInvite.src,
    text: "Screenshot of a birthday invate I made",
  },
  {
    url: carServiceWebsite.src,
    text: "Screenshot of a cra service website I made for a client",
  },
  {
    url: cardPage.src,
    text: "Screenshot of Card component made from my course challenges",
  },
  {
    url: coursePracticeWebsite.src,
    text: "Screenshot of Website made from my course challenges",
  },
  {
    url: coursePracticeWebsite2.src,
    text: "Screenshot of Website made from my course challenges",
  },
  {
    url: golfwebsite.src,
    text: "Screenshot of Golf website I made",
  },
  {
    url: wordCounterWebsite.src,
    text: "Screenshot of word counter website made from course challenges",
  },
  {
    url: recipeBookWebsite.src,
    text: "Screenshot of a recipebook I made when first started coding",
  },
];
