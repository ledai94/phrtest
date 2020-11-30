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
        <li v-for="deck in decks" :key="deck._id" class="">
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img src="deck.thumbnail" alt="" />
              <div class="card_body">
                <h3>{{ deck.name }}</h3>
                <p>{{ deck.description }}</p>
              </div>
            </div>
          </nuxt-link>
        </li>
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
export default {
  layout: 'default',

  data() {
    return {
      decks: [
        {
          _id: 1,
          name: 'learn english',
          description: 'lorem class=d_flex justify_content_between my_3',
          thumbnail:
            'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
        },
        {
          _id: 2,
          name: 'learn english',
          description: 'lorem class=d_flex justify_content_between my_3',
          thumbnail:
            'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
        },
        {
          _id: 3,
          name: 'learn english',
          description: 'lorem class=d_flex justify_content_between my_3',
          thumbnail:
            'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
        },
      ],
    }
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
