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
        <li class="">
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png"
                alt=""
              />
              <div class="card_body">
                <h3>Tieu De</h3>
                <p>Mo ta</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link class="deck" to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png"
                alt=""
              />
              <div class="card_body">
                <h3>Tieu De</h3>
                <p>Mo ta</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link class="deck" to="/decks/3">
            <div class="card deck-card">
              <img
                src="https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png"
                alt=""
              />
              <div class="card_body">
                <h3>Tieu De</h3>
                <p>Mo ta</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <app-modal />
      <button @click="showModal">modal!</button>
      <v-modal name="test"
        ><div class="test_body">
          <h1>hi hello test modal</h1>
          <button class="btn btn_danger" @click.prevent="closeModal">
            close
          </button>
        </div>
      </v-modal>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',

  data() {
    return {
      deckID: '1',
    }
  },
  methods: {
    showModal() {
      // we must pass object params with all the information

      const params = {
        title: 'Test!',
        text: 'test test test',
        // we are passing callback method for our confirm button
        onConfirm: () => {
          return this.alertFunc()
        },
      }
      // now we can call function that will reveal our modal
      this.$modal.show(params)
    },
    // we pass this method as example
    alertFunc() {
      alert('Hello!')
    },

    closeModal() {
      this.$modal.close({ name: 'test' })
    },
    openModal() {
      this.$modal.open({ name: 'test' })
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
</style>
<style lang="scss">
.test_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
