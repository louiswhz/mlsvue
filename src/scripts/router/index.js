import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import Board from '@/scripts/components/Board'
import Classify from '@/scripts/components/Classify'
import Minicar from '@/scripts/components/Minicar'
import Mine from '@/scripts/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
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
        }
      ]
    }
  ]
})