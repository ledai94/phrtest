<template>
  <section>
    <div class="r">
      <div class="ct">
        <h3>Deck#{{ $route.params.id }}: learn enshfg</h3>
        <div class="tools">
          <button class="btn btn_success">start now</button>
          <button>create a card</button>
        </div>
        <hr class="divine" />

        <div class="r">
          <div class="c_3">
            <div class="front-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS54R1bYvoPsIWo6BHqIivDptSPKjA8Y9oLOA&usqp=CAU"
                alt=""
              />
            </div>
            <div class="back-card"></div>
          </div>
          <div class="c_3">
            <div class="front-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS54R1bYvoPsIWo6BHqIivDptSPKjA8Y9oLOA&usqp=CAU"
                alt=""
              />
            </div>
            <div class="back-card"></div>
          </div>
          <div class="c_3">
            <div class="front-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS54R1bYvoPsIWo6BHqIivDptSPKjA8Y9oLOA&usqp=CAU"
                alt=""
              />
            </div>
            <div class="back-card"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div>index deck {{ $route.params.id }} is active</div> -->
</template>

<script>
export default {
  // layout: 'default',
  // context se hung all va nang => lay ra prop
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
}
</style>
