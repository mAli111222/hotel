import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import { firestorePlugin } from "vuefire"

Vue.config.productionTip = false

new Vue({
	firestorePlugin, 
	router,
	render: (h) => h(App),
}).$mount("#app")
