import Home from "./screens/Home";
import Masthead from "./screens/AddMasthead";

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/masthead",
    name: "masthead",
    component: Masthead
  },
  { path: "*", redirect: "/" }
];

export default new VueRouter({
  routes,
  mode: "history" //no hastag in url
  //   scrollBehaviour(to, from, savedPosition){
  //     if(savedPosition){
  //       return savedPosition;
  //     }
  //     if(to.hash){
  //       return { selector: to.hash };
  //     }
  //     return {x: 0, y: 0};
  //   }
  // })
  // router.beforeEach((to, from, next) => {
  //   console.log('global beforeEach');
  //   next();
});
