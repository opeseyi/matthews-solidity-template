// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import { Console as console } from "./library/Console.sol";

contract Hey {
  address private immutable i_owner;

  constructor() {
    i_owner = msg.sender;
  }

  function greet(bytes32 _greetings) external view returns (bytes32 greetStr) {
    console.log(_greetings, i_owner);
    greetStr = _greetings;
  }

  function getOwner() external view returns (address owner) {
    owner = i_owner;
  }
}
