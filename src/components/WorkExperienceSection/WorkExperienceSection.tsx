const WorkExperienceSection: React.FC = function () {
  return (
    <div
      id="experience"
      className="mb-10 relative h-[26rem] text-center mobile:h-[15rem]"
    >
      <div className="bg-tertiary w-60 h-60 absolute top-0 left-0 mobile:w-40 mobile:h-40">
        <div className="bg-primary w-20 h-20 absolute top-20 -left-10 shadow-md shadow-primary mobile:top-10 mobile:-left-15"></div>
        <div className="bg-tertiary w-60 h-60 absolute top-1/2 left-1/2 shadow-md shadow-primary mobile:w-40 mobile:h-40">
          <div className="bg-primary w-20 h-20 absolute top-20 -right-10 shadow-md shadow-primary mobile:top-10 mobile:-right-15"></div>
          <div className="bg-tertiary w-60 h-40 absolute top-1/2 -left-1/2 shadow-md shadow-primary mobile:w-40 mobile:h-20">
            <div className="bg-primary w-20 h-20 absolute -bottom-10 left-20 shadow-md shadow-primary mobile:-bottom-15 mobile:left-10"></div>
          </div>
        </div>
      </div>
      <div className="py-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tablet:bg-primary tablet:shadow-md tablet:shadow-primary tablet:px-5">
        <h2 className="text-2xl mb-5 ">Work Experience</h2>
        <p>
          Made a car service website{" "}
          <a
            href="https://www.rnrautomotive.co.za"
            target="_blank"
            className="underline cursor-pointer"
          >
            https://www.rnrautomotive.co.za
          </a>
        </p>
        <p className="mb-[30px]">de a 21st birthday invite</p>
        <h2 className="text-2xl mb-5 ">Other</h2>
        <p>
          Created a CV with Next.js and then used Puppeteer to convert it into a
          PDF file.
        </p>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
