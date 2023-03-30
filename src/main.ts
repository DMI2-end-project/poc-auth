import {createApp} from 'vue';
import PocketBase from 'pocketbase';
import router from "../router";
import App from './App.vue';

import './style.css';

const pb = new PocketBase('http://127.0.0.1:8090/');//https://pocketbase-dmi2.fly.dev

//createApp(App).mount('#app')
const app = createApp(App);
app.provide('pb', pb);
app.use(router);

app.mount('#app');