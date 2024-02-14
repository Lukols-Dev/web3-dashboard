import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { switchNetwork } from "../../store/thunks/switchNetworkMetaMask";
import { CHAINS } from "../../lib/constans";

const WalletInfoPage = () => {
  const dispatch = useAppDispatch();
  const currentNetworkChainId = useAppSelector(
    (state) => state.wallet.networkChainId
  );
  const currentAddress = useAppSelector((state) => state.wallet.address);
  const [selectedChainId, setSelectedChainId] = useState<string>("");
  const [tokenBalances, setTokenBalances] = useState({});

  const { ethereum } = window;

  const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newChainId = event.target.value;
    setSelectedChainId(newChainId);
    if (newChainId !== currentNetworkChainId) {
      dispatch(switchNetwork(newChainId));
    }
  };

  const getTokenBalances = async () => {
    if (!currentAddress || !ethereum) return;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const balances: any = {};

    for (const token of tokens) {
      try {
        let balance;

        if (token.symbol === "ETH") {
          balance = await provider.getBalance(currentAddress);
        } else {
          const tokenContract = new ethers.Contract(
            token.address,
            [
              "function balanceOf(address owner) external view returns (uint256)",
            ],
            provider
          );
          balance = await tokenContract.balanceOf(currentAddress);
        }

        balances[token.symbol] = ethers.utils.formatUnits(balance, 18);
      } catch (error) {
        console.error(`Unable to fetch ${token.symbol} balance:`, error);
        balances[token.symbol] = "Error";
      }
    }

    setTokenBalances(balances);
  };

  useEffect(() => {
    if (currentAddress && currentNetworkChainId) {
      getTokenBalances();
    }
  }, [currentAddress, currentNetworkChainId]);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-full md:w-1/3 h-1/2 flex flex-col items-center justify-center gap-4 p-4">
        <h1>Wallet Info Page</h1>
        <select
          value={selectedChainId}
          onChange={handleNetworkChange}
          defaultValue=""
        >
          <option value="" disabled>
            Select a Network
          </option>
          {Object.entries(CHAINS).map(([chainId, networkName]) => (
            <option key={chainId} value={chainId}>
              {networkName}
            </option>
          ))}
        </select>
        {Object.entries(tokenBalances).map(([symbol, balance]) => (
          <p key={symbol}>
            {symbol} Balance: {balance as any}
          </p>
        ))}
      </div>
    </main>
  );
};

export default WalletInfoPage;

const tokens = [
  {
    symbol: "ETH",
    address: "",
  },
  {
    symbol: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
];
