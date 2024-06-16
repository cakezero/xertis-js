import { polygon, polygonAmoy } from "viem/chains";

const web3Environment = import.meta.env.VITE_ENVIRONMENT;

const chain = {
  testnet: polygonAmoy,
  mainnet: polygon
}

const getViemChain = () => {
  return chain[web3Environment];
}

export { getViemChain }