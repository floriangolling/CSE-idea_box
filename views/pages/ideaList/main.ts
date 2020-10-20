import Buefy from 'buefy';
import Vue from 'vue';
import App from './App.vue';
import 'buefy/dist/buefy.css';
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueSimpleAlert);

new Vue({
  render: h => h(App),
}).$mount('#app')
