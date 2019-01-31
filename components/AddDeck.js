import React, { Component} from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { darkBlue, white, black } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'

function SubmitDeck ({ onPress }) {
  /*
  @Description external function handles display for submit function. Submission function is passed in as property.
  */
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>Create Deck</Text>
    </TouchableOpacity>
  )
}

class AddDeck extends Component {
  /*
  @Description local state contains input for deck name. Submission function takes input and creates new deck in redux and async storage using local state input as                   deck name.
  */
  state = {
    input: ''
  }
  handleTextInput = (text) => {
    const input = text
    this.setState(() => ({
      input
    }))
  }
  submit = () => {
    const deckName = this.state.input

    const newDeck = {
      title: deckName,
      questions: []
    }

    this.props.dispatch(addDeck({
      [deckName]: newDeck
    }))

    this.setState(() => ({
      input: ''
    }))

    this.props.navigation.navigate(
      'DeckList',
     )

    saveDeckTitle({ deckName, newDeck})
  }
    render (){
      const { input } = this.state
        return (
          <View style={styles.center}>
            <Text 
              style={styles.centerText}>Add a new deck</Text>
            <TextInput 
              value={input}
              placeholder='Deck Name'
              style={styles.input}
              onChangeText={(text) => { 
                this.setState({input: text})}}
            />
            <SubmitDeck onPress={this.submit} />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: darkBlue,
    padding: 12,
    borderRadius: 6,
    height: 50,
    marginLeft: 45,
    marginRight: 45,
  },
  AndroidSubmitBtn: {
    backgroundColor: darkBlue,
    padding: 12,
    borderRadius: 6,
    height: 60,
    paddingLeft: 45,
    paddingRight: 45,
  },
  submitBtnText: {
    color: white,
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    width: 195,
    borderWidth: 0.5,
    backgroundColor: white,
    color: black,
    borderColor: black,
    borderRadius: 20,
    marginLeft: 45,
    marginRight: 45,
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  },
  center: {
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center'
  },
  centerText: {
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    color: black,
    fontSize: 20
  }
})

export default connect()(AddDeck)