const { assert, expect } = require("chai");
const { deployments, network, ethers } = require("hardhat");
const { developmentChain } = require("../helper-hardhat-config");

!developmentChain.includes(network.name)
  ? describe.skip
  : describe("Hey", () => {
      let deployer;
      let hey;
      beforeEach(async () => {
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);
        hey = await ethers.getContract("Hey", deployer);
      });
      describe("Constructor", () => {
        it("Set the Owner Address", async () => {
          const heyOwner = await hey.getOwner();
          assert.equal(heyOwner, deployer);
        });
      });
      describe("Greet Function", () => {
        it("Returns the greetings", async () => {
          const bytes32String = ethers.utils.formatBytes32String("Hello There");
          const greetString = await hey.greet(bytes32String);
          assert.equal(bytes32String, greetString.toString());
        });
      });
    });
