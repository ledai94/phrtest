<template>
  <form @submit.prevent="onSave">
    <div class="form-group">
      <label for="">Name</label>
      <input
        v-model="editedDeck.name"
        class="form_control"
        type="text"
        placeholder="pls enter name"
      />
    </div>
    <div class="form-group">
      <label for="">Des</label>
      <textarea
        v-model="editedDeck.description"
        class="form_control"
        type="text"
        placeholder="pls enter des"
      />
    </div>
    <div class="form-group">
      <label for="">Thumnail</label>
      <input
        v-model="editedDeck.thumbnail"
        class="form_control"
        type="text"
        placeholder="https://example.com/foo.png"
      />
      <div class="preview"></div>
    </div>
    <div class="form-group">
      <button class="btn btn_danger" @click.prevent="closeModal">close</button>
      <button class="btn btn_success" type="submit">
        {{ editedDeck && editedDeck.id ? 'Edit' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => ({
        name: '',
        description: '',
        thumbnail: '',
      }),
    },
  },
  data() {
    return {
      editedDeck: this.deck
        ? { ...this.deck }
        : {
            name: '',
            description: '',
            thumbnail: '',
          },
      // test
    }
  },

  methods: {
    closeModal() {
      this.$modal.close({ name: 'DeckFormModal' })
    },
    onSave() {
      this.$emit('submit', this.editedDeck)
    },
  },
}
</script>

<style></style>
