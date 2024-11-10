import { TypeAnimation } from "react-type-animation";
import GoldBar from "./GoldBar";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white/80 bg-slate-950">
      <GoldBar />
      <div className="flex flex-col justify-center h-full">
        <div className="flex z-30 w-full justify-center h-[40%] items-center">
          <img
            src="profilePic.jpg"
            alt="Profile Pic"
            className="h-40 rounded-full shadow-custom shadow-gold sm:h-64"
          />
        </div>
        <div className="z-30 flex flex-col gap-3 p-5 text-2xl font-bold sm:text-5xl place-items-center sm:flex-row sm:justify-center">
          <span>Hi, I am</span>
          <span className="tracking-wider text-gold">ARIJIT PAL</span>
        </div>
        <div className="z-30 flex flex-col items-center justify-center p-5 text-xl font-semibold sm:text-4xl">
          <span className="text-gold">
            <TypeAnimation
              sequence={[
                "Web",
                2000,
                "Full Stack",
                2000,
                "Frontend",
                2000,
                "Backend",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </span>
          <span>Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
