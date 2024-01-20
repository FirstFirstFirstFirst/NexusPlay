"use client";
import React, { useEffect, useState } from "react";
import { ConnectKitButton, ConnectKitProvider } from "connectkit";
import { config } from "@/configs/config";
import { WagmiConfig } from "wagmi";
import { ChainIcon } from "connectkit";
import LoadingSpin from "./LoadingSpin";
import { fetchBalance } from "wagmi/actions";
interface FetchBalanceResult {
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
}
const ConnectWalletButton = () => {
  const [address, setAddress] = useState<`0x${string}`>();
  const [balance, setBalance] = useState<bigint>();
  const [symbol, setSymbol] = useState<string>();
  useEffect(() => {
    const getBalance = async () => {
      if (address) {
        try {
          const res: FetchBalanceResult = await fetchBalance({ address });
          setBalance(res.value);
          setSymbol(res.symbol);
        } catch (error) {
          // Handle error if necessary
          console.error("Error fetching balance:", error);
        }
      }
    };

    getBalance();
  }, [address]);
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider
        theme="midnight"
        options={{
          embedGoogleFonts: true,
        }}
      >
        <ConnectKitButton.Custom>
          {({
            isConnected,
            isConnecting,
            show,
            hide,
            address,
            truncatedAddress,
            ensName,
            chain,
          }) => {
            setAddress(address);
            return (
              <button
                onClick={show}
                className={`rounded-md h-12 ${
                  isConnected ? "" : "bg-[#313235] py-2 px-5"
                } ${isConnecting ? "opacity-75 cursor-not-allowed" : ""}`}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <span className="flex items-center space-x-2">
                    <LoadingSpin />
                    <span className="text-white">Connecting...</span>
                  </span>
                ) : isConnected ? (
                  <div className="flex flex-row h-12">
                    <div className="flex flex-row p-2 rounded-l-md gap-2 text-black bg-white items-center">
                      <ChainIcon
                        id={chain?.id}
                        unsupported={chain?.unsupported}
                      />
                      <div>{Number(balance)}</div>
                      <div>{symbol}</div>
                    </div>
                    <div className="flex items-center p-2 rounded-r-md bg-[#B30000]">
                      <span className="text-white">{truncatedAddress}</span>
                    </div>
                  </div>
                ) : (
                  <span className="text-white">Connect Wallet</span>
                )}
              </button>
            );
          }}
        </ConnectKitButton.Custom>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default ConnectWalletButton;
