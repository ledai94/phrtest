<template>
  <section>
    <div class="r">
      <div class="ct">
        <h3>Deck#{{ $route.params.id }}:{{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">start now</button>
          <button
            class="btn btn_primary"
            @click.prevent="openModal('CreateCardModal')"
          >
            create a card
          </button>
          <button
            class="btn btn_warning"
            @click.prevent="openModal('DeckFormModal')"
          >
            edit a card
          </button>
        </div>
        <hr class="divine" />

        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          ></card-list>
        </div>
      </div>
    </div>
  </section>
  <!-- <div>index deck {{ $route.params.id }} is active</div> -->
</template>

<script>
import axios from 'axios'
import CardList from '@/components/Cards/CardList'
export default {
  // layout: 'default',
  // context se hung all va nang => lay ra prop
  components: { CardList },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-learning-english-2aaf5.firebaseio.com/decks/${context.params.id}.json`
      )
      .then((response) => {
        return {
          deck: response.data,
        }
      })
    // eslint-disable-next-line no-console
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS54R1bYvoPsIWo6BHqIivDptSPKjA8Y9oLOA&usqp=CAU',
          keyword: 'road',
        },
        {
          _id: 2,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS54R1bYvoPsIWo6BHqIivDptSPKjA8Y9oLOA&usqp=CAU',
          keyword: 'road',
        },
        {
          _id: 3,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS54R1bYvoPsIWo6BHqIivDptSPKjA8Y9oLOA&usqp=CAU',
          keyword: 'road',
        },
        {
          _id: 4,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS54R1bYvoPsIWo6BHqIivDptSPKjA8Y9oLOA&usqp=CAU',
          keyword: 'road',
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
    openModal(name) {
      if (name === 'CreateCardModal') {
        this.$modal.open({ name: 'CreateCardModal' })
      } else if (name === 'DeckFormModal') {
        this.$modal.open({ name: 'DeckFormModal' })
      }
    },
  },
}
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
  .divide {
    margin: 2rem 0;
  }
  .modal_body {
    background-color: #fff;
    padding: 1rem;
  }
}
</style>
