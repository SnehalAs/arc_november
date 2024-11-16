/** @format */

import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        {/* Top navigation section */}
        <div className="header-top">
          <button>
            Jobpreneur <RxArrowTopRight />
          </button>
          <button>
            Skillup <RxArrowTopRight />
          </button>
          <button>
            TechFund <RxArrowTopRight />
          </button>
        </div>

        {/* Horizontal divider */}
        <div className="horizontal-line"></div>

        {/* Bottom navigation section */}
        <div className="header-bottom">
          <div className="header-bottom-logo">
            <img src="src/components/navbar/logo.png" alt="Hubnex Logo" />
          </div>

          <div className="header-bottom-links">
            <a href="#">
              Explore Services <IoIosArrowDown />
            </a>
            <a href="#">
              Resources <IoIosArrowDown />
            </a>
            <a href="#">
              Community <IoIosArrowDown />
            </a>
            <a href="#">About</a>
          </div>

          <div className="header-bottom-btns">
            <button className="login">Login</button>
            <button className="Blue">
              Connect Sales <FaArrowRightLong />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
