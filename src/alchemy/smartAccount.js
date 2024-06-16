import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { WalletClientSigner, polygon, polygonAmoy } from "@alchemy/aa-core";
import { getWalletClient } from "../connection/viemClient";

const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY;
const ALCHEMY_GAS_POLICY_ID = import.meta.env.VITE_ALCHEMY_GAS_POLICY_ID;
const web3Environment = import.meta.env.VITE_ENVIRONMENT;

const chain = web3Environment === "mainnet" ? polygon : polygonAmoy;

let smartAccount;

const getSmartAccount = async () => {
  if (smartAccount) return smartAccount;

  if (!ALCHEMY_API_KEY || !ALCHEMY_GAS_POLICY_ID)
    throw new Error("'ALCHEMY API KEY OR GAS POLICY ID' has not been set");

  const client = await getWalletClient();

  const signer = new WalletClientSigner(client, "json-rpc");

  smartAccount = await createModularAccountAlchemyClient({
    chain,
    apiKey: ALCHEMY_API_KEY,
    signer,
    gasManagerConfig: {
      policyId: ALCHEMY_GAS_POLICY_ID,
    },
  });

  return smartAccount;
};

const getSmartAccountAddress = async () => {
  const client = await getSmartAccount();

  const smartAccountAddress = client.account?.address;

  if (!smartAccountAddress) throw new Error("No address found");

  return smartAccountAddress;
};

export { getSmartAccount, getSmartAccountAddress };
