import { AsyncStorage } from 'react-native'
import { ALL_DECKS_STORAGE_KEY } from './_decks'

export function getDecks () {
    return AsyncStorage.getItem(ALL_DECKS_STORAGE_KEY)
}

export function saveDeckTitle ({ deckName, newDeck }) {
    return AsyncStorage.mergeItem(ALL_DECKS_STORAGE_KEY, JSON.stringify({
      [deckName]: newDeck
    }))
}

export function addCardToDeck ({ deckId, newCard}) {
    return AsyncStorage.getItem(ALL_DECKS_STORAGE_KEY)
      .then((results) => {
        const decks = JSON.parse(results)
        decks[deckId].questions.push(newCard)
        AsyncStorage.setItem(ALL_DECKS_STORAGE_KEY, JSON.stringify(decks))
      })
}