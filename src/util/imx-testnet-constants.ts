/**
 * Constants for IMX zkEVM Testnet (Chain ID 13473)
 */

// Default RPC URL - can be overridden via JSON_RPC_PROVIDER_IMX_ZKEVM_TESTNET environment variable
export const IMX_ZKEVM_TESTNET_RPC_URL =
  process.env.JSON_RPC_PROVIDER_IMX_ZKEVM_TESTNET || 'https://rpc.testnet.immutable.com';

// Default Subgraph URL - can be overridden via IMX_ZKEVM_TESTNET_SUBGRAPH_URL environment variable
export const IMX_ZKEVM_TESTNET_SUBGRAPH_URL =
  process.env.IMX_ZKEVM_TESTNET_SUBGRAPH_URL || 'https://qiyd866y1l.execute-api.ap-southeast-2.amazonaws.com/prod';
