import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhz48gql2gtd01uh6pdxdcrs/master',
  cache: new InMemoryCache(),
})

export default client
