import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAddress } from "../slices/walletSlice";

export const connectMetaMask = createAsyncThunk(
  "wallet/connectMetaMask",
  async (_, { dispatch }) => {
    const { ethereum } = window as any;
    if (!ethereum) {
      throw new Error("MetaMask is not installed!");
    }
    if (!ethereum.isMetaMask) {
      throw new Error("Non-MetaMask wallet detected.");
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    dispatch(setAddress(accounts[0]));
    return accounts[0];
  }
);
