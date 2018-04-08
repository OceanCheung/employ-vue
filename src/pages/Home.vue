<template>
  <div class="home">
    <el-container class="container-home">
      <el-header>Header</el-header>
      <el-container class="container-main">
        <el-aside :class="collapsed?'menu-collapsed':'menu-expanded'">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose" unique-opened router v-show="!collapsed">
                <div v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                  <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                  </el-submenu>
                    <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                </div>
				      </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
            Copyright © 2018 Ocean（系统建设：审批业务系统）
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data(){
      return{
        collapsed:false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" scoped>
   @background-color:#E6E6E6;
  .home,.container-home{height:100%;}
  .el-header {
    background-color: @background-color;
    color: #333;
    text-align: center;
    line-height: 100px;
    height: 10% !important;
  }
  .container-main{
    height: 90% !important;
    width: 100%;
  }
   .el-footer{
      background-color:@background-color;
      color: #333;
      text-align: center;
      line-height: 60px;
   }
  
  .el-aside {
    //background-color: @background-color;
    color: #333;
    text-align: center;
    line-height: 200px;
    width:12%!important;
  }
  

  
  

</style>


