<template>
	<div>
		<section class="row">
			<div class="col-12">
				<h1>Admin Zone: </h1>
			</div>
			<div class="col-sm-12 col-md-6">
				<pp-new-pizza></pp-new-pizza>
				<!--Pizza component, formulario-->
			</div>
			<div class="col-sm-12 col-md-6">
				<h3>Menu</h3>
				<table class="table table-hover">
					<thead class="thead-default">
						<tr>
							<th> Item </th>
							<th> Remove from menu</th>
						</tr>
					</thead>
					<tbody> 
						<tr>
							<td>Margarita se llama mi amor</td>
							<td><button class="btn btn-sm btn-outline-danger" 
													type="button"
													 >-</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			</section>

			<!--current-order-->

			<section class="row">
			<div class="col-12 pt-4 pb-4">
				<h3 class>Current Orders</h3>
				<table class="table table-hover">
					<thead class="thead-default">
						<tr>
							<th> Item </th>
							<th> Size</th>
							<th> Quantity</th>
							<th> Price</th>
						</tr>
					</thead>
					<tbody> 
						<div class="order-number">
							<strong><em>Order Number: 1</em></strong>
							<button class="btn btn-sm btn-outline-danger">X</button>
						</div>
						<tr>
						<td>Margarita se llama mi amor</td>
						<td>9"</td>
						<td>1</td>
						<td>9.95</td>
						</tr>
					</tbody>
				</table>
				<!--ORDERS COMPONENT-->
				</div>
			</section>
			<section class="pt-4 pb-4">
				<pp-login></pp-login>
			</section>
	</div>
</template>

<script>

	import NewPizza from './NewPizza.vue'
	import Login from './Login.vue'

	export default{
		components :{
			ppNewPizza:NewPizza,
			ppLogin:Login
		},
		beforeRouteLeave:(to,from,next) => {
			//alert("Mamona antes de irte cierra la sesión, no?")
			if(confirm("have you close the sesion, plis")){
				next() // next con parentesis se considera true.
			}else{
				next(false)
			}

		}


	}
</script>