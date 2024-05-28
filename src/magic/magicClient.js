import { Magic } from "magic-sdk";
import { getNetworkConfig } from "../network/network";


export const magicClient = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) throw new Error("Magic apiKey needs to be configured");

  const alchemyApiKey = import.meta.env.VITE_ALCHEMY_API_KEY;
  if (!alchemyApiKey) throw new Error("Alchemy apiKey needs to be configured");

    const client = new Magic(apiKey, {
      network: getNetworkConfig(),
    });

  return client;
};
