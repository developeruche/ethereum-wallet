import {useState} from "react";
import { createWalletUsingPharse, saveWalletDetails } from "./lib/main";
import router from "next/router";





function ImportWallet({off}) {
    const [seed1, setSeed1] = useState("");
    const [seed2, setSeed2] = useState("");
    const [seed3, setSeed3] = useState("");
    const [seed4, setSeed4] = useState("");
    const [seed5, setSeed5] = useState("");
    const [seed6, setSeed6] = useState("");
    const [seed7, setSeed7] = useState("");
    const [seed8, setSeed8] = useState("");
    const [seed9, setSeed9] = useState("");
    const [seed10, setSeed10] = useState("");
    const [seed11, setSeed11] = useState("");
    const [seed12, setSeed12] = useState("");
    

    const formetMnenomicWords = () => {
        return `${seed1} ${seed2} ${seed3} ${seed4} ${seed5} ${seed6} ${seed7} ${seed8} ${seed9} ${seed10} ${seed11} ${seed12}`
    }

    const handleImport = async () => {
        const seed = formetMnenomicWords();
        const res = await createWalletUsingPharse(seed);

        // storing in the localStorage
        saveWalletDetails(res.address, res.privateKey, res.mnemonic);


        // sending the users to the dashboard
        router.push("/dashboard")
    }

    


    return (
        <div className="import__wallet__wrapper">
            <div className="import__wallet">
                <div className="import__wallet__header">
                    <i className="ri-close-fill" onClick={off}></i>
                </div>

                <div className="import__wallet__body">

                    <div className="import__wallet__body__input__wrapper">
                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed1}
                                onChange={e => {
                                    setSeed1(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed2}
                                onChange={e => {
                                    setSeed2(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed3}
                                onChange={e => {
                                    setSeed3(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed4}
                                onChange={e => {
                                    setSeed4(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed5}
                                onChange={e => {
                                    setSeed5(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed6}
                                onChange={e => {
                                    setSeed6(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed7}
                                onChange={e => {
                                    setSeed7(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed8}
                                onChange={e => {
                                    setSeed8(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed9}
                                onChange={e => {
                                    setSeed9(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed10}
                                onChange={e => {
                                    setSeed10(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed11}
                                onChange={e => {
                                    setSeed11(e.target.value)
                                }} />
                        </div>

                        <div className="import__wallet__body__input__container">
                            <input 
                                type="text"
                                value={seed12}
                                onChange={e => {
                                    setSeed12(e.target.value)
                                }} />
                        </div>
                    </div>

                    <div className="import__wallet__body__cta">
                        <button onClick={handleImport}>Import</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportWallet;