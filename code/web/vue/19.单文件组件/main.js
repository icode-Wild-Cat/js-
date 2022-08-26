import App from './App.vue'

Vue.config.productionTip = false //阻止 Vue 在启动时生成生产提示

new Vue({
  el:'.root',
  template:`
    <App></App>
  `,
  components:{App}
})