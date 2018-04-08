<template>
  <div class="login">
    <el-container>
      <el-main>
        <div class="loginForm">
          <div class="title">用户登录</div>
          <el-form :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
            <el-form-item prop="userName">
              <el-input class="el-input-1" v-model="formLabelAlign.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="formLabelAlign.password" placeholder="请输入密码"></el-input>
            </el-form-item>
           
            <el-form-item class="loginBtns">
              <el-button type="primary" @click="submitForm">登录</el-button>
              <el-button @click="resetForm('formLabelAlign')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <img :src="backgroundImage">
      </el-main>
      <el-footer class="foot" >
        Copyright © 2018 Ocean（系统建设：审批业务系统）
      </el-footer>
  </el-container>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        backgroundImage:require('../assets/images/login.png'),
        formLabelAlign: {
          userName: '',
          password: ''
        },
        rules:{

        }
      }
    },
    methods: {
      submitForm(formName){
        // this.$refs[formName].validate((valid) => {
        // if (valid) {
        //    alert('submit!');
        //  } else {
        //    console.log('error submit!!');
        //    return false;
        //  }
        //});
        let params = this.formLabelAlign;
        this.$api.login(params).then(res => {
          //console.log('信息', res);
          //console.log('信息', res.data.data.id);
           //存入sessionStorage
          sessionStorage.setItem('userId',res.data.data.id);
          sessionStorage.setItem('userName',res.data.data.userName);
           //调用登录接口,成功后跳到主界面
          this.$router.push({path:"/PersonInfo",params:{}});
        }).catch(err => {
          console.error('错误', err);
        })
       
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="less" scoped>
  @width:80%;
  @margin-left:10%;
  .login{
    overflow: hidden;
  }
  .el-main{
    overflow: hidden;
    padding: 0;
  }
  .foot{
      background-color: #EFF4F8;
      height:160px !important;
      padding-top: 0px;
      text-align: center;
      font-size: 13px;
      color: #b6bac3;
  }
  .loginForm{
    position: absolute;
    z-index: 99999;
    width: 350px;
    height: 340px;
    margin-left: 60%;
    margin-top: 10%;
    background: #fff;
    border-radius: 3px;
  }
  .el-input-1{
    margin-top: 50px;
  }
  .el-input{
     width: @width;
     margin-left: @margin-left;
  }
  .title{
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    color: #409EFF;
    font-weight: bold;
    border-bottom: 1px solid #d8d8d8;
    height: 40px;
  }
  .loginBtns{
    text-align: center;
    margin-top: 30px;
  }
  
 
</style>

