import "./Navbar.css";
import { Link } from "react-router-dom";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function Navbar() {
  const address = useAddress();
  return (
    <>
      <div className="nav-logo">
        <Link className="ed" to="/">
          <img src="/vite.svg" alt="Xertis-logo" />
          <h3>Xertis</h3>
        </Link>
      </div>
      <div className="nav-link">
        <nav className="linkk">
          <Link to="/verify">Verify Certificate</Link>
          <Link to="/create">Create a Certificate</Link>
        </nav>
        <div className="button-right">
          {address ? (
            <>
              <ConnectWallet />
            </>
          ) : (
            "Connect wallet Button"
          )}
        </div>
      </div>
    </>
  );
}
