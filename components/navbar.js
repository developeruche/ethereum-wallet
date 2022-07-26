import Head from "next/head";
import Link from "next/link";



function Navbar() {

    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
                <title>CoinDAO Wallet</title>
            </Head>

            <div className="navbar__hori">
                <div className="navbar__hori__section__one">
                    <Link href={"/"}><i className="ri-patreon-line"></i></Link>
                </div>

                <div className="navbar__hori__section__two">
                    <ul>
                        <Link href={"/dashboard"}><li><i className="ri-dashboard-line"></i> Dashboard</li></Link>                        
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Navbar;