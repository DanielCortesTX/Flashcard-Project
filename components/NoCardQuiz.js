import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { black } from '../utils/colors'

export default function Quiz () {
  /*
    @Description view renders when user access quiz, but no cards are present.
  */
  return (
    <View>
      <Text style={styles.centerText}>There are no cards in this deck.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  centerText: {
    marginTop: 10,
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    color: black,
    fontSize: 20
  }
})