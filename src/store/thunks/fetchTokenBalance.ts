import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { Token } from "../../types";

interface FetchTokenBalanceArgs {
  currentAddress: string;
  token: Token;
}

export const fetchTokenBalance = createAsyncThunk(
  "wallet/fetchTokenBalance",
  async (
    { currentAddress, token }: FetchTokenBalanceArgs,
    { rejectWithValue }
  ) => {
    if (!window.ethereum) return rejectWithValue("Ethereum object not found");
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let balance;
      if (token.symbol === "ETH") {
        balance = await provider.getBalance(currentAddress);
      } else {
        const tokenContract = new ethers.Contract(
          token.address,
          ["function balanceOf(address owner) external view returns (uint256)"],
          provider
        );
        balance = await tokenContract.balanceOf(currentAddress);
      }
      return {
        symbol: token.symbol,
        balance: ethers.utils.formatUnits(balance, 18),
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
