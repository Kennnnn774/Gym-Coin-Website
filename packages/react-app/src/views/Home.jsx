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
    <div>
      <div style={{margin: 100, textAlign: "left" }}>
        <h1>
          Abstract
        </h1> {/* Abstract */}
        <p>
          Nowadays, physical fitness and bodybuilding have become unprecedentedly popular. While it is usually easy for people to start doing exercises, one may find it difficult to persevere. There are many factors that lead to this phenomenon, including busy schedules, intense training plans, no workout buddies, etc. All these factors gradually lead to a loss in motivation, causing people to become more reluctant, and eventually stop working out completely. Even though pre-workout products can relieve this unwillingness, its effect is temporary and can lead to dependence on the product. With the development of technology and the global market, blockchain technology and cryptocurrency came with it and inspired us to develop a blockchain-based application that incorporates exercising, entertainment, and socialization through the implementation of a platform that rewards users for staying fit and active. By creating such a platform that targets people’s demand for personalized socializing and motivation for exercising, we expect to promote a healthy lifestyle, the growth of the gym industry, and a way for people into fitness to socialize.
        </p>

        <h2>1. Introduction</h2>
        <p>The idea is that users use smart devices like watches/rings or treadmills, choose their desired type of exercise, and trace their heart rate & time for calories consumption. One can get a certain amount of GymCoins for calories burnt. The GymCoins can then be used in a gaming platform in which users customize their own avatars. All in-game item purchases are done with GymCoins, and one can trade GymCoins for cash with other users. Data storage and management as well as the trading process will be done on the Ethereum blockchain using Solidity. We expect this integrated platform will promote the circulation of GymCoin within its community and increase GymCoin’s value through interactions. With fitness tech being the rising trend of the fitness industry and the gradual maturity of blockchain technology, we expect GymCoin to bridge the two markets. 
        </p>
        <img src = "https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_3000/v1/collections/blog/future-fitness-industry/future-of-the-fitness-industry-5f731ac63ba7a5a8b65b00ad" alt = "Top Fitness Trends" width = "500" height = "400">
        </img>

        <h2>2. Core Concept</h2>
        <p>Users: the core of GymCoin. We focus on the quantity and quality of users and strive to add socio-economic values to our users by implementing an interactive platform to motivate users and as well as smart contracting for monetary incentive. There are naturally two types of users—producers and consumers. A consumer is one that participates in daily work-outs, purchases gym tutorials, exchanges for GymCoin rewards, builds on and improves their social characteristics, and interacts with others. A producer is one that trades GymCoins or shares his exercise experience and expertise with the exchange of GymCoins. Smart Contracts: a monetary incentive to users, rewarding users with GymCoins and cash. We developed layered plans for cash bonuses catered to different needs of our users (Specified later). Crypto-currency: crypto-transactions allowed between contracts and users to create a safe environment. Liquidity is preferred and promoted by the mechanisms.
        </p>

        <h2>3. Gym Coin Mechanism</h2>
        <ul>
          <li>Access smart devices like watches/rings or running machines, choose your own type of exercise, and trace your heart rate & time for Calories.</li>
          <li>Get 1 GymCoin for a certain amount of Calories, with a daily limit of 3 GymCoins.</li>
          <li>GymCoins can be transferred and have no amount limit.</li>
          <li>Multiple Applications:</li>
            <ul>
              <li>Layered Plans for cash bonus:(Motivate personal work-out and transaction of GymCoins)</li>
                <ul>
                  <li>Get $3 for 7.5 GymCoin per week and $1 penalty</li>
                  <li>Get $5 for 10 GymCoin per week and $3 penalty</li>
                </ul>
              <li>Post about your exercise insights and feels and share with your friends!</li>
            </ul>  
        </ul>
        <font size="2"
          face="verdana"
          color="red">
            TODO: data structure image: need to figure out file location
        </font>
      

        <h2>4. Gym Coin Data Structure</h2>
        <p>Detailed interaction with Smart divides (would be specified later with visualizations)
        
        </p>
        

        <h2>5. Gym Coin Usage</h2>
        <p>In the gaming platform, users can exchange GymCoins to customize their personal avatar with things like clothes, accessories, shoes, glasses, bags, etc. We will also include mechanisms to change  their physical appearance such as height, muscles, body fat, haircut, facial expressions, etc. Based on their involvement, users can increase their character level and unlock more friend connections and users to play with. Further down the line, we will also implement emotes and other methods of interaction. With these social interactions in place, socialization and communication between GymCoin users is promoted as well as the circulation of GymCoins.
        </p>

        <h2>6. Reward System & Anti-Cheating</h2>
        <p>In order to connect to the GymCoin platform, users are required to connect to smart devices and select the corresponding exercise. Using Apple Watches as an example, it will automatically calculate calories burnt through the user's heart rate. This is also our mechanism to make sure users don’t cheat since their heart rate can not be easily imitated by machines. With the guidance of health experts, we will determine the exchange rate between calories burnt and GymCoins. Once users exchange GymCoins from calories burnt, they can exchange them for cash through the use of smart-contracts or use them directly in the GymCoin social gaming platform.
        </p>
      </div>





        {/*
        <span style={{ marginRight: 8, textAlign: "left"}}>📝</span>
        This is GymCoin Whitepaper{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/react-app/src/views/Home.jsx
        </span>

              <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>✏️</span>
        Edit your smart contract {" "}
        <span
          className="highlight"
          style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          YourContract.sol
        </span>{" "}in{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/hardhat/contracts
        </span>
      </div>
      {!purpose?<div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>👷‍♀️</span>
        You haven't deployed your contract yet, run
        <span
          className="highlight"
          style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn chain
        </span> and <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn deploy
          </span> to deploy your first contract!
      </div>:<div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤓</span>
        The "purpose" variable from your contract is{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          {purpose}
        </span>
      </div>}

      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤖</span>
        An example prop of your balance{" "}
        <span style={{ fontWeight: "bold", color: "green" }}>({ethers.utils.formatEther(yourLocalBalance)})</span> was
        passed into the
        <span
          className="highlight"
          style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          Home.jsx
        </span>{" "}
        component from
        <span
          className="highlight"
          style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          App.jsx
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>💭</span>
        Check out the <Link to="/hints">"Hints"</Link> tab for more tips.
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🛠</span>
        Tinker with your smart contract using the <Link to="/debug">"Debug Contract"</Link> tab.
      </div>
         */}
        
      

    </div>
  );
}

export default Home;
