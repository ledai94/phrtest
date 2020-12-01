<template>
  <div>
    <DefaultHeader></DefaultHeader>
    <!-- nuxt chinh la page -->
    <Nuxt />
    <v-modal v-slot="payload" name="DeckFormModal"
      ><div class="modal_body">
        {{ payload }}
        <h1>
          {{ payload && payload.payload ? 'Edit a card' : 'Create a new Deck' }}
        </h1>
        <deck-form :deck="payload.payload" @submit="onSubmit"></deck-form>
      </div>
    </v-modal>
    <DefaultFooter />
  </div>
</template>
<script>
import axios from 'axios'
import DeckForm from '@/components/Decks/DeckForm.vue'
import DefaultHeader from '@/components/Header/DefaultHeader'
import DefaultFooter from '@/components/Footer/DefaultFooter'

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    DeckForm,
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        this.$store
          .dispatch('addDeck', deckData)
          .then(() => this.$modal.close({ name: 'DeckFormModal' }))
      } else {
        const deckId = deckData.id
        delete deckData.id
        axios
          .put(
            'https://nuxt-learning-english-2aaf5.firebaseio.com/decks/' +
              deckId +
              '.json',
            deckData
          )
          .then((data) => {
            console.log(data)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
  },
}
</script>
<style></style>
