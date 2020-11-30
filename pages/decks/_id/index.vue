<template>
  <section>
    <div class="r">
      <div class="ct">
        <h3>Deck#{{ $route.params.id }}: learn enshfg</h3>
        <div class="tools">
          <button class="btn btn_success">start now</button>
          <button @click="openModal">create a card</button>
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
    <v-modal name="CreateCardModal"
      ><div class="modal_body">
        <h1>Create a new Card</h1>
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
  </section>
  <!-- <div>index deck {{ $route.params.id }} is active</div> -->
</template>

<script>
import CardList from '@/components/Cards/CardList'
export default {
  // layout: 'default',
  // context se hung all va nang => lay ra prop
  components: { CardList },
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
    openModal() {
      this.$modal.open({ name: 'CreateCardModal' })
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
