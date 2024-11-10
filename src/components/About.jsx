import { useState } from "react";
import myResume from "../assets/Resume_Arijit_Pal.pdf";

const About = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };
  return (
    <div className="flex flex-col h-screen bg-fixed overflow-hidden tracking-wide bg-cover bg-[url('./about.jpg')] text-white">
      <div className="flex flex-col h-full bg-slate-950 bg-opacity-90 place-content-center">
        <div className="flex flex-col p-5 place-content-center">
          <div className="flex p-2 text-2xl font-bold sm:text-3xl md:text-5xl">
            <p>About</p>
            <p className="pl-2 text-gold">Me</p>
          </div>
          <div className="p-2 font-semibold tracking-wide sm:text-xl md:text-2xl">
            Hi, I,m Here To Build Your Dream Project !
          </div>
          <div className="p-2 text-sm tracking-wider md:font-medium lg:text-xl">
            I am a passionate and self-motivated Full Stack Web Developer,
            proficient in React Js, Node Js, MySql and other technologies.
            Driven by a love for problem-solving and a thirst for continuous
            learning, I'm eager to join a collaborative team and grow my skills
            while contributing to real-world projects.
          </div>

          {more ? (
            <>
              <button
                onClick={handleMore}
                className="w-1/5 pl-2 text-start hover:underline hover:underline-offset-2"
              >
                Read Less
              </button>
              <div className="p-2 text-sm text-justify md:font-medium lg:text-xl">
                <p className="py-2 text-2xl font-bold text-left">
                  Creating Impressive web experiences, pixel by pixel
                </p>
                <p className="tracking-wider">
                  I love to turn ideas into reality. With a keen eye for design
                  and a deep understanding of code, I create innovative web
                  applications that are both beautiful and functional. Let's
                  build something amazing together.
                </p>
              </div>
            </>
          ) : (
            <button
              onClick={handleMore}
              className="hidden w-1/5 pl-2 text-start sm:block hover:underline hover:underline-offset-2"
            >
              Read More ...
            </button>
          )}
        </div>
        <a
          href={myResume}
          target="blank"
          download="Resume_Arijit_Pal.pdf"
          className="w-1/3 p-2 text-xs text-center ease-in-out border rounded-md border-gold text-gold hover:duration-300 sm:text-lg sm:w-1/4 md:w-1/5 hover:bg-gold hover:text-slate-950 ml-7"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
