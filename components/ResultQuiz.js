import React, { Component} from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native'
import { white, green, red, softBlue } from '../utils/colors'

export default class Quiz extends Component {
  /*
    @Description component inherits correctNum and count for the score of the quiz and inherits tryAgain to reset the parent state.
  */
  render() {
    return (
      <View>
        <Text style={styles.center}>Your grade is {((this.props.correctNum / this.props.count) * 100).toFixed(2)}%</Text>
        <View style={styles.resetButton}>
          <TouchableOpacity onPress={() => this.props.tryAgain()}>
              <Text style={styles.centerText}>Try Again?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.goBackButton}>
          <TouchableOpacity onPress={() => this.props.goBack()}>
              <Text style={styles.centerText}>Back to Deck</Text>
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
  resetButton: {
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
  goBackButton: {
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
  }
})