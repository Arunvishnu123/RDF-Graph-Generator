import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import 'font-awesome/css/font-awesome.min.css'
import '@mdi/font/css/materialdesignicons.min.css'


const app = createApp(App)

new WaveUI(app, {
    // Some Wave UI options.
    colors: {
        primary: '#6e9fe8',
        secondary: '#5d9a26'
    }
})

app.use(store).use(router).mount("#app");
