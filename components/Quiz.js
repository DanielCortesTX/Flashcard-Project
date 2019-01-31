import React, { Component} from 'react'
import { NavigationActions } from 'react-navigation'
import NoCardQuiz from './NoCardQuiz'
import QuestionQuiz from './QuestionQuiz'
import AnswerQuiz from './AnswerQuiz'
import ResultQuiz from './ResultQuiz'

export default class Quiz extends Component {
  /*
    @Description Component inherits the deck and extracts the questions array and the length of that array. local state is established and COUNT
                    is used to access the index of a question. ANSWEREDSTATUS is used to render the question display or the answer display.
                     CORRECT NUM is used for score keeping.
  */
  constructor(props){
    super(props)
    this.questions = this.props.navigation.state.params.questions
    this.tally = this.props.navigation.state.params.questions.length
  }
  state = {
    count: 0,
    answeredStatus: false,
    correctNum: 0
  }
  static navigationOptions = () => {
    return {
      title: `Quiz`
    }
  }
  /*
    @Description answerFunction: is used to change whether the question display is rendered or the answered display is.
                    trueAnswer: increments the count and changes which question will be rendered (if it is the last question
                    the result page is rendered), it increments the CorrectNum for scoring and changes answeredStatus for the
                    next question.
                    falseAnswer: increments count and changes answerStatus.
                    tryAgain: resets count, answeredStatus and correctNum for the quiz to be taken again.

  */
  answerFunction = () => {
    this.setState(() => ({
      answeredStatus: true
    }))
  }
  trueAnswer = () => {
    this.setState({
      count: this.state.count + 1,
      correctNum: this.state.correctNum + 1,
      answeredStatus: false
    })
  }
  falseAnswer = () => {
    this.setState({
      count: this.state.count + 1,
      answeredStatus: false
    })
  }
  tryAgain = () => {
    this.setState({
      count: 0,
      answeredStatus: false,
      correctNum: 0
    })
  }
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }
  render() {
    if(this.questions.length === 0){
      return (
        <NoCardQuiz />
      )
    } else if (this.tally === this.state.count) {
      return  (
        <ResultQuiz correctNum={this.state.correctNum} count={this.state.count} tryAgain={this.tryAgain} goBack={this.goBack}/>
      )    
    } else {
        if(!this.state.answeredStatus){
          return (
            <QuestionQuiz question={this.questions[this.state.count]} answerFunction={this.answerFunction} count={this.state.count} tally={this.tally}/>
          )
        } else {
          return (
            <AnswerQuiz question={this.questions[this.state.count]} trueAnswer={this.trueAnswer} falseAnswer={this.falseAnswer} count={this.state.count} tally={this.tally}/>
          )
        }
      
    }
  }    
}