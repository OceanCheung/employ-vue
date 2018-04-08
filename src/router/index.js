import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Echarts from '@/pages/basic/Echarts'
import PersonInfo from '@/pages/basic/PersonInfo'
import LeaveApply from '@/pages/leave/LeaveApply'
import LeaveList from '@/pages/leave/LeaveList'
import MatterHistory from '@/pages/leave/MatterHistory'
import MatterNeed from '@/pages/leave/MatterNeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      name: '基础设置',
      iconCls: 'el-icon-info',
      component: Home,
      children:[
        { path: '/PersonInfo', name: '个人信息列表', component: PersonInfo },
        { path: '/Echarts', name: 'Echarts图表', component: Echarts }
      ]
    },
    {
      path: '/',
      name: '请假管理',
      iconCls:'el-icon-date',
      component: Home,
      children: [
        { path: '/LeaveApply', name: '请假申请', component: LeaveApply },
        { path: '/LeaveList', name: '请假列表', component: LeaveList },
        { path: '/MatterNeed', name: '待办事项', component: MatterNeed },
        { path: '/MatterHistory', name: '已办事项', component: MatterHistory }
      ]
    }
  ]
})
