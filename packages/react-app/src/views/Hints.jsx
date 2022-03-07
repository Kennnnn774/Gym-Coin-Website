import { Select } from "antd";
import React, { useState } from "react";
import { utils } from "ethers";

import { useTokenList } from "eth-hooks/dapps/dex";
import { Address, AddressInput } from "../components";

const { Option } = Select;

export default function Hints({ yourLocalBalance, mainnetProvider, price, address }) {
  // Get a list of tokens from a tokenlist -> see tokenlists.org!
  const [selectedToken, setSelectedToken] = useState("Pick a token!");
  const listOfTokens = useTokenList(
    "https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json",
  );

  return (
    <div>
      <div style={{ marginLeft: 200, marginRight:100, marginTop: 10, textAlign: "left" }}>
        <h1>
            User Instructions
        </h1>

        <h2>1. Set up Metamask</h2>
        <p>
          <ol type = "a">
            <li>Download Metamask (only available as Chrome extension): <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">here</a> </li>
            <li>Register an account</li>
            <li>Change network to Ropsten Test Network</li>
            <li>Click “Buy” to obtain test Ether</li>
            <li>Scroll down to “Get Ether”</li>
            <li>Click “request 1 ether from faucet”</li>
            <li>Now you’re all set to interact with our functions!</li>
          </ol>
        </p>
        <img src = "https://i.ibb.co/gy66pCT/Screen-Shot-2022-02-21-at-9-06-37-PM.png" alt = "Metamask Account" width = "400" height = "650"></img>


        <h2>2. Register Gym Coin Account</h2>
        <p>
          <ol type = "a">
            <li>
              Register with a string and convert it into Byte32 using "#" icon as your User ID & a integer list as initial smart devices
            </li>
          </ol>
        </p>
        <img src = "https://i.ibb.co/c2JKM9w/Screen-Shot-2022-02-21-at-7-17-58-PM.png" alt = "Register Gym Coin Account" width = "750" height = "200"></img>

        <h2>3. Sign/Cancel Contract</h2>
        <p>
          <ol type = "a">
            <li>Before loading exercise information and get rewards, you can sign up for an exercise plan</li>
            <li>Input a number from [100, 200, 300] to the function SignContract, which would give you extra bonus</li>
              <ol type="1">
                <li><b>Contract #100</b>: Get 5 extra coins for 25 GymCoin per week and 3 penalty</li>
                <li><b>Contract #200</b>: Get 7 extra coins for 30 GymCoin per week and 4 penalty</li>
                <li><b>Contract #300</b>: Get 9 extra coins for 35 GymCoin per week and 5 penalty</li>
              </ol>
            <li>You are allowed to cancel your current contract at any time, but the bonus would only count after you sign a new one</li>
          </ol>
        </p>

        <h2>4. Add Exercise</h2>
        <p>
          <ol type = "a">
            <li>For each Sser ID, you can choose the device you’re inputting exercise data from</li>
            <li>Then you can input your heart rate, workout time in minutes, and calories</li>
            <li>The addExercise() function will automatically reward you the GymCoins corresponding to your exercises</li>
          </ol>
        </p>
        <img src = "https://i.ibb.co/mqJ1gYF/Screen-Shot-2022-02-21-at-7-22-32-PM.png" alt = "Register Gym Coin Account" width = "750" height = "300"></img>

        <h2>5. Transfer</h2>
        <p>
          <ol type = "a">
            <li>Our platform also allows you to transfer Gym Coin to another user if you know their address</li>
            <li>Our code will check that you have enough balance for the transfer</li>
            <li>Once you transacted with another user, they will be automatically added to your Friend List</li>
          </ol>
        </p>
        <img src = "https://i.ibb.co/SJpDDtc/Screen-Shot-2022-02-21-at-8-01-54-PM.png" alt = "Register Gym Coin Account" width = "750" height = "200"></img>

        <h2>6. Add Device</h2>
        <p>
          <ol type = "a">
            <li>You can add more devices whenever you want</li>
            <li>For example, you can add Fitbit, Apple Watch, Treadmail, Elliptical machines etc</li>
          </ol>
        </p>

        <h2>7. Post</h2>
        <p>
          <ol type = "a">
            <li>Our platform encourages users to share their exercise insights. Please post comments on your experiences. </li>
            <li>Your posts on your experiences will be pushed to all users on your friend list. </li>
          </ol>
        </p>

        {/* <h2>9. Watch Five Posts</h2>
        <p>
          <ol type = "a">
            <li>You can check the most recent five posts of a user. </li>
          </ol>
        </p> */}

        <p>          </p>
        <p>          </p>
        <p>     _    </p>
        <p>          </p>
        <p>          </p>
        <p>     _    </p>


      </div>
    

    {/* 
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>👷</span>
          Edit your <b>contract</b> in
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
            >
            packages/hardhat/contracts
          </span>
          <span style={{ marginRight: 8 }}>🛰</span>
          <b>compile/deploy</b> with
          <span
            className="highlight"
            style={{ marginLeft: 4, padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn run deploy
          </span>
        </div>

        <div style={{ margin: 32 }}>
          <span style={{ marginRight: 8 }}>🚀</span>
          Your <b>contract artifacts</b> are automatically injected into your frontend at
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            packages/react-app/src/contracts/
          </span>
        </div>

        <div style={{ margin: 32 }}>
          <span style={{ marginRight: 8 }}>🎛</span>
          Edit your <b>frontend</b> in
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            packages/reactapp/src/App.js
          </span>
        </div>

        <div style={{ marginTop: 32 }}>
          <span style={{ marginRight: 8 }}>🔭</span>
          explore the
          <span
            className="highlight"
            style={{
              marginLeft: 4,
              marginRight: 4,
            
              padding: 4,
              borderRadius: 4,
              fontWeight: "bolder",
            }}
          >
            🖇 hooks
          </span>
          and
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            📦 components
          </span>
        </div>

        <div style={{ marginTop: 32 }}>
          for example, the
          <span
            className="highlight"
            style={{ margin: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            useBalance()
          </span>{" "}
          hook keeps track of your balance: <b>{utils.formatEther(yourLocalBalance || 0)}</b>
        </div>

        <div style={{ margin: 8 }}>
          <div>
            <b>useTokenList()</b> can get you an array of tokens from{" "}
            <a href="https://tokenlists.org" target="_blank" rel="noopener noreferrer">
              tokenlists.org!
            </a>
          </div>
          <Select
            showSearch
            value={selectedToken}
            onChange={value => {
              console.log(`selected ${value}`);
              setSelectedToken(value);
            }}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            optionFilterProp="children"
          >
            {listOfTokens.map(token => (
              <Option key={token.address + "_" + token.symbol} value={token.symbol}>
                {token.symbol}
              </Option>
            ))}
          </Select>
        </div>

        <div style={{ marginTop: 32 }}>
          as you build your app you&apos;ll need web3 specific components like an
          <span
            className="highlight"
            style={{ margin: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            {"<AddressInput/>"}
          </span>
          component:
          <div style={{ width: 350, padding: 16, margin: "auto" }}>
            <AddressInput ensProvider={mainnetProvider} />
          </div>
          <div>(try putting in your address, an ens address, or scanning a QR code)</div>
        </div>

        <div style={{ marginTop: 32 }}>
          this balance could be multiplied by
          <span
            className="highlight"
            style={{ margin: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            price
          </span>{" "}
          that is loaded with the
          <span
            className="highlight"
            style={{ margin: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            usePrice
          </span>{" "}
          hook with the current value: <b>${price}</b>
        </div>

        <div style={{ marginTop: 32 }}>
          <span style={{ marginRight: 8 }}>💧</span>
          use the <b>faucet</b> to send funds to
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            <Address address={address} minimized /> {address}
          </span>
        </div>

        <div style={{ marginTop: 32 }}>
          <span style={{ marginRight: 8 }}>📡</span>
          deploy to a testnet or mainnet by editing
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            packages/hardhat/hardhat.config.js
          </span>
          and running
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn run deploy
          </span>
        </div>

        <div style={{ marginTop: 32 }}>
          <span style={{ marginRight: 8 }}>🔑</span>
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn run generate
          </span>
          will create a deployer account in
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            packages/hardhat
          </span>
          <div style={{ marginTop: 8 }}>
            (use{" "}
            <span
              className="highlight"
              style={{
                marginLeft: 4,
                padding: 4,
                borderRadius: 4,
                fontWeight: "bolder",
              }}
            >
              yarn run account
            </span>{" "}
            to display deployer address and balance)
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <span style={{ marginRight: 8 }}>⚙️</span>
          build your app with
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn run build
          </span>
        </div>

        <div style={{ marginTop: 32 }}>
          <span style={{ marginRight: 8 }}>🚢</span>
          ship it!
          <span
            className="highlight"
            style={{ marginLeft: 4, padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn run surge
          </span>
          or
          <span
            className="highlight"
            style={{ marginLeft: 4, padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn run s3
          </span>
          or
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn run ipfs
          </span>
        </div>

        <div style={{ marginTop: 32 }}>
          <span style={{ marginRight: 8 }}>💬</span>
          for support, join this
          <span
            className="highlight"
            style={{ marginLeft: 4,  padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA">
              Telegram Chat
            </a>
          </span>
        </div>
        <div style={{ padding: 128 }}>
          🛠 Check out your browser&apos;s developer console for more... (inspect console) 🚀
        </div>
      */}
    </div>
      
    
  );
}
