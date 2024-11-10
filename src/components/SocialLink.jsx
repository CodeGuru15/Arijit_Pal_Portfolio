import { FaFacebookSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
const SocialLink = () => {
  const links = [
    {
      name: <FaFacebookSquare />,
      link: "https://www.facebook.com/arijit.pal.100?mibextid=ZbWKwL",
    },
    // { name: <FaYoutube />, link: "#" },
    { name: <FaGitAlt />, link: "https://github.com/CodeGuru15" },
    {
      name: <FaLinkedin />,
      link: "https://www.linkedin.com/in/arijit-pal6111/",
    },
  ];
  return (
    <div className="w-full pb-5 ">
      <ul className="flex justify-center gap-5 text-xl text-white">
        {links.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="blank"
              className="p-2 rounded-full hover:bg-white hover:duration-300 hover:text-slate-950"
            >
              {item.name}
            </a>
          );
        })}
      </ul>
    </div>
  );
};
export default SocialLink;
