const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const likeContractFactory = await hre.ethers.getContractFactory("LikePortal");
  const likeContract = await likeContractFactory.deploy();
  await likeContract.deployed();

  console.log("Contract deployed to:", likeContract.address);
  console.log("Contract deployed by: ", owner.address);

  let likeTotalCount;
  likeTotalCount = await likeContract.getTotalLikes();

  let likeTxn = await likeContract.like();
  await likeTxn.wait();

  likeTotalCount = await likeContract.getTotalLikes();

  likeTxn = await likeContract.connect(randomPerson).like();
  await likeTxn.wait();

  likeTotalCount = await likeContract.getTotalLikes();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
