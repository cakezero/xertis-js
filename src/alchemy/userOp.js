import { getSmartAccount } from "./smartAccount";

const sendUserOp = async (data) => {
  const { target, calldata } = data;
  
  const smartAccount = await getSmartAccount();

  if (!smartAccount.account) throw new Error("smart account missing/does not exist")
  
  const userOp = await smartAccount.sendUserOperation({
    uo: {
      target,
      calldata
    },
    account: smartAccount.account
  })

  const txHash = await smartAccount.waitForUserOperationTransaction(userOp);

  return txHash;
}

export { sendUserOp };