const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Chicken NFT", function () {
  it("Chicken NFT init", async function () {
    const ChickenRunV5  = await ethers.getContractFactory("ChickenRunV5");
    const chickenRunV5 = await ChickenRunV5.deploy();
    await chickenRunV5.deployed();

    //expect(await chickenRunV5.initialize("0x183D17Ab2F840eB6B0239ACe121A1e3E6E50F53D"));
    //console.log(chickenRunV5.address);

    //const setGreetingTx = await chickenRunV5.initialize("0x183D17Ab2F840eB6B0239ACe121A1e3E6E50F53D");
    //console.log(setGreetingTx);

    //const gbOwner = await chickenRunV5.gbOwner().then( result => console.log(result));
    //console.log(gbOwner);

   // const v1 = await chickenRunV5.gbHoldersMaxMint().then( result => console.log(result));
   const v1 = await chickenRunV5.mint(1);
   //console.log(v1)


    

  });
});
