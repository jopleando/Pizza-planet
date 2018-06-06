import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import Admin from './components/Admin.vue'


export const routes = [

{path:'/', 
components :{ 
	default: Home,
	'ordering-guide' : OrderingGuide,
	'delivery': Delivery,
	'history' : History
}, 
name:'homeLink'},
{path:'/menu', component : Menu, name:'menuLink'},
{path:'/about', component : About , name:'aboutLink',
								children : [
								{path:'contact-us', component: Contact, name:'contactLink'},
								{path:'delivery-information', component: Delivery, name:'deliveryLink'},
								{path:'our-history', component: History, name:'historyLink'},
								{path:'ordering-guide', component: OrderingGuide, name:'orderingLink'},

								]
							},
{path:'/admin', component : Admin, name:'adminLink', beforeEnter: (to,from,next)=>{
	alert("this area is for registered users");
	next()
}},
{path:'*', redirect : '/'} // por poner esto, con cualquier direccion que ponga el usuario, te lleva a Home. Tambien con el history,.
]
