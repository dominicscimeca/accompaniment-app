import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './accompaniment-service/accompaniment-service-client'

import Quote from "./Quote";

export default function App() {
  return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!!</Text>
          <Quote/>
        </View>
      </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
