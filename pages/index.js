import ImportWallet from "../components/importWallet";
import Navbar from "../components/navbar";
import {useState} from "react";
import CreateWallet from "../components/createWallet";



export default function Home() {
  const [importWalletModal, setImportWalletModal] = useState(false);
  const [createWalletModal, setCreateWalletModal] = useState(false);

  const handleImportModalState = () => {
    setImportWalletModal(!importWalletModal);
  }

  const handleCreateWalletModalState = () => {
    setCreateWalletModal(!createWalletModal);
  }

  return (
    <div className="home__page">
      <Navbar />

      {/* Importing the CTA modals */}
      {
        importWalletModal && <ImportWallet off={handleImportModalState}/>
      }

      {
        createWalletModal && <CreateWallet off={handleCreateWalletModalState}/>
      }
      


      {/* Here comes the banner section */}
      <div className="banner">
        <div className="banner__section__one">
          <h1>Exploring the power of Decentralization</h1>
          <p>
            CoinDAO wallet is a demo cryptocurrency wallet created by @developeruche
            to be used only for storing testnet token... (NOT SAFE)
          </p>

          <br />

          <div className="banner__cta">
            <button className="import" onClick={handleImportModalState}>
                Import Wallet
            </button>

            <button className="create" onClick={handleCreateWalletModalState}>
                Create Wallet
            </button>
          </div>
        </div>

        <div className="banner__section__two">
          <img src="/wallet.jpg" />
        </div>
      </div>          

    </div>
  )
}
