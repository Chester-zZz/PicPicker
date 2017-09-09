// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueLazyload from 'vue-lazyload'
import routes from './router/index';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);
const router = new VueRouter({ routes });

Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: '../static/imgs/loading.gif'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
