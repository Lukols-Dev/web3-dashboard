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
