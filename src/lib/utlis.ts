import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const shortenAddress = (address?: string): string => {
  return !address
    ? ""
    : `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};
