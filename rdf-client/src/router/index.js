import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RDFGenerate from "../views/RDFGeneratorPage.vue";
import Main from "../views/MainPage.vue";
import test from "../views/test.vue";
import profile from "../views/Profile.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/RDFGenerate",
    name: "RDFGenerate",
    component: RDFGenerate,
  },
  {
    path: "/Main",
    name: "Main",
    component: Main,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
