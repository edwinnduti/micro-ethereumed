const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const balance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Deployer balance: ", balance.toString());

  const likeContractFactory = await hre.ethers.getContractFactory("LikePortal");
  const likeContract = await likeContractFactory.deploy();
  await likeContract.deployed();

  console.log("Contract deployed to:", likeContract.address);
};

const runDeploy = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runDeploy();
