import '@/assets/style.css';
import 'manatsu/components/style';
import '@manatsu/style/themes/mana';
import App from '@/app.vue';
import { createApp } from 'vue';
import { router } from '@/router';
import { createPinia } from 'pinia';
import { createManatsu } from 'manatsu';

const app = createApp(App);
const pinia = createPinia();
const manatsu = createManatsu();

app.use(router);
app.use(pinia);
app.use(manatsu);

app.mount('#app');
