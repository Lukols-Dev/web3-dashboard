export type MenuItem = {
  title: string;
  path: string;
};

export type Chains = {
  [key: string]: string;
};

export type Transaction = {
  addressTo: string;
  amount: string;
  message: string;
};

export type Token = {
  symbol: string;
  address: string;
};
