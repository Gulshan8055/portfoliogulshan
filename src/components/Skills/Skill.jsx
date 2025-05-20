import React from "react";
import "./Skill.css";
import { skillsinfo } from "../../Data";
import Tilt from "react-parallax-tilt";
function Skill() {
  return (
    <section
      id="skills"
      className=" py-24 pb-24 px-[12vw] md:px-[7vw] font-sans
      text-white bg- skills-gradient clip-path-custom"
    >
      <div className=" text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Skills</h1>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg fint-semibold">
          A collectiom of my technical skills and experience honed throught
          various projects and experiences
        </p>
      </div>
      <div className="flex flex-wrap gap-1 lg:gap-1 py-10 justify-between">
        {skillsinfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900  backdrop-blur-md px-5 sm:px-10 py-6 sm-py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white  shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-5xl  sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>
            {/* skills items. */}
            <Tilt
              className="    "
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-1  md:grid-cols-3  md:gap-6 sm:gap-5 gap-3 w-full  ">
                {category.skills.map((skill) => (
                  <div
                    className="flex justify-center items-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2"
                    key={skill.name}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-6 sm:w-8  sm:h-8 "
                    />
                    <span className="text-xs sm:text-sm  text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
