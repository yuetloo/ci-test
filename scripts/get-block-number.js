const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners()
  console.log('deployer.address: ', deployer.address)

  const blockNumber = await hre.ethers.provider.getBlockNumber()
  console.log(`network ${hre.network.name} block number:`, blockNumber.toString())

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
