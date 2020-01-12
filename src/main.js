// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import 'moment/locale/zh-cn'

// Vue.use(Antd)

import {
  DatePicker,
  Base,
} from 'ant-design-vue';

/* v1.1.3+ registration methods */
Vue.use(Base);
Vue.use(DatePicker);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
