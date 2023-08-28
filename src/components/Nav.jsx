import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="  w-full items-center padding-x py-8 z-10 absolute padding-l ">
      <nav className=" max-container justify-between flex gap-40 items-center ">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={150}
            height={40}
            className=""
          />
        </a>
        <div className="md:flex flex-1 hidden">
          <ul className="flex flex-1 justify-evenly w-full items-center text-slate-gray font-montserrat text-lg">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden block">
          <img
            src={hamburger}
            alt="menu"
            width={24}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
