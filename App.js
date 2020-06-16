import React from 'react';
import { AppRegistry } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MyRootComponent from './components/RootComponent'

// Create the client as outlined in the setup guide
export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <MyRootComponent />
  </ApolloProvider>
);

export default App

AppRegistry.registerComponent('MyApplication', () => App);