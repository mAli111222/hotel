import Vue from 'vue'

function initialState()
{
	return {
		bannerMessage: '',
		footerMessage: '',
		isShowingBanner: false,
		isShowingFooter: false,
		isShowingNav: true,
	}
}

export default
{
	state: initialState(),

	getters:
	{
	},

	mutations:
	{
	},

	actions:
	{
	}
}
