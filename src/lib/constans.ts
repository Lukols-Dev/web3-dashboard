import { Chains, MenuItem } from "../types";

export const MENU: MenuItem[] = [
  {
    title: "Transfers",
    path: "/transfer",
  },
  {
    title: "Wallet Dashboard",
    path: "/wallet",
  },
];

export const CHAINS: Chains = {
  "0x1": "Ethereum Mainnet",
  "0x4": "Rinkeby Testnet",
  "0x13881": "Polygon Mumbai",
  "0xaa36a7": "Sepolia Testnet",
};

export const TOKENS = [
  {
    symbol: "ETH",
    address: "",
  },
  {
    symbol: "MATIC",
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  },
];
