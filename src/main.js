import Vue from 'vue';
import App from './App.vue';
import YoUI from '../components/index';

Vue.use(YoUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
