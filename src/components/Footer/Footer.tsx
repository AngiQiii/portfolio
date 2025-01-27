import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer: React.FC = function () {
  return (
    <div className="bg-secondary p-5 flex items-center justify-center gap-5">
      <a href="https://github.com/AngiQiii" target="_black">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/angelique-pretorius-653091206/"
        target="_black"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:angeliquebonitawindt20010507@gmail.com" target="_black">
        <MdOutlineEmail />
      </a>
    </div>
  );
};

export default Footer;
