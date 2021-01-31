
<template>
	<div
		class="search-execute"
		@click="$emit('click')"
	>
		<!-- TODO: write up a transition here with computed class -->
		<span
			class="execute-text"
		>
			Book
		</span>
	</div>
</template>

<script>
export default {
	name: "BookButton",
	props:
	{
		/** Whether we are in loading state or not
		*/
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
.search-execute {
	background-color: black;
	border-radius: 10px;
	color: yellow;
	display: flex;
	height: 50px;
	margin-top: 5px;
	padding: 3px;
	text-align: center;
	vertical-align: middle;
	width: 60%;

	.execute-text {
		margin: auto;
	}
}

</style>
