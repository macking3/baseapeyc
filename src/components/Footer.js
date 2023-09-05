import React from 'react'
import { AiOutlineTwitter, AiOutlineScan } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

function Footer() {
    return (
        <div className='footer container'>
            <p>BaseApeYC&#169; All Right Reserved</p>
            <div className='social'>
                <a href='https://opensea.io/collection/baseapeyc-collectible' >
                    <AiOutlineScan size={24} color="#000" />
                </a>
                <a href='https://twitter.com/BaseApeYatclub' >
                    <AiOutlineTwitter size={24} color="#000" />
                </a>
                <a href='https://discord.gg/BaseApeYC' >
                    <RiDiscordFill size={24} color="#000" />
                </a>
            </div>
        </div>
    )
}

export default Footer
