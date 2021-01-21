<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>

// @ is an alias to /src
import {DB} from "../db.js"
import HelloWorld from "@/components/HelloWorld.vue"

export default {
	name: "Home",
	components: {
		HelloWorld,
	},
	created: function()
	{
		console.log(DB)
	},
}
</script>
