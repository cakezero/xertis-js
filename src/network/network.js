import { env } from "../env/env";

// Change testnet from mumbai to amoy
const networkConfig = {
  testnet: {
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai",
    chainId: 80001,
    explorerUrl: "https://mumbai.polygonscan.com",
  },
  mainnet: {
    rpcUrl: "https://polygon-mainnet.g.alchemy.com/v2/zHEgzvGizW0dHlGJ7J6ZP477wnNlepoF",
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
