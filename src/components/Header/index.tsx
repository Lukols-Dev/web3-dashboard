import Container from "../ui/container";
import Menu from "./menu";
import Logo from "./logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-transparent absolute top-0 z-10 ">
      <Container>
        <div className="flex justify-between py-4">
          <Logo />
          <Menu />
          <Link to="/login">
            <div className="flex items-center justify-center rounded-lg w-[100px] py-2 bg-slate-500 text-white cursor-pointer">
              Login
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
