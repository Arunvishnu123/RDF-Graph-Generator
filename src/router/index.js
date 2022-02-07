import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RDFGenerate from "../views/RDFGeneratorPage.vue";
import Main from "../views/MainPage.vue";
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

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
