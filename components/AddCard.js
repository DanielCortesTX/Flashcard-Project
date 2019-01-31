import React, { Component} from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity, TextInput } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { darkBlue, white, black } from '../utils/colors'
import { addCardToDeck } from '../utils/api'

function SubmitCard ({ onPress }) {
  /*
  @Description separate component for submission. submit function is passed in as property
  */
    return (
      <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
        onPress={onPress}>
        <Text style={styles.submitBtnText}>Add Card</Text>
      </TouchableOpacity>
    )
  }

class AddCard extends Component {
  /*
  @Description component has text fields for question and answer. local state manages the input and submission handles the redux dispatch and 
                  Async update.
  */
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Add Card`
    }
  }
  state = {
    questionInput: '',
    answerInput: ''
  }
  handleQuestionInput = (text) => {
    const questionInput = text
    this.setState(() => ({
      questionInput
    }))
  }
  handleAnswerInput = (text) => {
    const answerInput = text
    this.setState(() => ({
      answerInput
    }))
  }
  submit = () => {
    const questionText = this.state.questionInput
    const answerText = this.state.answerInput
    const { dispatch } = this.props
    const { deckId } = this.props

    const newCard = {
      question: questionText,
      answer: answerText,
    }

    dispatch(addCard({newCard, deckId}))
    addCardToDeck({deckId, newCard})

    this.props.navigation.dispatch(NavigationActions.back())
  }
  render() {
    const { questionInput, answerInput } = this.state
    return (
      <View>
        <Text 
          style={styles.centerText}>Add a new Card</Text>
        <TextInput 
          value={questionInput}
          placeholder='Type your question'
          style={styles.input}
          onChangeText={(text) => { 
          this.setState({questionInput: text})}}
        />
        <TextInput 
          value={answerInput}
          placeholder='Type your answer'
          style={styles.input}
          onChangeText={(text) => { 
          this.setState({answerInput: text})}}
        />
       <SubmitCard onPress={this.submit} />
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
    marginTop: 5,
  },
  AndroidSubmitBtn: {
    backgroundColor: darkBlue,
    padding: 12,
    borderRadius: 6,
    height: 40,
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: 5,
  },
  submitBtnText: {
    color: white,
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    width: 275,
    height: 40,
    backgroundColor: white,
    color: black,
    borderWidth: 0.6,
    borderColor: black,
    borderRadius: 20,
    marginLeft: 45,
    marginRight: 45,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  centerText: {
    marginTop: 10,
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    color: black,
    fontSize: 20
  }
})

function mapStateToProps (decks, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deckInfo: decks[deckId],
  }
}

export default connect(mapStateToProps)(AddCard)