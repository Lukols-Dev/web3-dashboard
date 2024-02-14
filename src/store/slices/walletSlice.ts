import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { connectMetaMask } from "../thunks/connectMetaMask";

interface WalletState {
  address: string | null;
  isMetaMaskInstalled: boolean;
  isConnected: boolean;
}

const initialState: WalletState = {
  address: null,
  isMetaMaskInstalled: false,
  isConnected: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
      state.isConnected = !!action.payload;
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
    builder.addCase(connectMetaMask.fulfilled, (state, action) => {
      state.address = action.payload;
      state.isMetaMaskInstalled = true;
      state.isConnected = true;
    });
    //rejected
    builder.addCase(connectMetaMask.rejected, (state, action) => {
      console.error(action.error.message);
      state.isConnected = false;
    });
  },
});

export const { setAddress, setMetaMaskInstalled, setIsConnected, logout } =
  walletSlice.actions;
export default walletSlice.reducer;
