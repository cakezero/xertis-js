import { getViemChain } from "./viemChain";
import { getMagicClient } from "../magic/magicClient";
import { createPublicClient, createWalletClient, custom } from 'viem'

let publicClientInstance;
let walletClientInstance;

const getPublicClient = async () => { 
  if (publicClientInstance) return publicClientInstance;

  publicClientInstance = createPublicClient({
    chain: getViemChain(),
    transport: custom((await getMagicClient()).rpcProvider),
  });
}

const getWalletClient = async () => { 
  if (walletClientInstance) return walletClientInstance;

  walletClientInstance = createWalletClient({
    chain: getViemChain(),
    transport: custom((await getMagicClient()).rpcProvider),
  })
}

export { getPublicClient, getWalletClient };