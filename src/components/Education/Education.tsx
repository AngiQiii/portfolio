import { TbFileCertificate } from "react-icons/tb";

const Education: React.FC = function () {
  return (
    <div
      id="education"
      className="mb-10 bg-primary w-1/2 m-auto py-5 mobile:w-full"
    >
      <h2 className="text-2xl mb-5 text-center">Education</h2>
      <div className="mb-10 mobile:mb-5">
        <h3 className="text-xl text-center bg-tertiary tracking-widest mb-5 mobile:w-full">
          Matric 2019 - Hoërskool Goudrif
        </h3>
        <div className="flex items-center justify-evenly mobile:flex-col">
          <ul className="mobile:w-full mobile:text-center">
            <li>Mathematics</li>
            <li>Afrikaans Home Language</li>
            <li>English First Additional Language</li>
            <li>Life Orientation</li>
          </ul>
          <ul className="mobile:w-full mobile:text-center">
            <li>Consumer Studies</li>
            <li>Life Sciences</li>
            <li>Tourism</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl text-center mb-5 bg-tertiary tracking-widest">
          Udemy
        </h3>
        <div className="flex items-start justify-evenly">
          <ul>
            <li className="flex items-center gap-[10px]">
              <a
                href="https://www.udemy.com/certificate/UC-af9cdae5-62b3-4a20-9dc0-0371abac60e5/"
                target="_blank"
              >
                <TbFileCertificate />
              </a>
              HTML and CSS - 2022
            </li>
            <li className="flex items-center gap-[10px]">
              <a
                href="https://www.udemy.com/certificate/UC-b0a205b1-2a02-4c91-99f3-9f0011ae2a56/"
                target="_blank"
              >
                <TbFileCertificate />
              </a>
              JavaScript - 2023
            </li>
            <li className="flex items-center gap-[10px]">
              <a
                href="https://www.udemy.com/certificate/UC-164daaad-b780-4a68-b2b3-4830e3da437a/"
                target="_blank"
              >
                <TbFileCertificate />
              </a>
              React - 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
