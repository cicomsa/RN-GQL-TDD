import React from 'react'
import { AppRegistry } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import client from './apollo-client'
import MyRootComponent from './components/RootComponent'

const App = () => (
  <ApolloProvider client={client}>
    <MyRootComponent />
  </ApolloProvider>
);

export default App

AppRegistry.registerComponent('MyApplication', () => App);