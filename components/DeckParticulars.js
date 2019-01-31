import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { black } from '../utils/colors'

export default function DeckParticulars ({deckInfo}) {
  /*
    @Description deck propeties are inherited and used to display remaining card(s) in deck
  */
  return (
    <View>
      {deckInfo.questions.length === 1 
      ? <Text style={styles.centerText}>There is {deckInfo.questions.length} card in this deck</Text>
      : <Text style={styles.centerText}>There are {deckInfo.questions.length} cards in this deck</Text>}
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