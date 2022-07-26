import Head from "next/head";
import {useState, useEffect} from "react";
import { LineGraph } from "../components/lineGraph";
import { PieChart } from "../components/pie";
import router from "next/router";
import { getEtherBalance, sendEther } from "../components/lib/main";





function Dashboard() {
    // page data
    const [userAddr, setUserAddr] = useState("");
    const [userBal, setUserBal] = useState("");

    // form data
    const [transferAddr, setTransferAddr] = useState("");
    const [transferAmount, setTransferAmount] = useState(null);


    const fetchBal = async () => {
        const res = await getEtherBalance();

        setUserBal(res.bal_);
        setUserAddr(res.address);
    }

    const copyAddr = () => {
        navigator.clipboard.writeText(userAddr);

        alert("Copied Address")
    }

    const sendTokens = async () => {
        await sendEther(transferAmount, transferAddr)
    }


    useEffect(() => {
        fetchBal()
    }, []);

    

    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
                <title>CoinDAO Wallet</title>
            </Head>

            <div className="dashboard">

                <div className="dashboard__section__one">
                    <div className="dashboard__section__one__header" onClick={() => {
                        router.push("/")
                    }}>
                        <i className="ri-patreon-line"></i> CoinDAO
                    </div>

                    <div className="dashboard__section__one__link__container">
                        <div className="dashboard__section__one__link__container__intro">
                            <i className="ri-dashboard-fill"></i> Dashboard
                        </div>

                        <ul>
                            <li><i className="ri-file-chart-line"></i> Transactions</li>
                            <li><i className="ri-group-line"></i> Communities</li>
                            <li><i className="ri-bit-coin-line"></i> Crypto</li>
                            <li><i className="ri-settings-3-line"></i> Settings</li>
                            <li><i className="ri-question-line"></i> Help</li>
                        </ul>
                    </div>

                    <div className="dashboard__section__one__address">
                        <p onClick={copyAddr}>{userAddr.substring(0,6)}...{userAddr.slice(-4)}</p>
                    </div>
                </div>
                <div className="dashboard__section__two">
                    <div className="dashboard__section__two__header">
                        <div className="dashboard__section__two__header__section__one">
                            <p>@developeruche</p>
                        </div>

                        <div className="dashboard__section__two__header__section__one">
                            <span>
                                <input type="text" />
                                <i className="ri-search-line"></i>
                            </span>
                        </div>
                    </div>

                    <div className="dashboard__section__two__asset__report">
                        <span>Total Balance</span>
                        <div>
                            <h2>{userBal.substring(0,6)}</h2> <h4>ETH</h4>
                        </div>
                    </div>

                    {/* Here comes the transfer form */}

                    <div className="dashboard__section__two__tranfer__form__wrapper">

                        <div className="dashboard__section__two__tranfer__form">
                            <div className="dashboard__section__two__tranfer__form__header">
                                <h3>Send Ether</h3>
                            </div>
                            <div className="dashboard__section__two__tranfer__form__address__input">
                                <input 
                                    text="text"
                                    value={transferAddr}
                                    onChange={e => {
                                        setTransferAddr(e.target.value)
                                    }}
                                    placeholder="Enter Address" 
                                />
                            </div>

                            <div className="dashboard__section__two__tranfer__form__address__input">
                                <input 
                                    text="number"
                                    value={transferAmount}
                                    onChange={e => {
                                        setTransferAmount(e.target.value)
                                    }}
                                    placeholder="Enter Amount In Ether" 
                                />
                            </div>

                            <div className="dashboard__section__two__tranfer__form__address__input">
                                <button onClick={sendTokens}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard__section__three">
                    <div className="dashboard__section__three">
                        <PieChart />
                    </div>

                    <div className="dashboard__section__three">
                        <LineGraph chatData={[0.2,0.34,0.22,0.26,0.13,0.17,0.3]}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;