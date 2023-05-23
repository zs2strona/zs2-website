import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhxdefy41i4p01tb20nd25vb/master',
  cache: new InMemoryCache(),
})

export default client
