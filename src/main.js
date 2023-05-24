import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketball, faBars, faMagnifyingGlass, faBullhorn, faBriefcase, faPalette, faChartLine, faGear, faFaceSmile, faPrint, faDisplay, faStar as fasStar, faLifeRing, faWrench, faCartShopping, faMobileScreenButton, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin, faPinterest, faFacebook, faGooglePlus, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBookmark, faStar as farStar } from "@fortawesome/free-regular-svg-icons"
library.add(faPalette, faChartLine, faGear, faFaceSmile, faPrint, faGooglePlus, faYoutube, faSkype, faBasketball, faBars, faMagnifyingGlass, faBullhorn, faBriefcase, faUser, faBookmark, faDisplay, fasStar, farStar, faLifeRing, faWrench, faCartShopping, faMobileScreenButton, faAngleLeft, faAngleRight, faTwitter, faInstagram, faLinkedin, faPinterest, faFacebook);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

