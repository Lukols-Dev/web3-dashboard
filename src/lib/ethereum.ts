import { ethers } from "ethers";
import abi from "./abi.json";
import { Transaction } from "../types";

const { ethereum } = window;

const createEthereumContract = (address?: string) => {
  if (!ethereum || !address) return;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    "0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA",
    abi.abi,
    signer
  );

  return transactionsContract;
};

export const sendTransaction = async (
  data: Transaction,
  address?: string | null
) => {
  if (!ethereum || !address) return;

  try {
    const { addressTo, amount, message } = data;
    const transactionsContract = createEthereumContract();
    const parsedAmount = ethers.utils.parseEther(amount);

    await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: address,
          to: addressTo,
          gas: "0x5208",
          value: parsedAmount._hex,
        },
      ],
    });

    if (transactionsContract) {
      const transactionHash = await transactionsContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message
      );
      await transactionHash.wait();
      await transactionsContract.getTransactionCount();
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};
