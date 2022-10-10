import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "hardhat-tracer";
import "hardhat-gas-trackooor";
import "hardhat-contract-prompts";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  gasReporter: {
    enabled: false,
  },
};

export default config;
