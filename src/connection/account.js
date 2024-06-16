import { getWalletClient } from "./viemClient"

let account;

export const getAccount = async() => {
  if (account) return account

  const walletClient = getWalletClient()

  account = (await walletClient.getAddresses())[0]
  return account
}