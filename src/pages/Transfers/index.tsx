import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { CHAINS } from "../../lib/constans";
import { switchNetwork } from "../../store/thunks/switchNetworkMetaMask";
import { Transaction } from "../../types";
import { sendTransaction } from "../../lib/ethereum";
import Input from "../../components/ui/input";

const TransferPage = () => {
  const dispatch = useAppDispatch();
  const currentAddress = useAppSelector((state) => state.wallet.address);
  const currentNetwork = useAppSelector((state) => state.wallet.networkChainId);

  const [formData, setformData] = useState<Transaction>({
    addressTo: "",
    amount: "",
    message: "",
  });

  const handleChange = (e: any, name: string) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction(formData, currentAddress);
  };

  return (
    <main className="w-screen h-screen flex flex-col gap-9 items-center justify-center">
      <div className="flex gap-4 items-center justify-center relative">
        Current Network:
        <span className="p-4 bg-gray-300 rounded-md">
          {currentNetwork
            ? CHAINS[currentNetwork] || "Unknown Network"
            : "Unknown Network"}
        </span>
      </div>
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center relative">
        <Input
          disabled={currentNetwork !== "0x4"}
          placeholder="Address To"
          name="addressTo"
          type="text"
          value={formData.addressTo}
          handleChange={handleChange}
        />
        <Input
          disabled={currentNetwork !== "0x4"}
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          value={formData.amount}
          handleChange={handleChange}
        />
        <Input
          disabled={currentNetwork !== "0x4"}
          placeholder="Enter Message"
          name="message"
          type="text"
          value={formData.message}
          handleChange={handleChange}
        />
        <div className="h-[1px] w-full bg-gray-400 my-2" />
        <button
          disabled={currentNetwork !== "0x4"}
          type="button"
          onClick={handleSubmit}
          className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send now
        </button>
        {currentNetwork !== "0x4" && (
          <div className="w-full h-full bg-gray-400/90 absolute top-0 left-0 flex flex-col gap-4 items-center justify-center text-black text-xl font-bold">
            Only Rinkeby
            <button
              className="p-2 border border-black rounded-full hover:bg-gray-300"
              onClick={() => dispatch(switchNetwork("0x4"))}
            >
              Change Network
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default TransferPage;
