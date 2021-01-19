import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	actions:
	{},
	getters:
	{},
	modules:
	{},
	mutations:
	{
		hideBottomBanner (state)
		{
			state.isShowingBottomBanner = false
		},
		hideNav (state)
		{
			state.isShowingNav = false
		},
		hideTopBanner (state)
		{
			state.isShowingTopBanner = false
		},

		showBottomBanner (state)
		{
			state.isShowingBottomBanner = true
		},
		showNav (state)
		{
			state.isShowingNav = true
		},
		showTopBanner (state)
		{
			state.isShowingTopBanner = true
		},

	},
	state: {
		isShowingBottomBanner: false,
		isShowingNav: true,
		isShowingTopBanner: false,
	},
})
