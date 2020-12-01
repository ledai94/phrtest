import axios from 'axios'

import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks
      },
      addDeck(state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === editDeck.id
        )
        state.decks[deckIndex] = editDeck
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return (
          axios
            .get(
              'https://nuxt-learning-english-2aaf5.firebaseio.com/decks.json'
            )
            .then((response) => {
              const decksArr = []
              for (const key in response.data) {
                decksArr.push({ ...response.data[key], id: key })
              }
              vuexContext.commit('setDecks', decksArr)
            })

            // .then((data) => {
            //   vuexContext.commit('setDecks', data.decks)
            // })
            .catch((e) => {
              // eslint-disable-next-line no-console
              console.log(e)
              // context.error(e)
            })
        )
      },
      addDeck(vuexContext, deckData) {
        return axios
          .post(
            'https://nuxt-learning-english-2aaf5.firebaseio.com/decks.json',
            deckData
          )
          .then((result) => {
            vuexContext.commit('addDeck', { ...deckData, id: result.data.name })
          })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
    },
    getters: {
      decks(state) {
        return state.decks
      },
    },
  })
}
export default createStore
