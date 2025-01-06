import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function page() {
    const signup = useLocalSearchParams()
  return (
    <View>
      <Text>page</Text>
    </View>
  )
}