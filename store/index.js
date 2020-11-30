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
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            vuexContext.commit('setDecks', [
              {
                _id: 1,
                name: `learn english  `,
                description:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                thumbnail:
                  'https://idc.edu/wp-content/uploads/2018/12/15-Techniques-for-Learning-English-Vocabulary-850x390.jpg',
              },
              {
                _id: 2,
                name: `learn english `,
                description:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                thumbnail:
                  'https://idc.edu/wp-content/uploads/2018/12/15-Techniques-for-Learning-English-Vocabulary-850x390.jpg',
              },
              {
                _id: 3,
                name: `learn english `,
                description:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                thumbnail:
                  'https://idc.edu/wp-content/uploads/2018/12/15-Techniques-for-Learning-English-Vocabulary-850x390.jpg',
              },
            ])
            resolve()
          }, 1500)
          // reject(new Error())
        })
        // .then((data) => {
        //   vuexContext.commit('setDecks', data.decks)
        // })
        // .catch((e) => {
        //   // eslint-disable-next-line no-console
        //   console.log(e)
        //   // context.error(e)
        // })
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
