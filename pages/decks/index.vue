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
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        ></deck-list>
      </ul>
      <v-modal name="DeckFormModal"
        ><div class="modal_body">
          <h1>Create a new Deck</h1>
          <deck-form @submit="onSubmit"></deck-form>
        </div>
      </v-modal>
      <!-- <button @click="showModal">modal!</button> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'

import DeckForm from '@/components/Decks/DeckForm.vue'
import DeckList from '@/components/Decks/DeckList.vue'
export default {
  components: { DeckList, DeckForm },
  layout: 'default',

  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },

  methods: {
    closeModal() {
      this.$modal.close({ name: 'DeckFormModal' })
    },
    openModal() {
      this.$modal.open({ name: 'DeckFormModal' })
    },
    showDeck() {
      this.$router.push(`/decks/${this.deckID}`)
    },
    onSubmit(deckData) {
      axios
        .post(
          'https://nuxt-learning-english-2aaf5.firebaseio.com/decks.json',
          deckData
        )
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
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
