<template>
	<transition
		name='fade'
		mode="out-in"
	>
		<div
			v-if="isLoading"
			class="search-query"
			key="loading"
		>
			loading...
		</div>
		<input
			v-else
			v-model="searchQuery"
			class="search-query"
			key="booking"
			type="text"
			placeholder="Search for Availability"
		>
	</transition>
</template>

<script>
export default {
	name: "AvailabilitySearchBar",
	data: function()
	{
		return {
			// TODO: Sync to parent/update parent...
			searchQuery: "",
		}
	},
	props:
	{
		/** Whether we are in loading state or not */
		isLoading:
		{
			default: false,
			required: false,
			type: Boolean,
		},
	},
}
</script>

<style lang="less" scoped>
.search-query {
	border-radius: 10px;
	/*TODO: get a better color palette*/
	border: 1px solid gold;
	height: 50px;
	text-align: center;
	width: 80%;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>
