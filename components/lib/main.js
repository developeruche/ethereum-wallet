// Here all intraction with the blockchain would be donw with other account setup
import { ethers, Wallet } from "ethers"



// Stating the constants needed in this application

// network: using the Rinkeby testnet
let network = 'ropsten';

// provider: Infura or Etherscan will be automatically chosen
let provider = ethers.getDefaultProvider(network);




export const createWallet = async () => {
    const wallet = await ethers.Wallet.createRandom();

    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
    }
}


export const saveWalletDetails = async (address, privateKey, mnemonic) => {
    await localStorage.setItem("w_address", address);
    await localStorage.setItem("w_private_key", privateKey);
    await localStorage.setItem("w_mnemonic", mnemonic);
}


export const createWalletUsingPharse = async (m_string) => {
    const wallet = await ethers.Wallet.fromMnemonic(m_string, `m/44'/60'/0'/0/1`);

    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
    }
}


export const getEtherBalance = async () => {
    // getting the address from the localstorage
    let address = await localStorage.getItem("w_address");


    const bal = await provider.getBalance(address);
    const bal_ = ethers.utils.formatEther(bal);
    


    return {bal_, address};
}

export const sendEther = async (amount, to) => {
    // Obtaining the private key
    const pv_key = await localStorage.getItem("w_private_key");

    // Create a wallet instance
    let wallet = new Wallet(pv_key, provider)

    // Declaration of transaction (this is just a send transaction, no need for the data field)
    let tx = {
        to,
        value: ethers.utils.parseEther(amount)
    }

    // Send a transaction
    wallet.sendTransaction(tx)
    .then((txObj) => {
        console.log('txHash', txObj.hash)
        alert("Tranaction Was Successful...")
    })
}