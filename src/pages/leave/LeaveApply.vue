<template>
  <div class="leaveapply">
    <el-form ref="form"  :model="form" label-width="80px">
      <el-form-item prop="leaveDays" label="请假天数">
        <el-input v-model.number="form.leaveDays"></el-input>
      </el-form-item>
      <el-form-item prop="leaveReason" label="请假理由">
        <el-input type="textarea" v-model="form.leaveReason"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即申请</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'leaveapply',
  data() {
      return {
        form: {
          'leaveDays': '',
          'leaveReason': '',
          'user.id':''
        }
      }
    },
    methods: {
      onSubmit() {
        let params = this.form;
        this.$api.applyLeave(params).then(res =>{
          if(res.data.code==1){
             this.$message({
              message: '申请请假成功',
              type: 'success'
            });
          }
          this.resetForm('form');
        }).catch(err => {
          console.error('错误', err);
        })
      },
      resetForm(formName){
         this.$refs[formName].resetFields();
      }
    },
    mounted(){
      this.form['user.id']=sessionStorage.getItem('userId');
    }
}
</script>
<style lang="less" scoped>
  .leaveapply{
    width: 50%;
  }
</style>