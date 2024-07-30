import { workSectionData, workSectionTypes } from "./MyWorkSectionData";

const MyWorkSection: React.FC<workSectionTypes> = function (props) {
  return (
    <div id="my-work" className="bg-primary py-10 mb-10">
      <h2 className="text-center text-3xl mb-5">My Work</h2>
      <div className="grid grid-cols-4 gap-10 mx-24">
        {workSectionData.map((workSection) => (
          <a href="">
            <img
              key={workSection.text}
              src={workSection.url}
              alt={workSection.text}
              className="grayscale"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyWorkSection;
