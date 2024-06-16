import { Magic } from "magic-sdk";
import { getNetworkConfig } from "../network/network";

let client;

export const getMagicClient = async () => {
  if (client) return client
  const apiKey = import.meta.env.VITE_MAGIC_KEY;
  
  if (!apiKey) throw new Error("Magic apiKey needs to be configured");

  const networkConfig = getNetworkConfig();

  client = new Magic(apiKey, {
    network: networkConfig,
  });

  return client;
};
