import React, { Component} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { white } from '../utils/colors'

class DeckListDisplay extends Component {
  /*
    @Description deck properties are inherited and used to display name and cards present.
  */
  render() {
    const { deckId, deckInfo } = this.props
    const cardsLength = deckInfo.questions.length
    return (
    <View>
      <Text style={styles.center}>{deckId}</Text>
      {cardsLength === 1 ? 
        <Text style={styles.center}>has {cardsLength} card</Text> :
        <Text style={styles.center}>has {cardsLength} cards</Text>
      }
    </View>
  )
  }
}

const styles = StyleSheet.create({
  center: {
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    color: white,
    fontSize: 20
  }
})

function mapStateToProps (decks, { deck }) {
  const deckId = deck

  return {
    deckId,
    deckInfo: decks[deckId] !== undefined ? decks[deckId] : {title:'', questions:[]},
  }
}

export default connect(mapStateToProps)(DeckListDisplay)