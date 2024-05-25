import { useState } from "react";
import EmailPopup from "./EmailPopup";
import { useAddress } from "@thirdweb-dev/react";

export default function MintNFT() {
  const [show, setShow] = useState(false);
  const toogle = () => setShow(true);
  const address = useAddress();

  return (
    <div>
      {address ? (
        <>
          <h1>Mint</h1>
        </>
      ) : (
        <>
          <button onClick={toogle}>Sign In</button>
          {show && <EmailPopup close={() => setShow(false)} />}
        </>
      )}
    </div>
  );
}
