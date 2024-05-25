import './App.css'
import { ThirdwebProvider, embeddedWallet } from '@thirdweb-dev/react'
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import VerifyCert from './components/VerifyCert'
import CreateCert from './components/CreateCert'
import MintNFT from './components/MintNFT'
import Navbar from './components/Navbar'


function App() {
  return (
    <ThirdwebProvider
      clientId={import.meta.env.VITE_CLIENT_ID}
      activeChain={'ethereum'}
      supportedWallets={[embeddedWallet()]}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MintNFT />} />
          <Route path="/verify" element={<VerifyCert />} />
          <Route path="/create" element={<CreateCert />} />
        </Routes>
        <Outlet />
      </Router>
    </ThirdwebProvider>
  )
}

export default App
