<template>
  <div>
    <div class="banner">
      <div class="thumbnail-banner"></div>
    </div>
    <div class="popular-decks">
      3 popular deck for u
      <h3 class="text_center my_3"></h3>
      <div class="r">
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="scss">
.banner {
  height: 220px;
  margin-top: 3rem;
  .thumbnail-banner {
    background: url('~assets/images/banner.jpg');
    height: inherit;
    background-size: cover;
  }
}
</style>
