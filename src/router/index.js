import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Brazil from "../views/Brazil.vue"
// import Hawaii from "../views/Hawaii.vue"
// import Panama from "../views/Panama.vue"
// import Jamaica from "../views/Jamaica.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "brazil" */"../views/Brazil")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import(/* webpackChunkName: "hawaii" */"../views/Hawaii")
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import(/* webpackChunkName: "panama" */"../views/Panama")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import(/* webpackChunkName: "jamaica" */"../views/Jamaica")
  }
];

const router = new VueRouter({
  linkExactActiveClass:'navigation-active-class',//active class 自動套用
  routes
});

export default router;
