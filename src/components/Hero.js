import React from 'react';
import "../assets/styles.css";
import NavBar from './NavBar';
import { AiOutlineDesktop, AiOutlineScan } from "react-icons/ai";

function Hero() {
    return (
        <section className='hero'>
            <NavBar />
            <div className="caption">
                <p className='text-center' style={{ color: "#fff", fontSize: "20px" }}>Mint, Stake And Earn Rewards With Your BaseApeYC. Bring ALL-1 Utility on Base</p>
                <div className="caption-inner">
                    <a href="/mint">
                        <button className="btn btn-danger" style={{ color: "#ffffff" }}>
                            Mint Now
                        </button>
                    </a>
                    <a href="https://opensea.io/collection/baseapeyc-collectible" target="_blank"
                        rel="noreferrer">
                        <button className="btn btn-info">
                            Trade on OpenSea 
                            <AiOutlineDesktop size={25} />
                        </button>
                    </a>    
                    <a href="https://baseapeyc.deform.cc/airdrop" target="_blank"
                        rel="noreferrer">
                        <button className="btn btn-danger" style={{ color: "#ffffff" }}>
                             Claim Airdrop
                            <AiOutlineScan size={25} />
                        </button>    
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
