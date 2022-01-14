import Vue from 'vue'
import Router from 'vue-router'

import core from './components/core.vue'
import hut from './components/hut.vue'
import journey from './components/journey.vue'
import quiz from './components/quiz.vue'
import treasures from './components/treasures.vue'
import thank from './components/thank.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/', 
      name: 'main',
      component: core,
    },
    {
      path: '/hut', 
      name: 'hut',
      component: hut,
    },
    {
      path: '/journey', 
      name: 'journey',
      component: journey,
    },
    {
      path: '/quiz', 
      name: 'quiz',
      component: quiz,
    },
    {
      path: '/terms', 
      name: 'terms',
      component: treasures,
    },
    {
      path: '/thank', 
      name: 'thank',
      component: thank,
    },
  ],
  scrollBehavior () {
    return { x: 0, y: -3000 }
  }

})


export default router
