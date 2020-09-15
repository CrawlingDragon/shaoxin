import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "@/common/css/base.styl";
import "@/common/css/reseat.styl";
import Vant from "vant";
import { Dialog } from "vant";
import "vant/lib/index.css";
import { Lazyload } from "vant";

Vue.use(Vant, Lazyload, Dialog);

import axios from "@/http.js";

Vue.prototype.$axios = axios; // 全局重定义axios
Vue.prototype.$dialog = Dialog;

import VueMeta from "vue-meta";
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
}); //动态设置title 插件

Vue.use(Lazyload, {
  lazyComponent: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
