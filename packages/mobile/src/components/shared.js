// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { plus } from 'sample-domain'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default function Shared() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>monorepo sample</Text>
      <Text style={styles.text}>1 + 2 = {plus(1, 2)}</Text>
    </View>
  )
}
