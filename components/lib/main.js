// Here all intraction with the blockchain would be donw with other account setup
import { ethers, Wallet } from "ethers"
import abi from "./abi";



// Stating the constants needed in this application
const rpcUrl = "https://goerli.infura.io/v3/ba80361523fe423bb149026a490266f0";
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);



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


export const getTokenBalance = async (address) => {
    // Obtaining the private key
    const pv_key = await localStorage.getItem("w_private_key");

    // Create a wallet instance
    let wallet = new Wallet(pv_key, provider)

    let token = new ethers.Contract(address, abi, wallet);

    let bal = await token.balanceOf(wallet.address);

    return ethers.utils.formatEther(bal);
}

export const sendERC20Token = async (address, to, amount) => {
    alert("Sending...")
    // Obtaining the private key
    const pv_key = await localStorage.getItem("w_private_key");
    // Create a wallet instance
    let wallet = new Wallet(pv_key, provider);
    let token = new ethers.Contract(address, abi, wallet);
    let dec = await token.decimals();
    try {
        let res = await token.transfer(to, ethers.utils.parseUnits(amount, dec));
        await res.wait();
        alert("Token sent")
        return true;
    } catch {
        return false;
    }
}