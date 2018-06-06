<template>
	<section class="row">
		<div class="col-sm-12 col-md-6">
			<table class="table table-hover">
				<thead class="thead-default">
					<tr>
						<th> Name/Size </th>
						<th> Price </th>
						<th> Description</th>
						<th>Add</th>
					</tr>
				</thead >
				<tbody v-for="item in getMenuItems"> 
					<tr>
						<td><strong>{{ item.name }}</strong></td>
					</tr>
					<tr v-for="option in item.options">
						<td>{{ `${option.size } "` }}</td>
						<td>{{ option.price }}</td>
						<td>{{item.description}}</td>
						<td><button class="btn btn-sm btn-outline-success" 
												type="button"
												@click="addToBasket(item, option)" 
												>+</button>
												</td>
					</tr>
				</tbody>
			</table>
			</div>
			
	<div class="col-md-6 col-sm-12">
			<div v-if="basket.length > 0">
			<table class="table ">
				<thead class="thead-default">
					<tr>
						<th> Quantity </th>
						<th> Item </th>
						<th> Price</th>
					</tr>
				</thead>
				<tbody  v-for="item in basket"> 
					<tr>
						<td>

							<button class="btn btn-sm btn-outline-danger" 
														type="button" 
														@click="decreaseQuantity(item)"
														>-</button>

							<span> {{item.quantity}} </span>

							<button class="btn btn-sm btn-outline-success" 
														type="button"
														@click="increaseQuantity(item)"
														>+</button>

						</td>
						<td>{{ `${item.name} ${item.size}"` }}</td>
						<td>{{ (item.price * item.quantity).toFixed(2)}}</td>
					</tr>
				</tbody>
			</table>
			<p>Order Total: </p>
			<button class="btn btn-success btn-block" type="button">Place order </button>
			</div>
			<div v-else>
			{{basketText}}
		</div>
	</div>
		
	</section>
</template>

<script>
	export default {
		data(){
			return{
				basketText :'Your basket is empty!',
				basket : [],
				getMenuItems : {
					1: {
					  'name': 'Margherita',
					  'description': 'A delicious tomato based pizza topped with mozzarella',
					  'options': [{
					    'size': 9,
					    'price': 6.95
					  }, {
					    'size': 12,
					    'price': 10.95
					  }]
					},
					2: {
					  'name': 'Pepperoni',
					  'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
					  'options': [{
					    'size': 9,
					    'price': 7.95
					  }, {
					    'size': 12,
					    'price': 12.95
					  }]
					},
					3: {
					  'name': 'Ham and Pineapple',
					  'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
					  'options': [{
					    'size': 9,
					    'price': 7.95
					  }, {
					    'size': 12,
					    'price': 12.95
					  }]
					},
					4: {
					  'name': 'Anchoves and egg',
					  'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
					  'options': [{
					    'size': 9,
					    'price': 7.95
					  }, {
					    'size': 12,
					    'price': 12.95
					  }, {
					    'size': 14,
					    'price': 15.95
					  }]
					}
				}
			}
		},
		methods:{
			addToBasket(item, option) {
				this.basket.push({
					name: item.name,
					price: option.price,
					size : option.size,
					quantity: 1
				})
			},

			decreaseQuantity(item){
				item.quantity--;
				if(item.quantity===0){
					this.removeFromBasket(item)

				}
			},
			increaseQuantity(item){
				item.quantity++
			},
			removeFromBasket(item){
				this.basket.splice(this.basket.indexOf(item), 1)
			} 

		}
	}
</script>

 <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newPartner.cityOriginPartner">
          <option class="options" value="">¿De que pais te gustaría que fuera tu acompañante?</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
         </select>
     </div>