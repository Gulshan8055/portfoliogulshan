import React from "react";
import TypingEffect from "react-typed.ts";
import Tilt from "react-parallax-tilt";
import gulshan from "../../assets/myimage/gulshan.png";
function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px[30vw] font-sans mt-16 md:mt-20 lg:mt-0 lg:py-[30px]"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side about page */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm-text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            HI, I am
          </h1>
          <h2 className=" text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Gulshan kumar
          </h2>
          {/* skills  heading typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl  font-semibold mb-4 text-[#8245ec] leading-tight  ">
            <span className="text-white">I am a </span>
            <TypingEffect
              strings={[
                "Web Developer",
                "frontend Developer",
                "UI/UX  Developer ",
                "Fullstack  Developer",
                "Programmer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => {
                <span className="text-[#8245ec]">{cursor}</span>;
              }}
            ></TypingEffect>
          </h3>
          {/* About me paragraph */}
          <p className=" text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over academic Experience in
            building scalable web application, skilled in both front-end and
            back-end development. i am specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            effective solutions.
          </p>
          <button>
            <a
              href="https://drive.google.com/file/d/1bsvVITjljBl7FLrXf1QmGQGkjGzuhG69/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform"
              style={{
                background: "linear-gradient(90deg, #8245ec #a855f7)",
                boxShadow: "0 0 2pc #8245ec,0 0 2px #8245ec, 0 0 40px #8245ec ",
              }}
            >
              DOWNLOAD CV
            </a>
          </button>
        </div>
        {/* right side about page */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Tilt
            className="w-70  h-70 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]    border-4 border-purple-700 rounded-full  "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={gulshan}
              alt="gulshan"
              className=" w-70 h-70 md:h-[390px] md:w-[400px] sm:w-[400px] sm:h-[290px]  rounded-full  md:object-cover  object-contain drop-shadow-[0_20px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
