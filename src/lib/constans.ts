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
  {
    title: "CONTACT",
    path: "/kontakt",
  },
];

export const CHAINS: Chains = {
  "0x1": "Ethereum Mainnet",
  "0x3": "Ropsten Testnet",
  "0x4": "Rinkeby Testnet",
  "0xaa36a7": "Sepolia Testnet",
};
