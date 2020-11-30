<template>
  <div>
    <div>
      <div v-if="visible" :data-modal="name" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal__mask"
        >
          <div class="modal__body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="visible" class="modal-wrapper">
      <h2>{{ title }}</h2>

      <p>{{ text }}</p>

      <div class="modal-buttons">
        <button class="modal-button" @click="hide">Close</button>

        <button class="modal-button" @click="confirm">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import VModal from './handle'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
      title: '',
      text: '',
      onConfirm: {},
    }
  },
  beforeMount() {
    VModal.EventBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.open(params)
      }
    })
    VModal.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.close(params)
      }
    })
    VModal.EventBus.$on('show', (params) => {
      this.show(params)
    })
  },
  methods: {
    hide() {
      // method for closing modal
      this.visible = false
    },
    confirm() {
      if (typeof this.onConfirm === 'function') {
        // run passed function and then close the modal
        this.onConfirm()
        this.hide()
      } else {
        // we only close the modal
        this.hide()
      }

      // confirm code will be here soon(TM)
    },
    show(params) {
      // making modal visible
      this.visible = true
      // setting title and text
      this.title = params.title
      this.text = params.text
      // setting callback function
      this.onConfirm = params.onConfirm
    },
    close() {
      this.visible = false
    },
    open(params) {
      this.visible = true
    },
  },
}
</script>
<style scoped>
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  z-index: 1000;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.modal-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}
.modal-button {
  flex-grow: 1;
}
</style>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
  &__body {
    background: #fff;
  }
}
</style>
