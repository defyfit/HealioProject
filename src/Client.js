import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkTransport = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj4bfxxmmf77y01429cvc5kk7"
})


const client = new ApolloClient({
    networkInterface: networkTransport
  })







export default client