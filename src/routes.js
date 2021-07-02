import User from './components/user/User';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import UserEdit from './components/user/UserEdit';
import Settings from './components/user/Settings';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Category from './components/category/Categorylist.vue';
import Smartphones from "./components/Smartphones.vue";
import Cloud from "./components/Cloud.vue";
import FiveG from "./components/FiveG.vue";
import Iot from "./components/Iot.vue";
import Maps from "./components/Maps.vue";
import Howto from "./components/Howto.vue";
import Laptop from "./components/Laptop.vue";
import Desktop from "./components/Desktop.vue";
import Gaming from "./components/Gaming.vue";
import Security from "./components/Security.vue";

//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path:'/', name:'home', component:Home},
    { path: '/about', name:'about', component:About},
    { path: '/user', name:'user', component: User},
    { path: '/useredit', name:'useredit', component:UserEdit},
    { path: '/contact', name:'contact', component:Contact},
    { path: '/category', name:'category', component:Category},
    { path: '/dashboard', name:'dashboard', component:Dashboard},
    { path: '/settings', name:'settings', component:Settings},
    { path: '/login', name:'login', component:Login},
    { path: '/register', name:'register', component:Register},
    { path: '/smartphones', name:'smartphones', component:Smartphones},
    { path: '/cloud', name:'cloud', component:Cloud},
    { path: '/5G', name:'5G', component:FiveG},
    { path: '/iot', name:'iot', component:Iot},
    { path: '/Howto', name:'Howto', component:Howto},
    { path: '/laptop', name:'laptop', component:Laptop},
    { path: '/desktop', name:'desktop', component:Desktop},
    { path: '/gaming', name:'gaming', component:Gaming},
    { path: '/security', name:'security', component:Security},
    { path: '/Map', name:'Maps', component:Maps}
]