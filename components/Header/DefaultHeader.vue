<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/Decks">Decks</nuxt-link></li>
        <li><nuxt-link to="/Profile">Profile</nuxt-link></li>
        <li><nuxt-link to="/Settings">Settings</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {
  background-color: #000;
  color: #fff;
  height: 60px;
  nav,
  ul {
    height: inherit;
  }
  ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  li {
    margin: 0 1.5rem;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &.nuxt-link-exact-active {
        color: red;
      }
    }
  }
}
</style>
