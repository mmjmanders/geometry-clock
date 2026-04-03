import { createApp } from 'vue'
import './fonts.css'
import './main.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'

library.add(faGitAlt)

createApp(App).mount('#app')
