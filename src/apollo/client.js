import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://web3-thegraph-mesos.thestratos.org/subgraphs/name/exoswap/v2-subgraph',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://web3-thegraph-mesos.thestratos.org/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://web3-thegraph-mesos.thestratos.org/subgraphs/name/exoswap/stratos-blocks',
  }),
  cache: new InMemoryCache(),
})
