import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';


export function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
