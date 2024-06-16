import { createSmartAccount } from "./smartAccount";
import { PaymasterMode } from "@biconomy/paymaster";

export const sponsorTx = async (transaction) => {
  const biconomySmartAccount = await createSmartAccount();

  let userOperation = await biconomySmartAccount.buildUserOp([transaction], {
    paymasterServiceData: {
      mode: PaymasterMode.SPONSORED,
      smartAccountInfo: {
        name: "biconomy",
        version: "2.0.0",
      },
    },
  });

  const userOpResponse = await biconomySmartAccount.sendUserOp(userOperation);

  const { reciept } = await userOpResponse.wait(1);

  return reciept.transactionHash;
};
