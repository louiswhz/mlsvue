Vue.config.productionTip = false

require('./style/app.scss')

import Vue from 'vue'
/* eslint-disable no-new */
import index from './components/index.vue'

new Vue({

	el:'#app',
	// template:'<index />',
	components:{ index }

})