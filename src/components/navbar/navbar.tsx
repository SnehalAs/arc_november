import { IoIosArrowDown } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const topLinks = ["Jobpreneur", "Skillup", "TechFund"];
  const bottomLinks = [
    { text: "Explore Services", icon: <IoIosArrowDown /> },
    { text: "Resources", icon: <IoIosArrowDown /> },
    { text: "Community", icon: <IoIosArrowDown /> },
    { text: "About" },
  ];

  return (
    <header>
     
      <div className="header-top">
        {topLinks.map((link) => (
          <button key={link}>
            {link} <RxArrowTopRight />
          </button>
        ))}
      </div>

 
      <div className="horizontal-line"></div>

      
      <div className="header-bottom">
        <img
          src="src/components/navbar/logo.png"
          alt="Hubnex Logo"
          className="header-bottom-logo"
        />

        <nav className="header-bottom-links">
          {bottomLinks.map(({ text, icon }) => (
            <a key={text} href="#">
              {text} {icon}
            </a>
          ))}
        </nav>

        <div className="header-bottom-btns">
          <button className="login">Login</button>
          <button className="Blue">
            Connect Sales <FaArrowRight/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
