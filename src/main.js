import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'

import Form from './components/Form.vue'
import Finished from './components/Finished.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: Form},
        {path: '/finished', component: Finished},
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
