import { Link } from "react-router-dom";
import { MENU } from "../../lib/constans";
import { MenuItem } from "../../types";

const Menu = () => {
  return (
    <nav className="flex items-center">
      <ul className="text-sm flex items-center">
        {MENU.map((item: MenuItem) => (
          <li
            key={item.title}
            className="group flex flex-col relative p-4  bg-transparent"
          >
            <Link to={item.path} className={"text-[#18181A] text-base"}>
              {item.title}
            </Link>
            <span className="w-[30%] h-[2px] absolute top-11 left-1/2 transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-custom bg-black rounded-full group-hover:scale-100" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
