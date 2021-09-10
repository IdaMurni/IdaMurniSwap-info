import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { SupportedNetwork } from "../constants";

export const clients = {
  // [SupportedNetwork.MAINNET]: new ApolloClient({
  //   link: new HttpLink({
  //     // TODO: change this when release day comes
  //     uri: "https://api.thegraph.com/subgraphs/name/luzzif/swapr-mainnet-alpha",
  //   }),
  //   cache: new InMemoryCache(),
  //   shouldBatch: true,
  // }),
  // [SupportedNetwork.XDAI]: new ApolloClient({
  //   link: new HttpLink({
  //     uri: "https://api.thegraph.com/subgraphs/name/1hive/honeyswap-xdai",
  //   }),
  //   cache: new InMemoryCache(),
  //   shouldBatch: true,
  // }),
  [SupportedNetwork.MATIC]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.studio.thegraph.com/query/6940/exchangeida/v0.0.5" // <--- working example here!!
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
};

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/index-node/graphql",
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
});

export const blockClients = {
  // [SupportedNetwork.MAINNET]: new ApolloClient({
  //   link: new HttpLink({
  //     uri:
  //       "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",
  //   }),
  //   cache: new InMemoryCache(),
  // }),
  // [SupportedNetwork.XDAI]: new ApolloClient({
  //   link: new HttpLink({
  //     uri: "https://api.thegraph.com/subgraphs/name/1hive/xdai-blocks",
  //   }),
  //   cache: new InMemoryCache(),
  // }),
  [SupportedNetwork.MATIC]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/elkfinance/matic-blocks",
    }),
    cache: new InMemoryCache(),
  }),
};
