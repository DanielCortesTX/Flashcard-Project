import React, { Component} from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { darkBlue, white, red } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import DeckParticulars from './DeckParticulars'

class DeckDisplay extends Component {
  /*
    @Description component deckId from navigation. Other properties are gathered using deckId to connect to redux. Touchable inputs handle redirection to addCard
                  , quiz and remove deck.
  */
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    return {
      title: `${deckId}`
    }
  }
  render() {
    const { deckInfo } = this.props

    return (
      <View>
        {deckInfo !== undefined ? <DeckParticulars deckInfo={deckInfo}/> : <View></View>}
        <View style={styles.addButton}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deckId: deckInfo.title }
          )}><Text style={styles.centerText}>Add Card</Text></TouchableOpacity>
        </View>
        <View style={styles.quizButton}>
          <TouchableOpacity onPress={() => {
            clearLocalNotification()
              .then(setLocalNotification)
            this.props.navigation.navigate(
            'Quiz',
            { questions: deckInfo.questions }
          )
          }
          }><Text style={styles.centerText}>Quiz</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    color: white,
    fontSize: 20
  },
  addButton: {
    backgroundColor: darkBlue,
    borderRadius: Platform.OS === 'ios' ? 20 : 3,
    padding: 25,
    marginLeft: 19,
    marginRight: 19,
    marginTop: 20,
    justifyContent: 'center',
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowColor: 'rbga(80, 80, 200, 0.10)',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  quizButton: {
    backgroundColor: red,
    borderRadius: Platform.OS === 'ios' ? 20 : 3,
    padding: 25,
    marginLeft: 19,
    marginRight: 19,
    marginTop: 20,
    justifyContent: 'center',
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowColor: 'rbga(80, 80, 200, 0.10)',
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
})

function mapStateToProps (decks, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deckInfo: decks[deckId],
  }
}

export default connect(mapStateToProps)(DeckDisplay)