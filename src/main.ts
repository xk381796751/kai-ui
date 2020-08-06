import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Kai from './components/Kai.vue'
import Kai2 from './components/Kai2.vue'

const history = createWebHashHistory()
const router = createRouter({
	history: history,
	routes: [
		{path: '/', component: Kai},
		{path: '/xxx', component: Kai2},
	]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
