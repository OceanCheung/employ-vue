import Vue from 'vue';
import App from './App';
import router from './router';

/**引入饿了么 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/*引入index.js*/
import api from './api/index';
Vue.use(api);
import apiOtherList from './api/api-other';
Vue.prototype.$apiOther = apiOtherList 

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 




Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
