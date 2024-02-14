import { useEffect } from "react";
import Button from "../../components/ui/button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setMetaMaskInstalled } from "../../store/slices/walletSlice";
import { connectMetaMask } from "../../store/thunks/connectMetaMask";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { isMetaMaskInstalled } = useAppSelector((state) => state.wallet);

  const { ethereum } = window;

  const checkWalletInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const connect = () => {
    dispatch(connectMetaMask());
  };

  useEffect(() => {
    dispatch(setMetaMaskInstalled(checkWalletInstalled()));
  }, [dispatch]);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-full md:w-1/3 h-1/2 flex flex-col items-center justify-center gap-4 p-4">
        <Button onClick={connect}>
          <img
            className="w-10 h-10 absolute left-4"
            src="assets/metamask-icon.svg"
          />
          Metamask
          {!isMetaMaskInstalled && (
            <a href="https://metamask.io/" className="absolute right-4 text-sm">
              Install
            </a>
          )}
        </Button>
      </div>
    </main>
  );
};

export default LoginPage;
