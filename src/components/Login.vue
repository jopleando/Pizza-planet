<template>

<div class="row ">
	<form>
		<div class="form-group row">
			<label for="" class="col-sm-3">E-mail</label>
			<div class="col-sm-9">
				<input type="text" class="form-control" id="email">
			</div>
		</div>

		<div class="form-group row">
			<label for="" class="col-sm-3">Password</label>
			<div class="col-sm-9">
				<input type="password" class="form-control" id="password">
			</div>
		</div>
		<button class="btn btn-primary" @click.prevent="signIn">Sign In</button>
		<button class="btn btn-danger" @click.prevent="signOut" >Sign Out</button>			
	</form>
</div>
</template>

<script>

	import Firebase from 'firebase'

	export default{
		methods:{
			signIn(){

				var email = document.getElementById('email').value;		
				var password = document.getElementById('password').value;

				Firebase.auth().signInWithEmailAndPassword(email, password).catch(
					function(error){
						var errorCode=error.code;
						var errorMessage=error.message;

						if(errorCode==="auth/wrong-password"){
							alert("wrong password")
						}else{
							alert(errorMessage + " " + errorCode)
						}
					})

			},
			signOut(){
				Firebase.auth().signOut().then(function(){//then es una promesa-es como prometo que se ejecuta esa función.
					alert("Logged Out!")
				}).catch(function(error){
					alert("error" + error.code + ' ' + error.message)
				})

			}
		}

	}
</script>