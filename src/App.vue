<template>
	<div id="app">
			<div class="container">
				<pp-header></pp-header>
			</div>

			<div class="container">
				<router-view></router-view>
			</div>

		<div class="container">
			<div class="row">
					<div class="col-sm-12 col-md-4">
						<router-view name="ordering-guide"></router-view>
					</div>
					<div class="col-sm-12 col-md-4">
						<router-view name="history"></router-view>
					</div>
					<div class="col-sm-12 col-md-4">
						<router-view name="delivery"></router-view>
					</div>
				</div>
			</div>
			<!--<div class="container">
				<pp-home></pp-home>
			</div>
			<div class="container">
				<pp-menu></pp-menu>
			</div>
			<div class="container">
				<pp-admin></pp-admin>
			</div>-->
			<div class="container">
				<pp-footer></pp-footer>
			</div>
	</div>
	
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
///import Home from './components/Home.vue'
//import Menu from './components/Menu.vue'
//import Admin from './components/Admin.vue'

export default {
	components:{
		ppHeader : Header,
		ppFooter : Footer,
		//ppHome : Home,
		//ppMenu : Menu,
		//ppAdmin: Admin
	} 
}
</script>


<style>

#home{
	background:url('../src/assets/pizza.jpg');
	height: 700px;
	padding: 10%;
}

.background{
	background-color: #eee;
	opacity: 0.8;
	max-width: 60%;
	margin:0 auto;
	padding:20px 0;
}
 
</style>




