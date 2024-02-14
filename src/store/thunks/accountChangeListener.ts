import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAddress } from "../slices/walletSlice";

export const setupAccountChangeListener = createAsyncThunk(
  "wallet/setupAccountChangeListener",
  async (_, { dispatch }) => {
    const { ethereum } = window as any;
    if (ethereum && ethereum.isMetaMask) {
      ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          dispatch(setAddress(accounts[0]));
        } else {
          dispatch(setAddress(null));
        }
      });
    }
  }
);
