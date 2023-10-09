import { useState } from "react";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";
import "../index.css";
export const navLinks = [
  {
    title: "Home",
  },

  {
    id: "#TypesHealth",
    title: "Types of Mental Health",
  },
  {
    id: "#strategies",
    title: "Strategies",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <>
        <div className=" w-full overflow-hidden bg-primary">
          <div className={`sm:px-16 px-6 flex justify-center items-center `}>
            <div className={`xl:max-w-[1280px] w-full `}>
              <nav className="w-full flex py-6 justify-between items-center navbar ">
                {/* Logo */}
                <h1 className="text-3xl text-white">HealthHive</h1>

                {/* Desktop Navigation */}
                <ul className="list-none sm:flex hidden  justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-dimWhite"
                      } ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                  <li className="font-poppins font-normal ml-2 cursor-pointer text-[16px]">
                    <Link to="/chat-menu">Talk With Profesional</Link>
                  </li>
                </ul>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center ">
                  <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                  />

                  {/* Sidebar */}
                  <div
                    className={`${
                      !toggle
                        ? "animate-slide-rotate-ver-l-bck hidden "
                        : "flex animate-slide-rotate-ver-l-bck-masuk "
                    } p-6  bg-black-gradient absolute z-90  top-20 right-0 bottom-0 bg-[#8418ff]  min-w-[140px] rounded-xl `}
                  >
                    <ul>
                      <li class="mb-1">
                        {navLinks.map((nav, index) => (
                          <a
                            class="block toggleDropdownNavbar p-4  font-bold  font-primary text-xl text-[#000] rounded "
                            href={nav.id}
                          >
                            <div class="flex items-center">
                              {nav.title}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                                  clip-rule="evenodd"
                                />{" "}
                              </svg>
                            </div>
                          </a>
                        ))}
                      </li>
                      <li class="mb-1">
                        <a
                          class="block toggleDropdownNavbar p-4  font-bold  font-primary text-xl text-[#000] rounded "
                          href="/chat-menu"
                        >
                          <div class="flex items-center">
                            talk profesional
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-6 h-6"
                            >
                              {" "}
                              <path
                                fill-rule="evenodd"
                                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                                clip-rule="evenodd"
                              />{" "}
                            </svg>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
