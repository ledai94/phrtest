<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your decks:</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>
      <ul class="deck-list">
        <deck-list
          v-for="deck in decks"
          :id="deck._id"
          :key="deck._id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        ></deck-list>
      </ul>
      <v-modal name="CreateDeckModal"
        ><div class="modal_body">
          <h1>Create a new Deck</h1>
          <form action="">
            <div class="form-group">
              <label for="">Name</label>
              <input
                class="form_control"
                type="text"
                placeholder="pls enter name"
              />
            </div>
            <div class="form-group">
              <label for="">Des</label>
              <textarea
                class="form_control"
                type="text"
                placeholder="pls enter des"
              />
            </div>
            <div class="form-group">
              <label for="">Thumnail</label>
              <input type="file" />
              <div class="preview"></div>
            </div>
            <div class="form-group">
              <button class="btn btn_danger" @click.prevent="closeModal">
                close
              </button>
              <button class="btn btn_success" @click.prevent="createDeck">
                Create
              </button>
            </div>
          </form>
        </div>
      </v-modal>
      <button @click="showModal">modal!</button>
    </div>
  </div>
</template>
<script>
import DeckList from '@/components/Decks/DeckList.vue'
export default {
  components: { DeckList },
  layout: 'default',
  fetch(context) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          decks: [
            {
              _id: 1,
              name: `learn english`,
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
          ],
        })
      }, 1500)
      // reject(new Error())
    })
      .then((data) => {
        context.store.dispatch('setDecks', data.decks)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
        // context.error(e)
      })
  },
  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },

  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateDeckModal' })
    },
    openModal() {
      this.$modal.open({ name: 'CreateDeckModal' })
    },
    showDeck() {
      this.$router.push(`/decks/${this.deckID}`)
    },
  },
}
</script>

<style lang="scss">
.deck-list {
  margin: 0;
  padding: 0;
  .deck {
    display: block;
  }
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;
    img {
      width: 250px;
      height: 200px;
    }
  }
}
.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
