import React from 'react';
import "../assets/styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function Faq() {
    return (
        <div class="faq container" id="FAQ">
            <h1 class="faqhead text-center">
                Frequently asked questions
            </h1>
            <div class="faq-questions">
                <details open="">
                    <summary>What is BaseApeYC?</summary>
                    <div class="faq__content">
                        <p>BaseApeYC is a project within the Base blockchain. Based on a collection of NFTs that can be staked to receive BAY Token rewards.</p>
                    </div>
                </details>
                <details>
                    <summary>When can i buy a BaseApeYC?</summary>
                    <div class="faq__content">
                        <p>You can mint a baseape on our app in the mint page and stake to earn rewards. Follow our official channels to find out the latest news.</p>
                    </div>
                </details>
                <details>
                    <summary>What wallet can i use?</summary>
                    <div class="faq__content">
                        <p>We currently only support the Metamask wallet.</p>
                    </div>
                </details>
                <details>
                    <summary>What is the price of nft?</summary>
                    <div class="faq__content"><p>Mint price is 0.002 ETH.</p>
                    </div>
                </details>
                <details>
                    <summary>Where can I stake my nft?</summary>
                    <div class="faq__content">
                        <p>You can stake your BaseApeYC directly from our app in the mint page where you can also manage your whole wallet of NFTs.</p>
                    </div>
                </details>
            </div>
        </div>
    )
}

export default Faq;
