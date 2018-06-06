<template>
	<div class="row">
		<div id="home" class="col-md-12 text-center">
			<div class="background">
				<h1>Welcome to Pizza planet </h1>
				<h2>Feeling Hungry?</h2>
				<button class="btn btn-success" @click="goToMenu"> Let's order! </button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goToMenu(){
				this.$router.replace({name: 'menuLink'}) 
			}
		}
	}
</script>