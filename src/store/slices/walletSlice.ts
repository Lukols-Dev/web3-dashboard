import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { connectMetaMask } from "../thunks/connectMetaMask";
import { switchNetwork } from "../thunks/switchNetworkMetaMask";
import { fetchTokenBalance } from "../thunks/fetchTokenBalance";

interface WalletState {
  address: string | null;
  networkChainId: string | null;
  isMetaMaskInstalled: boolean;
  isConnected: boolean;
  tokenBalances: { [symbol: string]: string };
}

const initialState: WalletState = {
  address: null,
  networkChainId: null,
  isMetaMaskInstalled: false,
  isConnected: false,
  tokenBalances: {},
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
      state.isConnected = !!action.payload;
    },
    setNetworkChainId: (state, action: PayloadAction<string | null>) => {
      state.networkChainId = action.payload;
    },
    setMetaMaskInstalled: (state, action: PayloadAction<boolean>) => {
      state.isMetaMaskInstalled = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    logout: (state) => {
      state.address = null;
      state.isConnected = false;
    },
  },
  extraReducers: (builder) => {
    //success
    builder
      .addCase(connectMetaMask.fulfilled, (state, action) => {
        state.address = action.payload;
        state.isMetaMaskInstalled = true;
        state.isConnected = true;
      })
      .addCase(switchNetwork.fulfilled, (state, action) => {
        state.networkChainId = action.payload;
      })
      .addCase(fetchTokenBalance.fulfilled, (state, action) => {
        const { symbol, balance } = action.payload;
        state.tokenBalances[symbol] = balance;
      })
      //rejected
      .addCase(connectMetaMask.rejected, (state, action) => {
        console.error(action.error.message);
        state.isConnected = false;
      })
      .addCase(switchNetwork.rejected, (_state, action) => {
        console.error("Failed to switch network: ", action.payload);
      })
      .addCase(fetchTokenBalance.rejected, (_state, action) => {
        console.error("Failed to fetch token balance: ", action.error.message);
      });
  },
});

export const {
  setAddress,
  setMetaMaskInstalled,
  setIsConnected,
  setNetworkChainId,
  logout,
} = walletSlice.actions;
export default walletSlice.reducer;
