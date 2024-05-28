import { magicClient } from "./magicClient";

let didToken = undefined;
export const authEmail = async (email) => {
  const magic = (await magicClient())
  if (magic.user.isLoggedIn) {
    didToken = magic.user.getIdToken();
  }

  didToken = magic.auth.loginWithEmailOTP({ email });

  return didToken;
};
