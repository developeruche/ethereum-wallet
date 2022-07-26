import {useState, useEffect} from "react";
import { createWallet, saveWalletDetails } from "./lib/main";
import router from "next/router";





function CreateWallet({off}) {
    const [seed, setSeed] = useState([]);
    const [seedn, setSeedn] = useState("");
    const [addr, setAddr] = useState([]);
    const [pvKey, setPvKey] = useState([]);

    const createWalletFunc = async () => {
        const res = await createWallet();

        setSeed(res.mnemonic.split(" "));
        setSeedn(res.mnemonic);
        setAddr(res.address);
        setPvKey(res.privateKey);
    }

    useEffect(() => {
        createWalletFunc()
    }, []);


    const handleCreateWallet = () => {
        // storing wallet details in local host
        saveWalletDetails(addr, pvKey, seedn);

        router.push("/dashboard");
    }


    


    return (
        <div className="import__wallet__wrapper">
            <div className="import__wallet">
                <div className="import__wallet__header">
                    <i className="ri-close-fill" onClick={off}></i>
                </div>

                <div className="import__wallet__body">

                    <div className="import__wallet__body__input__wrapper">
                        {
                            seed.map((s, index) => {
                                return(
                                    <div className="import__wallet__body__input__container" key={index}>
                                        <p>{s}</p>
                                    </div>
                                )
                            })
                        }
                        

                    </div>

                    <div className="import__wallet__body__cta">
                        <button onClick={handleCreateWallet}>Create Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateWallet;