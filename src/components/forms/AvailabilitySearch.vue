<template>
	<div
		class="search-wrapper"
	>
		<div
			v-if="isLoading"
			class="content-section"
		>
			<AvailabilitySearchBar is-loading />
			<BookButton is-loading />
		</div>
		<div
			v-else
			class="content-section"
		>
			<form class="search-box">
				<AvailabilitySearchBar />
				<BookButton />
			</form>
		</div>
	</div>
</template>

<script>
import AvailabilitySearchBar from "@/components/search_bars/AvailabilitySearchBar"
import BookButton from "@/components/buttons/submissions/BookButton.vue"
export default {
	name: "AvailabilitySearch",
	components:
	{
		AvailabilitySearchBar,
		BookButton,
	},
	data: function()
	{
		return {
			isLoading: false,
			searchQuery: "",
		}
	},
	props:
	{},
	methods:
	{
		/**
		 */
		async handleAvailabilitySearch ()
		{
			this.isLoading = true
			try
			{
				// sleep for .5 seconds
				await new Promise((r) => setTimeout(r, 500))
				this.isLoading = false
			}
			catch (error)
			{
				this.hasError = true
				this.isLoading = false
			}
		},
	},
}
</script>

<style lang="less" scoped>
.search-wrapper {
	display: relative;
	height: 100%;
	width: 100%;

	.content-section {
		display: relative;
		height: 100%;;
		overflow: hidden;
		width: 100%;

		.search-box {
			align-items: center;
			display: flex;
			flex-direction: column;
			height: 100%;
			text-align: center;
			margin-top: 20px;
			width: 100%;

		}
	}
}
</style>

<docs>
</docs>

