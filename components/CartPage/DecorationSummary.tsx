"use client";
import React, { useState, useEffect } from "react";
import useWalletStore from "@/utils/storewallet"; // Adjust the path accordingly
import { contractAddress, contractABI } from "@/utils/contract";
import { ethers } from "ethers";
import { Signer } from "ethers";

interface InputPrice {
  price: number;
  discount: number;
}
function DecorationSummary({ price, discount }: InputPrice) {
  const [signer, setSigner] = useState<Signer | undefined>(() => undefined);

  const { wallet, setWallet, updateBalance, login, logout } =
    useWalletStore() as any;

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const ContractAddress = contractAddress;
      const abi = contractABI;

      // Use the wallet's signer instead of the address directly
      const contract = new ethers.Contract(
        ContractAddress,
        abi,
        wallet.address
      );

      try {
        await contract.burnToken(wallet.address, price);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  const handleSubmit = (e: any) => {
    execute();
    e.preventDefault();
  };

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const user = provider.getSigner() as Signer;
    setSigner(() => user);
    console.log({ signer });
  }, [ wallet, signer]);

  return (
    <div className="bg-white flex flex-col items-center gap-3 p-5 rounded-[20px]">
      <div className="text-center font-bold text-3xl">Decoration Summary</div>
      <div className="flex justify-between mx-10 text-2xl w-[70%]">
        <div>Price</div>
        <div className="flex gap-5">
          <div>{price}</div>
          <div>NXC</div>
        </div>
      </div>
      <div className=" flex justify-between mx-10 text-2xl w-[70%]">
        <div>Discount</div>
        <div className="flex gap-5">
          {discount ? <div>-{discount}</div> : <div>{discount}</div>}
          <div>NXC</div>
        </div>
      </div>
      <div className=" flex justify-between mx-10 text-2xl w-[70%]">
        <div>Total</div>
        <div className="flex gap-5">
          <div>0</div>
          <div>NXC</div>
        </div>
      </div>
      <div className="h-20 w-full flex justify-center items-center">
        <div className="w-[70%] h-[60%]   ">
          <button
            type="button"
            className="w-full h-full text-white bg-yellow-400 duration-500 hover:shadow-xl hover:bg-yellow-500 font-medium rounded-full text-2xl px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default DecorationSummary;
