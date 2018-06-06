<template>
<div class=" container text-center">
		<h1>About us</h1>
		<p>Click bellow for more information</p>
		<nav class="navbar navbar-toggleable-md navbar-light">
				<ul class="nav">
						<router-link :to="{name :'contactLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Contact Information</a></router-link>
						<router-link :to="{name :'deliveryLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Delivery Information</a></router-link>
						<router-link :to="{name :'historyLink'}"tag="li" class="nav-item"><a class="nav-link" href="">Our history</a></router-link>
						<router-link :to="{name :'orderingLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Ordering guide</a></router-link>	
				</ul>
			</nav>
		<router-view></router-view>	
	</div>
</template>

