const AboutSection: React.FC = function () {
  return (
    <div
      id="about"
      className="bg-lime-300 w-full grid grid-cols-2 py-10 px-20 scroll-smooth mb-10"
    >
      <div className="bg-lime-950 w-96 h-96"></div>
      <div className="text-center m-auto">
        <div className="text-3xl mb-5">Hello</div>
        <p className="text-wrap ">
          I'm Angelique Pretorius, a passionate Junior UI/Front-End Developer
          with a keen eye for design and a love for creating seamless user
          experiences. With a solid foundation in HTML, CSS, and JavaScript,
          along with experience in React and TypeScript, I thrive on turning
          complex problems into simple, beautiful, and intuitive interfaces. I
          am dedicated to continuous learning and staying up-to-date with the
          latest industry trends and best practices. My goal is to build
          responsive, accessible, and user-friendly applications that not only
          meet the needs of users but also exceed their expectations. Feel free
          to explore my portfolio to see some of the projects I've worked on.
          I'm excited to connect and collaborate on exciting new challenges!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
