import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App.vue'


//Vue puede usar..vuerouter, es decir los metodos que trae Vue.
Vue.use(VueRouter);
//array de routes[con S]-path es una clave del objeto--component en singular.

//Ahora aauí se le pasan las rutas. En español, enrutador.
const router = new VueRouter({
	routes,
	mode : 'history'
})

//arrow function---que desde donde estoy, hazme next--de donde a donde y que pasa en la siguiente.

/*router.beforeEach((to, from, next) => {
alert("navigation trigger")
next()
})*/


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



