import { useEffect, useState } from "react";
import Button from "../../components/ui/button";

const LoginPage = () => {
  const [isMetamaskInstall, setMetamaskInstall] = useState<boolean>(false);

  const { ethereum } = window;

  const checkWalletInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const checkMetamaskInstalled = () => {
    if (checkWalletInstalled()) {
      setMetamaskInstall(true);
      console.log("You have installed MetaMask.");
    } else {
      setMetamaskInstall(false);
      console.log("You dont have installed MetaMask.");
    }
  };

  useEffect(() => {
    checkMetamaskInstalled();
  }, []);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-full md:w-1/3 h-1/2 flex flex-col items-center justify-center gap-4 p-4">
        <Button>
          <img
            className="w-10 h-10 absolute left-4"
            src="assets/metamask-icon.svg"
          />
          Metamask
          {isMetamaskInstall && (
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
