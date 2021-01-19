The general navbar for our project
<template>
	<div class="navbar-wrapper">
		<div class="nav-title flex-item">
			PDX Nurse Rental
		</div>
		<div class="nav-links flex-item">
			<router-link to="/">
				Home
			</router-link> |
			<router-link to="/about">
				About
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBar",
}
</script>

<style lang='less'>
.navbar-wrapper {
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	.flex-item {
		@v-padding: 30px;
		@h-padding: 15px;
		padding-bottom: @v-padding;
		padding-left: @h-padding;
		padding-right: @h-padding;
		padding-top: @v-padding;
	}
	.nav-links {
		margin-left: auto;
	}
	.nav-title {
		margin-right: auto;
	}
	a {
		font-weight: bold;
		color: #2c3e50;
	}
	a.router-link-exact-active {
		color: #42b983;
	}
}

</style>

