import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import Board from '@/scripts/components/Board'
import Classify from '@/scripts/components/Classify'
import Minicar from '@/scripts/components/Minicar'
import Mine from '@/scripts/components/Mine'
import Detail from '@/scripts/components/Detail'
import Home from '@/scripts/components/Home'
import ToBuy from '@/scripts/components/ToBuy'
import Home from '@/scripts/components/Home'
import Search from '@/scripts/components/Search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'/board',
      children: [
        {
          path: 'board',
          component: Board
        },
        {
          path: 'classify',
          component: Classify
        },
        {
          path: 'minicar',
          component: Minicar
        },
        {
          path: 'mine',
          component: Mine
        },
        {
          path: 'home',
          component: Home
      	},
        {
          path: 'search',
          component: Search
        }
      ]
    },
    {

      path: '/tobuy/:id',
      component: ToBuy
    },
    {
      path: '/detail/:signGoodsId',
      component: Detail

    }
  ]
})
