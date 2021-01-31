<template>
	<div id="app">
		<!-- TODO: Tie into vue comps -->
		<AppSection
			:isShowing="$store.state.layout.isShowingBanner"
			@click="$store.commit('setIsShowingBanner', false)"
		>
			<div id="top-banner" />
		</AppSection>

		<!-- Handle appSection click for navbar on chevron and ations instead.. -->
		<AppSection
			styles="min-height: 20px"
			:isCollapsed="$store.state.layout.isNavCollapsed"
			is-showing
		>
			<NavBar id="nav-wrapper" />
		</AppSection>

		<AppSection
			styles="flex: 1; max-height: 4000px;"
			is-showing
		>
			<router-view id="content-wrapper" />
		</AppSection>
		<AppSection
			:isShowing="$store.state.layout.isShowingFooter"
			@click="$store.commit('setIsShowingFooter', false)"
		>
			<div id="bottom-banner" />
		</AppSection>
	</div>
</template>

<script>
import AppSection from "components/common/AppSection"
import NavBar from "components/nav/NavBar"

export default {
	name: "App",
	components:
	{
		AppSection,
		NavBar,
	},
	data: function()
	{
		return {
			isNavCollapsed: true,
		}
	},
	computed:
	{},
	created: function()
	{
		// console.log(this.$store.state.layout.isShowingBanner)
	},
}
</script>

<style>

html, body {
	height: 100%;
	margin: 0;
	padding: 0;
	width: 100%;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: blue;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	height: 100%;
	max-height: 100%;
	min-height: 100%;
	text-align: center;
	width: 100%;

}
#bottom-banner {
	background-color: red;
	bottom: 0;
	height: 50px;
	width: 100%;
}
#content-wrapper {
	background-color: yellow;
	flex-grow: 1;
	overflow: scroll;
}

#nav-wrapper {
	background-color: green;
}

#top-banner {
	background-color: red;
	height: 50px;
	padding: 0;
	margin: 0;
	width: 100%;
}
</style>
