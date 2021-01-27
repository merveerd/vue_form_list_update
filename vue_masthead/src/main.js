import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Recomendation of babeljs (https://babeljs.io/docs/en/babel-polyfill)
import "core-js/stable"; // only stable feature also is possible with only `core-js`
import "regenerator-runtime/runtime";
// ApiService.init();

// // Ensure we checked auth before each page load.
// router.beforeEach((to, from, next) =>
//   Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// );
new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
