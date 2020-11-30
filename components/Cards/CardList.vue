<template>
  <div class="card">
    <div class="front-card">
      <img :src="picture" alt="" />
    </div>
    <div class="back-card">{{ keyword }}</div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
