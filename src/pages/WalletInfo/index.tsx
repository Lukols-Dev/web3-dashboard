import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { switchNetwork } from "../../store/thunks/switchNetworkMetaMask";
import { CHAINS, TOKENS } from "../../lib/constans";
import { fetchTokenBalance } from "../../store/thunks/fetchTokenBalance";

const WalletInfoPage = () => {
  const dispatch = useAppDispatch();
  const currentNetworkChainId = useAppSelector(
    (state) => state.wallet.networkChainId
  );
  const currentAddress = useAppSelector((state) => state.wallet.address);
  const tokenBalances = useAppSelector((state) => state.wallet.tokenBalances);

  const [selectedChainId, setSelectedChainId] = useState<string>("");

  const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newChainId = event.target.value;
    setSelectedChainId(newChainId);
    if (newChainId !== currentNetworkChainId) {
      dispatch(switchNetwork(newChainId));
    }
  };

  useEffect(() => {
    if (currentAddress && currentNetworkChainId) {
      TOKENS.forEach((token) => {
        dispatch(fetchTokenBalance({ currentAddress, token: token }));
      });
    }
  }, [currentAddress, currentNetworkChainId, dispatch]);

  useEffect(() => {
    if (currentNetworkChainId) {
      setSelectedChainId(currentNetworkChainId);
    }
  }, [currentAddress, currentNetworkChainId, dispatch]);

  return (
    <main className="w-screen h-screen flex items-center justify-center z-20">
      <div className="w-full md:w-1/3 h-1/2 flex flex-col items-center justify-center gap-4 p-4">
        <h1>Wallet Info Page</h1>
        <select value={selectedChainId} onChange={handleNetworkChange}>
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
            {symbol} Balance: {balance}
          </p>
        ))}
      </div>
    </main>
  );
};

export default WalletInfoPage;
