<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link to="/settings">General</nuxt-link>
        </li>
        <nuxt-link to="/settings/deck">Deck</nuxt-link>
        <li></li>
        <nuxt-link to="/settings/schedule">Schedule</nuxt-link>
        <li></li>
      </ul>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="scss">
.page {
  display: flex;
}
</style>
