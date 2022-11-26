const { ethers } = require("hardhat");


async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("deploying contract");
  const SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed()

  console.log(`deploying contract to: ${SimpleStorage.address}`);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 