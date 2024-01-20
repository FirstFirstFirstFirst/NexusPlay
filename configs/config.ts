import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import Logo from "@/public/logo.png";
import { arbitrum, mainnet, optimism, polygon } from "viem/chains";

export const config = createConfig(
  getDefaultConfig({
    appName: "ConnectKit Next.js demo",
    chains: [mainnet, polygon, optimism, arbitrum],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);
