<template>
	<div
		v-if="isLoading"
		class="search-query"
	>
		loading...
	</div>
	<input
		v-else
		v-model="searchQuery"
		class="search-query"
		type="text"
		placeholder="Search for Availability"
	>
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
</style>
