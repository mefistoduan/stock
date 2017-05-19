import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import tasks from '@/views/tasks'
import me from '@/views/me'
import coupon from '@/views/coupon'
import collect from '@/views/collect'
import history_appraise from '@/views/history_appraise'
import help from '@/views/help'
import appoint from '@/views/appoint'
import set_up from '@/views/set_up'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: tasks
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/history_appraise',
      name: 'history_appraise',
      component: history_appraise
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/appoint',
      name: 'appoint',
      component: appoint
    },
    {
      path: '/set_up',
      name: 'set_up',
      component: set_up
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
