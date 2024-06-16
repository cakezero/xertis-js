import { useState } from "react";
import SignIn from "./SignIn";

export default function Home() {
  const [show, setShow] = useState(false);
  const toogle = () => setShow(true);

  return (
    <div>
      <button onClick={toogle}>Sign In</button>
      {show && <SignIn close={() => setShow(false)} />}
    </div>
  );
}
