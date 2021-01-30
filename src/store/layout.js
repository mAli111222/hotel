import Vue from "vue"

function initialState ()
{
	return {
		bannerMessage: "",
		footerMessage: "",
		isNavCollapsed: false,
		isShowingBanner: false,
		isShowingFooter: false,
		isShowingNav: true,
	}
}

export default
{
	state: initialState(),

	getters:
	{},

	mutations:
	{
		setIsNavCollapsed (state, value)
		{
			state.isNavCollapsed = value
		},

		setIsShowingBanner (state, value)
		{
			state.isShowingBanner = value
		},

		setIsShowingFooter (state, value)
		{
			state.isShowingFooter = value
		},

		setIsShowingNav (state, value)
		{
			state.isShowingNav = value
		},
	},

	actions:
	{},
}
