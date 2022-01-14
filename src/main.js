import Vue from 'vue'
import App from './App.vue'
import '@/index.css';
import store from './flux'
import Router from './router'
import axios from 'axios'
import { firestorePlugin } from 'vuefire'
import vmodal from 'vue-js-modal'
import KonamiCode from 'vue-konami-code'

var memes = [
'https://youtu.be/uJmpguduXrU?t=122',
'https://youtu.be/KPFmlPD-ahU?t=80'
]  

Vue.use(KonamiCode, {callback: function () {
    const c = Math.floor(Math.random() * memes.length); 
    window.open(memes[c], '_blank');
}})

Vue.prototype.$http = axios

Vue.use(vmodal)

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router: Router, 
}).$mount('#app')

