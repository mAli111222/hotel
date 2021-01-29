<template>
	<div class="page-wrapper">
		<h3>Sign In</h3>

		<div class="login-form">
			<input
				v-model="email"
				class="login-item"
				placeholder="Email"
				type="text"
			>
			<input
				v-model="password"
				class="login-item"
				placeholder="Password"
				type="password"
			>
			<button class="login-button" @click="login">
				Log In
			</button>
		</div>

		<div class="google-login">
			<div class="social-button-dex">
				or login with Google
			</div>
			<button
				class="social-button"
				@click="socialLogin"
			>
				<img alt="Google Logo" src="../assets/google-logo.png">
			</button>
		</div>

	</div>
</template>

<script>
import firebase from "firebase"
export default {
	name: "Signup",

	props: {},
	data: function()
	{
		return {
			email: "",
			password: "",
		}
	},
	computed:
	{},
	methods: 
	{
		/**
		 */
		async login ()
		{
			try
			{
				const response = await firebase.auth().signInWithEmailAndPassword(
					this.email,
					this.password
				)
				console.log("logged in!")
				console.log(response)
				return response
			}
			catch (error)
			{
				console.log({
					error,
				})
			}
		},

		/**
		 */
		async socialLogin ()
		{
			const provider = new firebase.auth.GoogleAuthProvider()

			try
			{
				const response = await firebase.auth().signInWithPopup(provider)
				console.log(response)
				return response
			}
			catch (error)
			{
				console.log({
					error,
				})
			}
		},
	},
}
</script>

<style scoped lang="less">
.page-wrapper {
	display: relative;
	padding: 10px;
	.login-form {
		display: flex;
		flex-direction: column;
		height: auto;
		margin-bottom: 20px;
		position: relative;
		width: 100%;

		.login-item {
			margin-bottom: 10px;
		}

		.login-button {
			margin-bottom: 10px;
			margin-top: 10px;
		}
	}
	.social-button {
		width: 75px;
		background: white;
		padding: 10px;
		border-radius: 100%;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0,2);
		outline: 0;
		border: 0;
	}
	.social-button:active {
		display: relative;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	}
	.social-button img {
		width: 100%;
	}
}
</style>

