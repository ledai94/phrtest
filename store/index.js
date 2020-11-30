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
    },
    actions: {
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
    },
    getter: {
      decks(state) {
        return state.decks
      },
    },
  })
}
export default createStore
