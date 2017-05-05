Vue.config.productionTip = false

require('./styles/app.scss')

import Vue from 'vue'
/* eslint-disable no-new */

import router from './scripts/router/index'

new Vue({

	el:'#app',
	router,
	template: '<router-view></router-view>'

})