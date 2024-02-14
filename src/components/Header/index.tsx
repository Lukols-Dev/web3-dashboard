import Container from "../ui/container";
import Menu from "./menu";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { shortenAddress } from "../../lib/utlis";
import { logout } from "../../store/slices/walletSlice";
import Button from "../ui/button";

const Header = () => {
  const dispatch = useAppDispatch();
  const { address, isConnected } = useAppSelector((state) => state.wallet);

  const disconnect = async () => {
    dispatch(logout());
  };

  return (
    <header className="w-full bg-transparent absolute top-0 z-10 ">
      <Container>
        <div className="flex justify-between py-4">
          <Logo />
          <Menu />
          {isConnected ? (
            <div className="flex gap-2 items-center">
              {shortenAddress(address)}
              <Button
                className="flex items-center justify-center rounded-lg w-[100px] py-2 bg-slate-500 text-white cursor-pointer"
                onClick={disconnect}
              >
                Disconnect
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <div className="flex items-center justify-center rounded-lg w-[100px] py-2 bg-slate-500 text-white cursor-pointer">
                Login
              </div>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
