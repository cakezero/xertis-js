import { useRef, useState } from "react";
import {
  useEmbeddedWallet,
} from "@thirdweb-dev/react";
import { Spinner, Cancel } from '../js/icons'

// eslint-disable-next-line react/prop-types
export default function EmailPopup({ close }) {
  const modal = useRef(null);

  const closePopUp = (e) => {
    if (modal.current === e.target) {
      close;
    }
  };

  const [emailInput, setEmailInput] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [state, setState] = useState("enter_email");
  const [submit, setSubmit] = useState(false)

  const { connect, sendVerificationEmail } = useEmbeddedWallet();

  const SendOTP = async () => {
    if (!emailInput) {
      alert('Email Address field cannot be empty!');
      return;
    }
    console.log('Hit!')
    setSubmit(true)
    await sendVerificationEmail({ email: emailInput });
    console.log('Hit again!')
    setState('code_sent')
    setSubmit(false)
  };

  const handleLogin = async () => {
    setSubmit(true)
    // verify email and connect
    await connect({
      strategy: "email_verification",
      email: emailInput,
      verificationCode,
    });
    setSubmit(false)
  };

  return (
    <div
      ref={modal}
      onClick={closePopUp}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={close} className="place-self-end">
          <Cancel />
        </button>
        <div className="bg-violet-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl font-extrabold">SIGN IN TO XERTIS</h1>
          {state === "enter_email" ? (
            <>
              <p className="text-xl font-bold max-w-md text-center">
                Enter your email to proceed.
              </p>
              <input
                type="text"
                placeholder="Enter Email"
                value={emailInput}
                className="w-full px-4 py-4 border-gray-300 rounded-md"
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <button
                onClick={SendOTP}
                className="mt-4 w-full flex items-center ml-0 justify-center px-5 py-3 rounded-md bg-black"
              >
                {submit ? (
                  <>
                    <Spinner />
                    <span>Sending Code</span>
                  </>
                ) : (
                  "Continue"
                )}
              </button>
            </>
          ) : (
            <>
              <p className="text-xl font-bold max-w-md text-center">
                Enter OTP sent to {emailInput}.
              </p>
              <input
                type="text"
                placeholder="Enter OTP"
                value={verificationCode}
                className="w-full px-4 py-4 border-gray-300 rounded-md"
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <button
                onClick={handleLogin}
                className="mt-4 w-full items-center justify-center px-5 py-3 rounded-md bg-black"
              >
                {submit ? (
                  <>
                    <Spinner />
                    <span>Signing In</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </>
           )}
        </div>
      </div>
    </div>
  );
}