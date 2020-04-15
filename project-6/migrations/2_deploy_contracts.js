// migrating the appropriate contracts
var FarmerRole = artifacts.require("./coffeeaccesscontrol/FarmerRole.sol");
var DistributorRole = artifacts.require("./coffeeaccesscontrol/DistributorRole.sol");
var RetailerRole = artifacts.require("./coffeeaccesscontrol/RetailerRole.sol");
var ConsumerRole = artifacts.require("./coffeeaccesscontrol/ConsumerRole.sol");
var Ownable = artifacts.require("./coffeecore/Ownable.sol");
var SupplyChain = artifacts.require("./coffeebase/SupplyChain.sol");

module.exports = function(deployer) {
  //deployer.deploy(FarmerRole);
  //deployer.deploy(DistributorRole);
  //deployer.deploy(RetailerRole);
  //deployer.deploy(ConsumerRole);
  //deployer.deploy(Ownable);
  deployer.deploy(SupplyChain);
};
