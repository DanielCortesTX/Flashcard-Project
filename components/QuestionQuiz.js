import React, { Component} from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native'
import { white, green, black, softBlue } from '../utils/colors'

export default class Quiz extends Component {
  /*
    @Description the question from deck's question array is rendered relative to parent component's count state. the question is displayed as text
                  and button is used to alter parent function's answered state and then render answeredQuiz.
  */
  render() {
    return (
      <View>
        <Text style={styles.remaining}>{this.props.tally - this.props.count} left to answer</Text>
        <Text style={styles.center}>{this.props.question.question}?</Text>
        <View style={styles.showButton}>
          <TouchableOpacity onPress={() => this.props.answerFunction()}>
              <Text style={styles.centerText}>Show Answer</Text>
          </TouchableOpacity>
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
  showButton: {
    backgroundColor: green,
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
  center: {
    marginTop: 10,
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    color: white,
    fontSize: 20,
    backgroundColor: softBlue,
    padding: 10,
    height: 50,
    borderRadius: 20
  },
  remaining: {
    marginTop: 10,
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center'
  }
})