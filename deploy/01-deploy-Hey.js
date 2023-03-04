const { network } = require("hardhat");
const { networkConfig, developmentChain } = require("../helper-hardhat-config");
const { verify } = require("../utills/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  // const chainId = network.config.chainId;

  const args = [];

  const hey = await deploy("Hey", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmation: network.config.blockConfirmation || 1,
  });

  // To verify
  // if (
  //   !developmentChain.includes(network.name) &&
  //   process.env.ETHERSCAN_API_KEY
  // ) {
  //   await verify(hey.address, args);
  // }

  log(".............................................");
};

module.exports.tags = ["all", "Hey"];
