import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setAddress,
  setIsConnected,
  setNetworkChainId,
} from "../slices/walletSlice";

export const connectMetaMask = createAsyncThunk(
  "wallet/connectMetaMask",
  async (_, { dispatch }) => {
    const { ethereum } = window;
    if (!ethereum) {
      throw new Error("MetaMask is not installed!");
    }
    if (!ethereum.isMetaMask) {
      throw new Error("Non-MetaMask wallet detected.");
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const chainId = await ethereum.request({ method: "eth_chainId" });

    dispatch(setAddress(accounts[0]));
    dispatch(setIsConnected(true));
    dispatch(setNetworkChainId(chainId));
    return accounts[0];
  }
);
