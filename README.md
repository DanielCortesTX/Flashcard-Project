* This application was initially created using create-react-native-app.
* This application was approved as part of Udacity's React nanodegree.
* The app has been tested on snack.expo.io android and ios simulators and has functioned correctly thus far.
* The application starts on a tab navigator which is rendered by a stacknavigator.
* The application consists of five main views:
   -DeckList: The start page. Displays deck names and their particulars.
   -AddDeck: Has input field to create name of deck and submit button to create deck.
   -DeckDisplay: Lower in the navigation stack and accessed by clicking on display in DeckList.
      Displays the deck name, number of cards and has buttons to take a quiz or add cards.
   -AddCard: Has two input fields. One for a question and another for an answer. A button sumits the
      fields and adds the card to the deck.
   -Quiz: If no cards are in present deck a message will be displayed. If any cards are present, a
      component will display the question with a button to render a component to display the answer.
      The answer component has a button to declare if the user correctly answered the question. When
      all questions have been answered a results component is rendered. The user's score on the quiz,
      an option to retake the quiz and the ability to navigate to the deck display are all present.
* The application uses Async storage to hold the information and a REDUX store to render the information.