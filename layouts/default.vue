<template>
  <div>
    <DefaultHeader></DefaultHeader>
    <!-- nuxt chinh la page -->
    <Nuxt />
    <v-modal name="DeckFormModal"
      ><div class="modal_body">
        <h1>Create a new Deck</h1>
        <deck-form @submit="onSubmit"></deck-form>
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
<style></style>
