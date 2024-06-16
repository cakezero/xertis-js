import { env } from "../env/env";

const networkConfig = {
  testnet: {
    rpcUrl: "https://rpc-amoy.polygon.technology",
    chainId: 80002,
    explorerUrl: "https://amoy.polygonscan.com",
  },
  mainnet: {
    rpcUrl: `https://polygon-mainnet.g.alchemy.com/v2/${
      import.meta.env.VITE_ALCHEMY_API_KEY
    }`,
    chainId: 137,
    explorerUrl: "https://polygonscan.com",
  },
};

const getNetworkConfig = () => {
  return networkConfig[env];
};

const getTransactionUrl = (txHash) => {
  const explorerUrl = networkConfig[env].explorerUrl;

  return `${explorerUrl}/tx/${txHash}`;
};
const getAddressExplorerUrl = (address) => {
  const explorerUrl = networkConfig[env].explorerUrl;

  return `${explorerUrl}/address/${address}`;
};


export { getNetworkConfig, getTransactionUrl, getAddressExplorerUrl };
