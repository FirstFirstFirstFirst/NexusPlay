import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import Logo from "@/public/logo.png";
import { sepolia } from "viem/chains";

export const config = createConfig(
  getDefaultConfig({
    appName: "ConnectKit Next.js demo",
    chains: [sepolia],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);
