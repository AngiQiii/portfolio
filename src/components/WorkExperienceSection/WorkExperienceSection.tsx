const WorkExperienceSection: React.FC = function () {
  return (
    <div id="experience" className="text-center">
      <div className="w-full h-[400px] tablet:h-[350px] mobile:h-[250px]">
        <div className="bg-tertiary relative w-60 h-60 mobile:w-40 mobile:h-40">
          <div className="bg-primary w-20 h-20 absolute top-20 -left-10 shadow-md shadow-primary mobile:top-10 mobile:-left-15"></div>
          <div className="bg-tertiary w-60 h-60 absolute top-1/2 left-1/2 shadow-md shadow-primary mobile:w-40 mobile:h-40">
            <div className="bg-primary w-20 h-20 absolute top-20 -right-10 shadow-md shadow-primary mobile:top-10 mobile:-right-15"></div>
            <div className="bg-tertiary w-60 h-40 absolute top-1/2 -left-1/2 shadow-md shadow-primary mobile:w-40 mobile:h-20">
              <div className="bg-primary w-20 h-20 absolute -bottom-10 left-20 shadow-md shadow-primary mobile:-bottom-15 mobile:left-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 tablet:bg-primary tablet:shadow-md tablet:shadow-primary">
        <h2 className="text-2xl mb-5 ">Work Experience</h2>
        <p>
          Build and designed a car service website{" "}
          <a
            href="https://www.rnrautomotive.co.za"
            target="_blank"
            className="underline cursor-pointer hover:text-green-300"
          >
            https://www.rnrautomotive.co.za
          </a>
        </p>
        <p className="mb-[30px]">
          Build and designed a 21st birthday invite{" "}
          <a
            href="https://jeanire-21st-birthday.netlify.app/"
            target="_blank"
            className="underline cursor-pointer hover:text-green-300"
          >
            https://jeanire-21st-birthday.netlify.app/
          </a>
        </p>
        <p className="mb-[30px]">
          Build and designed a cigar website for a company.{" "}
          <a
            href="https://www.checigarros.co.za/"
            target="_blank"
            className="underline cursor-pointer hover:text-green-300"
          >
            https://www.checigarros.co.za/
          </a>
        </p>
        <h2 className="text-2xl mb-5">Other</h2>
        <p>
          Created a CV with Next.js and then used Puppeteer to convert it into a
          PDF file.
        </p>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
