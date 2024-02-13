import Container from "../ui/container";
import Menu from "./menu";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="w-full bg-transparent">
      <Container>
        <div className="flex justify-between py-4">
          <Logo />
          <Menu />
          {/* <Metamask Button /> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
