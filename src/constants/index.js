export const SupportedNetwork = Object.freeze({
  // MAINNET: "Mainnet",
  // XDAI: "xDAI",
  MATIC: "MATIC",
});

export const ChainId = Object.freeze({
  // [SupportedNetwork.MAINNET]: 1,
  // [SupportedNetwork.XDAI]: 100,
  [SupportedNetwork.MATIC]: 137,
});

export const SupportedNetworkForChainId = Object.freeze({
  // [ChainId[SupportedNetwork.MAINNET]]: SupportedNetwork.MAINNET,
  // [ChainId[SupportedNetwork.XDAI]]: SupportedNetwork.XDAI,
  [ChainId[SupportedNetwork.MATIC]]: SupportedNetwork.MATIC,
});

export const FACTORY_ADDRESS = {
  // [SupportedNetwork.MAINNET]: "0xd34971BaB6E5E356fd250715F5dE0492BB070452",
  // [SupportedNetwork.XDAI]: "0xa818b4f111ccac7aa31d0bcc0806d64f2e0737d7",
  [SupportedNetwork.MATIC]: "0x8F8c3A7ccD2980b9A7b5cfadc5d1Cf638dc1427A"
};

export const NATIVE_CURRENCY_SYMBOL = {
  // [SupportedNetwork.MAINNET]: "ETH",
  // [SupportedNetwork.XDAI]: "xDAI",
  [SupportedNetwork.MATIC]: "MATIC",
};

export const NATIVE_CURRENCY_WRAPPER = {
  // [SupportedNetwork.MAINNET]: {
  //   symbol: "WETH",
  //   address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  // },
  // [SupportedNetwork.XDAI]: {
  //   symbol: "WXDAI",
  //   address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
  // },
  [SupportedNetwork.MATIC]: {
    symbol: "WMATIC",
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"//"0xa2d4D881f1267d590f5C582FD98CbCa90e36F832",
  },
};

export const IDA_ADDRESS = {
  // [SupportedNetwork.MAINNET]: "0xc3589f56b6869824804a5ea29f2c9886af1b0fce",
  // [SupportedNetwork.XDAI]: "0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9",
  [SupportedNetwork.MATIC]: "0xccae06ec0787c07d7df5a60856c73a113fc7cf9a",
};

export const ETHERSCAN_PREFIXES = {
  // [SupportedNetwork.MAINNET]: "",
};

export const BUNDLE_ID = "1";

export const timeframeOptions = {
  WEEK: "1 week",
  MONTH: "1 month",
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: "All time",
};

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
  "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
  "0xe31debd7abff90b06bca21010dd860d8701fd901",
  "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
  "0xb7d918d7631fcdd0954205e3a6b205a10a31a085"
];

// pair blacklist
export const PAIR_BLACKLIST = ["0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5"];

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = [
  "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
];

export const NETWORK_DETAIL = {
  // 100: {
  //   chainId: "0x64",
  //   chainName: "xDAI",
  //   nativeCurrency: {
  //     name: "xDAI",
  //     symbol: "xDAI",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://rpc.xdaichain.com/"],
  //   blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
  //   metamaskAddable: true,
  // },
  137: {
    chainId: 137,
    chainName: "Polygon",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
    blockExplorerUrls: ["https://polygonscan.com"],
    metamaskAddable: true,
  },
};

export const NETWORK_COLORS = {
  // [SupportedNetwork.XDAI]: {
  //   hex: "#FCC941",
  //   rgba: "rgba(252, 201, 65, 0)",
  // },
  [SupportedNetwork.MATIC]: {
    hex: "#8247E5",
    rgba: "rgba(130, 71, 229, 0)",
  },
};
