<template>
  <li>
    <nuxt-link class="deck" :to="`/decks/${id}`">
      <div class="card deck-card">
        <img :src="thumbnail" alt="" />
        <div class="card_body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
      default: 'default',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
