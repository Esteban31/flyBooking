import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.js";

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primeicons/primeicons.css';

// PRIME VUE COMPONENTS
import Button from "primevue/button"
import MegaMenu from 'primevue/megamenu';
import Card from 'primevue/card';
import RadioButton from 'primevue/radiobutton';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';





const app = createApp(App)
app.use(router);
app.use(PrimeVue);


app.component('Button', Button);
app.component('MegaMenu', MegaMenu);
app.component('Card', Card);
app.component('RadioButton', RadioButton);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);



app.mount('#app')
