import React from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";

import { ethers } from "ethers";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    // <div>
      <div style={{marginLeft: 100, marginRight:100, marginTop: 10, marginBottom:1000, textAlign: "left" }}>
        <h2>
          Abstract
        </h2> {/* Abstract */}
        <p>
          Nowadays, physical fitness and bodybuilding have become unprecedentedly popular. While it is usually easy for people to start doing exercises, one may find it difficult to persevere. There are many factors that lead to this phenomenon, including busy schedules, intense training plans, no workout buddies, etc. All these factors gradually lead to a loss in motivation, causing people to become more reluctant, and eventually stop working out completely. Even though pre-workout products can relieve this unwillingness, its effect is temporary and can lead to dependence on the product. With the development of technology and the global market, blockchain technology and cryptocurrency came with it and inspired us to develop a blockchain-based application that incorporates exercising, entertainment, and socialization through the implementation of a platform that rewards users for staying fit and active. By creating such a platform that targets people’s demand for personalized socializing and motivation for exercising, we expect to promote a healthy lifestyle, the growth of the gym industry, and a way for people into fitness to socialize.
        </p>

        <h2>1. Introduction</h2>
        <p>The idea is that our users can connect to their smart devices like watches/rings, choose their desired type of exercise, and trace their heart rate & time for calories consumption. They will be rewarded a certain amount of GymCoins for calories burnt. GymCoins can then be used in a NFT platform where users can claim ownership to images of their interest and trade with each other. We could also potentially explore a gaming platform. Note that one can also trade GymCoins for cash with other users. Data storage and management as well as the trading process will be done on the Ethereum blockchain using Solidity and the User Interface will be derived from the Scaffold-ETH application. We expect this integrated platform to promote the circulation of GymCoin within its community and increase GymCoins’ value through interactions. With the rise of fitness tech and the gradual maturity of blockchain technology, we expect GymCoin to bridge the two markets.
        </p>
        <img src = "https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_3000/v1/collections/blog/future-fitness-industry/future-of-the-fitness-industry-5f731ac63ba7a5a8b65b00ad" alt = "Top Fitness Trends" width = "500" height = "400">
        </img>

        <h2>2. Core Concept</h2>
        <p><b>Users</b>: the core of GymCoin. We focus on the quantity and quality of users and strive to add socio-economic values to our users by implementing an interactive platform to motivate users and as well as smart contracting for monetary incentive. There are naturally two types of users—producers and consumers. A consumer is one that participates in daily work-outs, purchases gym tutorials, exchanges for GymCoin rewards, claims ownership to interesting collections of images, and interacts with others. A producer is one that trades GymCoins or shares his exercise experience and expertise with the exchange of GymCoins.
        </p>
        <p><b>Smart Contracts</b>: a monetary incentive to users, rewarding users with GymCoins and cash. We developed layered plans for cash bonuses catered to different needs of our users (Specified later).</p>
        <p><b>Crypto-currency</b>: crypto-transactions allowed between contracts and users to create a safe environment. Liquidity is preferred and promoted by the mechanisms.</p>
        <p><b>Scaffold-ETH</b>: a good visualization tool for smart contracts with diverse methods for User Interface. It would be the place of our main page, attracts users to interact with our smart contracts and enables users to query their current status/collections.</p>

        <h2>3. Gym Coin Mechanism</h2>
        <ul>
          <li>Access smart devices like watches/rings or running machines, choose your own type of exercise, and trace your heart rate & time for Calories.</li>
          <li>Get GymCoins for a certain amount of Calories, with a daily limit of 10 GymCoins.</li>
          <li>GymCoins can be transferred and have no amount limit.</li>
          <li>Multiple applications:</li>
            <ul>
              <li>Layered Plans for cash bonus:(Motivate personal work-out and transaction of GymCoins)</li>
                <ul>
                  <li><b>Contract #100</b>: Get 5 extra coins for 25 GymCoin per week and 3 penalty</li>
                  <li><b>Contract #200</b>: Get 7 extra coins for 30 GymCoin per week and 4 penalty</li>
                  <li><b>Contract #300</b>: Get 9 extra coins for 35 GymCoin per week and 5 penalty</li>
                </ul>
              <li>Post about your exercise insights and feels and share with your friends!</li>
            </ul>  
        </ul>
        <img src = "https://i.ibb.co/19QGpy0/Gym-Coin-3.jpg" alt = "Gym Coin Mechanism" width = "700" height = "400"></img>
        
        

        <h2>4. Gym Coin Usage</h2>
        <p>In the NFT platform, we would like to create multiple interesting collections with different topics which can be claimed by users with a certain amount of GymCoins and user-levels. The collections would be limited and can be transferred among users. We hope to bring interesting images as well as those with social responsibilities to our users and increase the socio-economic value of them.</p>
        <p>In the gaming platform, users can exchange GymCoins to customize their personal avatar with things like clothes, accessories, shoes, glasses, bags, etc. We will also include mechanisms to change  their physical appearance such as height, muscles, body fat, haircut, facial expressions, etc. Based on their involvement, users can increase their character level and unlock more friend connections and users to play with. Further down the line, we will also implement emotes and other methods of interaction. With these social interactions in place, socialization and communication between GymCoin users is promoted as well as the circulation of GymCoins.</p>
        
        <h2>5. Reward System & Proof of Work</h2>
        <p>In order to connect to the GymCoin platform, users are required to connect to smart devices and select the corresponding exercise. Using Apple Watches as an example, it will automatically calculate calories burnt through the user's heart rate. This is also our mechanism to make sure users don’t cheat since their heart rate can not be easily imitated by machines. With the guidance of health experts, we will determine the exchange rate between calories burnt and GymCoins. Once users exchange GymCoins from calories burnt, they can exchange them for cash through the use of smart-contracts or use them directly in the GymCoin social gaming platform. Also, users are recommended to use MetaMask as their interface to connect to our application website, which allows them to keep track of their behavior and double check their identities at each step with a high level of security.
        </p>
        

        <h2>6. Why (GymCoin on) Blockchain</h2>
        <li>It serves as vending machines, with secure transactions, lower compliance costs, and higher transaction speed.</li>
          <ul>
              <li><b>Authentic</b> transaction verified and confirmed by participants</li>
              <li><b>Immutable</b> transactions</li>
              <li><b>Decentralized</b> data with no fee required</li>
              <li><b>Non-intermediary</b> rewards for producers</li>
          </ul>  
        <li><b>Feasibility</b> – competitive among other decentralized industrial projects.</li>
          <ul>
              <li>Banking/Fintech</li>
              <li>Healthcare/Insurance</li>
              <li>Supply Chain Management</li>
              <li>Gaming</li>
          </ul>  
        <li><b>Traceability</b> – efficient contract management and data query.</li>
        


        <p>          </p>
        <p>          </p>
        <p>     _    </p>
        <p>          </p>
        <p>          </p>
        <p>     _    </p>
      </div>
        
      

    // </div>
  );
}

export default Home;
