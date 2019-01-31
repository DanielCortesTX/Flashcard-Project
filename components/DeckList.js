import React, { Component} from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { darkBlue, black } from '../utils/colors'
import DeckListDisplay from './DeckListDisplay'
import { getDecks } from '../utils/api'
import { AppLoading} from 'expo'

class DeckList extends Component {
  /*
    @Description app gets decks object from redux and then a list of decks, their names and remaining cards from the object. Each item in list has navigation
                    property that redirects to deck display.
  */
  state = {
    ready: false,
  }
  componentDidMount(){
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})))
  }
  render() {
    const { decks } = this.props
    const { ready } = this.state
    if(ready === false) {
      return <AppLoading />
    }
    return (
      <View>
          {decks.length !== 0 ?  
            <ScrollView>
              <Text style={styles.centerText}>List of decks</Text>
              {decks.map((deck) => <View style={styles.deckDisplay}><TouchableOpacity onPress={() => this.props.navigation.navigate(
                'DeckDisplay',
                { deckId: deck }
              )}>
                <DeckListDisplay deck={deck}/>
              </TouchableOpacity></View>)}
            </ScrollView>
            : <Text style={styles.centerText}>No decks to display</Text>
          }
      </View>
      )
    }
}

const styles = StyleSheet.create({
  centerText: {
    marginTop: 10,
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    color: black,
    fontSize: 20
  },
  deckDisplay: {
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
  }
})

function mapStateToProps (decks) {
    const deckList = Object.keys(decks)
    return {
        decks: deckList
    }
}

export default connect(mapStateToProps)(DeckList)