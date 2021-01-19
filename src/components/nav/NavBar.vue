The general navbar for our project
<template>
	<div class="navbar-wrapper">
		<div class="nav-title flex-item">
			PDX Nurse Furnishing
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
		flex: 1 1 160px;
		padding-bottom: @v-padding;
		padding-top: @v-padding;
	}
	.nav-links {
		margin-left: auto;
		position: relative;
		width: 100%;
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

