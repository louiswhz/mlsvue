<!-- <template>
	<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
		<div class="c-fashion-list">
	          <ul>
	            <li v-for="(item,index) in classifydatalist" :key="index">
	              <div><img :src="item.image"/></div>
	              <div><i><b>优选</b></i><span v-html="item.title"></span></div>
	              <div><i>￥</i><i v-text="item.price"></i><span><b></b></span></div>
	            </li>
	          </ul>
	    </div>
	</mt-loadmore>
</template>

<script>

import Vue from 'vue';
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
import { Indicator } from 'mint-ui';
import utilAxios from '../utils/axios'
export default {	
	data() {
      return {
        classifydatalist:[],
        allLoaded: false,
        count:0,
      }
    },
    methods:{
      loadBottom: function () {
        let that = this
        // let type = that.$route.params.type
        utilAxios.get({
          url: `/api/goodsunit/aj/wall?offset=${that.count+=10}&frame=2&trace=0&limit=10&endId=0&id=6265`,
          method: 'get',
           callback: function (res) {
            that.classifydatalist = that.classifydatalist.concat(res.data.data.rows)
            this.allLoaded = false;
            that.$refs.loadmore.onBottomLoaded()       
          }
        })
      }  
    },
    mounted: function () {
      let that = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      utilAxios.get({
        url: '/api/goodsunit/aj/wall?offset=0&frame=0&trace=0&limit=10&endId=0&id=6265',
        method: 'get',
        callback: function (res) {
          // console.log(res)
          that.classifydatalist = that.classifydatalist.concat(res.data.data.rows)
          Indicator.close()
        }
      })
    }
}
</script> -->