import { useState } from "react";
import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <div className="fixed top-0 right-0 z-50 flex justify-end overflow-x-hidden text-gold md:text-lg">
      <div className="fixed justify-center hidden w-full p-2 duration-300 border-b border-b-gold hover:shadow-md bg-slate-950 hover:shadow-gold sm:flex">
        <ul className="flex gap-5 text-center">
          {navItems.map((item, index) => {
            return (
              <li key={index} className=" hover:text-white">
                <AnchorLink href={item.link}>
                  <button className="p-1">{item.name}</button>
                </AnchorLink>
              </li>
            );
          })}
        </ul>
      </div>
      {toggle ? (
        <>
          <div className="fixed animate-[slidedown_0.2s_linear] right-0 flex justify-center w-screen p-2 border-b border-b-gold hover:shadow-md bg-slate-950 hover:shadow-gold ">
            <ul className="flex flex-col text-center">
              {navItems.map((item, index) => {
                return (
                  <li key={index} className=" hover:text-white">
                    <AnchorLink href={item.link}>
                      <button onClick={handleToggle} className="">
                        {item.name}
                      </button>
                    </AnchorLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <button
          className="p-2 text-2xl animate-pulse text-gold sm:hidden hover:text-white"
          onClick={handleToggle}
        >
          <IoMenu />
        </button>
      )}
    </div>
  );
};
export default Nav;
