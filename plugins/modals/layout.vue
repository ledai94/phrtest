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
  },
  methods: {
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
