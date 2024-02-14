import { createAsyncThunk } from "@reduxjs/toolkit";

export const switchNetwork = createAsyncThunk(
  "wallet/switchNetwork",
  async (chainId: string, { rejectWithValue }) => {
    try {
      const { ethereum } = window as any;
      if (!ethereum || !ethereum.isMetaMask) {
        return rejectWithValue("MetaMask is not installed.");
      }

      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });

      return chainId;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
