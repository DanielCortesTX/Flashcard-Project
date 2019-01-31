import React, { Component} from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native'
import { white, green, red, softBlue } from '../utils/colors'

export default class AnswerQuiz extends Component {
  /*
  @Description component inherits remaining questions, which question is being asked (count), the question's answer and functions to return a true and false 
                  answer.  
  */
  render() {
    return (
      <View>
        <Text style={styles.remaining}>{this.props.tally - this.props.count} left to answer</Text>
        <Text style={styles.center}>{this.props.question.answer}</Text>
        <View style={styles.correctButton}>
          <TouchableOpacity onPress={() => this.props.trueAnswer()}>
              <Text style={styles.centerText}>Correct</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.falseButton}>
          <TouchableOpacity onPress={() => this.props.falseAnswer()}>
              <Text style={styles.centerText}>Incorrect</Text>
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
  correctButton: {
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
  falseButton: {
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