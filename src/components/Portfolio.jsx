import { LiaExternalLinkAltSolid } from "react-icons/lia";
const Portfolio = () => {
  const projects = [
    {
      name: "Website with AI",
      details: "Internship project with personalized AI model",
      link: "https://fetchrocket.com/",
    },
    {
      name: "To Do App",
      details: "Project with CRUD operation",
      link: "https://codeguru15.github.io/ToDo-App-2024/",
    },
    {
      name: "Portfolio",
      details: "Personalized portfolio website",
      link: "https://codeguru15.github.io/portfolio_task/",
    },
  ];
  return (
    <div className="min-h-screen flex items-center bg-[url('./src/assets/hex.png')] overflow-hidden bg-fixed  text-white/80 bg-cover bg-no-repeat">
      <div className="flex flex-col items-center w-full min-h-screen p-5 bg-opacity-70 bg-slate-950 place-content-center">
        <div className="p-3 text-2xl font-semibold tracking-wider sm:text-3xl">
          MY <span className="text-gold ">PORTFOLIO</span>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 text-xs sm:text-base">
          {projects.map((item, index) => {
            return (
              <a
                href={item.link}
                target="blank"
                key={index}
                className="flex flex-col items-center justify-around w-48 px-3 py-1 text-center border rounded-md hover:shadow-custom hover:duration-200 hover:shadow-gold bg-slate-950 min-h-24 border-gold sm:w-72 sm:text-xl"
              >
                <div className="py-1 font-bold text-gold">{item.name}</div>
                <div className="p-1 sm:text-base text-white/70 text-clip">
                  {item.details}
                </div>
                <span className="flex text-xl text-gold">
                  <LiaExternalLinkAltSolid />
                </span>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
