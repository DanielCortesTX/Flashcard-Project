export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

/*
  @Description actions for redux store
*/

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck (newDeck) {
  return {
    type: ADD_DECK,
    newDeck
  }
}

export function addCard ({ newCard, deckId }) {
  return {
    type: ADD_CARD,
    newCard,
    deckId
  }
}