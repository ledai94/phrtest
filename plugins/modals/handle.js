import Layout from './layout'
const VModal = {
  install(Vue) {
    this.EventBus = new Vue()
    Vue.component('v-modal', Layout)
    // Vue.component('app-modal', Layout)
    Vue.prototype.$modal = {
      open(params) {
        VModal.EventBus.$emit('open', params)
      },
      close(params) {
        VModal.EventBus.$emit('close', params)
      },
      show(params) {
        // if we use this.$modal.show(params) inside our original Vue instance
        // we will emit 'show' event with parameters 'params'
        VModal.EventBus.$emit('show', params)
      },
    }
  },
}
export default VModal
