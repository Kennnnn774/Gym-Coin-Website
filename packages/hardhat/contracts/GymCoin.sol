pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  // event SetPurpose(address sender, string purpose);

  // string public purpose = "Building Unstoppable Apps!!!";

  constructor() payable {
    // what should we do on deploy?
  }

  // function setPurpose(string memory newPurpose) public {
  //     purpose = newPurpose;
  //     console.log(msg.sender,"set purpose to",purpose);
  //     // emit SetPurpose(msg.sender, purpose);
  // }

  // to support receiving ETH by default
  receive() external payable {}
  fallback() external payable {}

  struct Exercise {
        bytes32 userID;   // Short name (up to 32 bytes)
        uint deviceID;    // The device ID for user
        uint gymcoin;    // GymCoin amount
    }

    
  struct User {
      bytes32 userID; // Unique ID for each user
      uint [] deviceIDs; // Unique ID for each device
      uint balance; // Balance of GymCoins
      uint balance_reset; // Keep track of total balance at the previous round
      uint contractID; // List of contracts signed
      bool registered; // true means one has already registered and cannot add_user again
      uint timeSigned; // The baseline time of signing one Contract
      // DateTime time;
      // mapping(address => uint) approved; //Approved spenders and their limits
      // mapping(address => uint) approvedBy; //Users who approved this user and the limits
      // unit level;
  }

  struct Post { // Could also do Like System
      // uint postID;
      bytes32 userID; // Unique ID for each user
      string context;
      uint time;
      // uint numberOfLikes;
  }

  mapping(address => User) public Users;

  function Register(bytes32 userid, uint [] memory deviceIDs) public {
        User storage sender = Users[msg.sender];
        require(!sender.registered, "You have already registered");

        sender.userID = userid;
        sender.deviceIDs = deviceIDs;
        sender.balance = 0;
        sender.balance_reset = 0;
        sender.contractID = 0;
        sender.registered = true;
  }

  function add_device(uint newDeviceID) public {
        User storage sender = Users[msg.sender];
        require(sender.registered == true, "You have not registered.");

        sender.deviceIDs.push(newDeviceID);
  }

  function add_exercise(bytes32 userid, uint deviceid, uint heartrate1, uint workout_time1, uint calories1) public {
        User storage sender = Users[msg.sender];
        require(sender.registered == true, "You have not registered.");
        require(sender.userID == userid, "Wrong User ID");

        // Check if the device is recorded
        bool Contain = false;
        for (uint i=0; i < sender.deviceIDs.length; i++) {
            if (deviceid == sender.deviceIDs[i]) { Contain = true; }
        }
        require(Contain == true, "Must use the correct device");

        sender.balance += reward(heartrate1, workout_time1, calories1);
        // supply += reward(heartrate1, workout_time1, calories1);
  }

  function reward(uint heartrate1, uint workout_time1, uint calories1) private pure returns(uint earned){
      //The formula will divide by the heartrate to make it fair to those people who do weight training
      earned = calories1 / heartrate1 * workout_time1 / 2000;
  }

  function transfer(address receiver, uint amount) public returns (bool) {
        // Teansfer GymCoin
        require(Users[msg.sender].registered && Users[receiver].registered, "Both users must be registered.");

        require(Users[msg.sender].balance >= amount, "Insufficient balance.");
        require(amount >= 0);

        Users[msg.sender].balance -= amount; // GymCoin
        Users[receiver].balance += amount;
        // emit Transfer(msg.sender, receiver, amount);
        return true;
    }

  Post[] public Posts;

  function add_post(string memory context) public {
        User storage user_sender = Users[msg.sender];
        require(user_sender.registered == true, "You have not registered.");
        // require(user_sender.userID == userid, "You must post for yourself");
        Posts.push(Post(user_sender.userID,context, block.timestamp) );
  }

  function watchFivePosts(bytes32 userid) public view returns (string[] memory, uint[] memory) {
        User storage sender = Users[msg.sender];
        require(sender.registered == true, "You have not registered.");

        string [] memory curr_posts = new string [](5);
        uint [] memory curr_posts_time = new uint [](5);

        require(Posts.length >= 1, "No posts so far");
        //pre-process
        curr_posts[0] = "Empty";
        curr_posts_time[0] = block.timestamp;
        // try catch
        uint count = 0;
        for (uint i = Posts.length - 1; i > 0; i--) {
            if (userid == Posts[i].userID) {
                curr_posts[count] = Posts[i].context;
                curr_posts_time[count] = Posts[i].time;
                count ++;
                if (count == 5) {return (curr_posts, curr_posts_time);}
            }
        }
        return (curr_posts, curr_posts_time);
    }


  function signContract(uint contractID) public {
      User storage sender = Users[msg.sender];
      require(sender.registered == true, "You have not registered.");
      require(sender.contractID == 0, "You've already signed a contract. Please cancel it before you sign a new one.");

      sender.contractID = contractID;

      sender.timeSigned = block.timestamp;
      // sender.time = DateTime();
  }

  function cancelContract() public {
      User storage sender = Users[msg.sender];
      require(sender.registered == true, "You have not registered.");

      sender.contractID = 0;
  }

  function commitContract() public {
      User storage sender = Users[msg.sender];
      uint curr_time = block.timestamp - sender.timeSigned;

      if (sender.contractID == 100) {
          if (curr_time >= 1 seconds && curr_time <= 1 weeks + 1 days) {
              if (sender.balance - sender.balance_reset >= 25){ sender.balance += 5;} 
              else { sender.balance -= 3;} 
          }
      } if (sender.contractID == 200) {
          if (curr_time >= 1 seconds && curr_time <= 1 weeks + 1 days) {
              if (sender.balance - sender.balance_reset >= 30){ sender.balance += 7;} 
              else { sender.balance -= 4;} 
          }
      } if (sender.contractID == 300) {
          if (curr_time >= 1 seconds && curr_time <= 1 weeks + 1 days) {
              if (sender.balance - sender.balance_reset >= 35){ sender.balance += 9;} 
              else {sender.balance -= 5;} 
          }
      }  
      sender.balance_reset = sender.balance;
  }

}
