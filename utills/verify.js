const { run } = require("hardhat");

const verify = async (contractAdress, args) => {
  console.log("verifing contract...");
  try {
    await run("verify:verify", {
      address: contractAdress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(e);
    }
  }
};

module.exports = { verify };
