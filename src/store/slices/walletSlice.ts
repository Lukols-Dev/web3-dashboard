import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { connectMetaMask } from "../thunks/connectMetaMask";

interface WalletState {
  address: string | null;
  isMetaMaskInstalled: boolean;
}

const initialState: WalletState = {
  address: null,
  isMetaMaskInstalled: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    },
    setMetaMaskInstalled: (state, action: PayloadAction<boolean>) => {
      state.isMetaMaskInstalled = action.payload;
    },
  },
  extraReducers: (builder) => {
    //success
    builder.addCase(connectMetaMask.fulfilled, (state, action) => {
      state.address = action.payload;
      state.isMetaMaskInstalled = true;
    });
    //rejected
    builder.addCase(connectMetaMask.rejected, (_state, action) => {
      console.error(action.error.message);
    });
  },
});

export const { setAddress, setMetaMaskInstalled } = walletSlice.actions;
export default walletSlice.reducer;
