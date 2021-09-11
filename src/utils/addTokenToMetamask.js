import { ChainId, SupportedNetwork, NETWORK_DETAIL } from "../constants";

export async function addTokenToMetamask(ethereum, id, symbol, network) {
  if (+ethereum.networkVersion !== ChainId[network]) {
    try {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          { ...NETWORK_DETAIL[ChainId[network]], metamaskAddable: undefined },
        ],
      });
    } catch (err) {
      console.error(`error adding network to metamask`, err);
    } finally {
      return;
    }
  }

  let tokenListURL;
  if (network === SupportedNetwork.XDAI)
    tokenListURL = "https://tokens.honeyswap.org";
  else if (network === SupportedNetwork.MATIC)
    tokenListURL =
      "https://info.idamurni.de/default.tokenlist.json"
      //"https://gateway.ipfs.io/ipns/tokens.uniswap.org"

  const response = await fetch(tokenListURL);

  if (!response.ok) {
    console.warn("could not fetch token list");
    return;
  }

  const { tokens } = await response.json();
  const token = tokens.find((tkn) => tkn.symbol === symbol);

  try {
    await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: id,
          symbol: symbol,
          decimals: token.decimals,
          image: token.logoURI,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}