import { createSmartAccountClient } from "@biconomy/account"
import { ethers } from "ethers"
import { magicClient } from "../magic/magicClient.js"

let client;

export const createSmartAccount = async () => {
  if (client) return client;

  const provider = new ethers.providers.Web3Provider((await magicClient()).rpcProvider)
  const signer = provider.getSigner();

  client = await createSmartAccountClient({
    signer: signer,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/80002/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    biconomyPaymasterApiKey: `${import.meta.env.VITE_PAYMASTER_API_KEY}`,
    rpcUrl: "",
  });

  const saAddress = await client.getAccountAddress();
  console.log("SA Address:", saAddress);
  return client;
}
