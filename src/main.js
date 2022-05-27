import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css'
// via npm install @mdi/font
import "@mdi/font/css/materialdesignicons.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord , faJs, faHtml5,faVuejs} from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faFile,faCube ,faFileLines,faCircle,faSun,faMoon,faArrowUp,faArrowLeft,faPen,faTrashCan,faXmark} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord, faJs,faHtml5,faVuejs, faFile, faCube,faFileLines, faCircle, faSun, faMoon,faArrowUp,faArrowLeft,faPen,faTrashCan,faXmark)

const app = createApp(App)
//change langue html default
const html = document.documentElement
html.setAttribute('lang', 'fr')

//app use
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')


