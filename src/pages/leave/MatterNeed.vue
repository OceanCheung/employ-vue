<template>
  <div class="leaveList">
     <el-table :data="tableData" style="width: 100%">
      <el-table-column label="请假日期" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.leaveDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="请假天数" width="180">
        <template slot-scope="scope">
          <span >{{ scope.row.leaveDays }}</span>
        </template>
      </el-table-column>
      <el-table-column label="请假理由" width="180">
        <template slot-scope="scope">
          <span >{{ scope.row.leaveReason }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="showPicture(scope.$index, scope.row)">查看流程图</el-button>
          <el-button v-show="scope.row.applyBtnState"
            size="mini"
            type="primary"
            @click="handleApply(scope.$index, scope.row)">审核申请</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--对话框 显示流程图-->
    <el-dialog title="流程图" :visible.sync="dialogVisible" width="80%">
      <img :src="picture">
    </el-dialog>

  </div>
</template>
<script>
  export default {
    name: "leaveList",
    data() {
      return {
        tableData: [],
        dialogVisible:false,
        picture:''
      }
    },
    methods: {
      showPicture(index, row) {
        let processIntanceId = row.processIntanceId;
        let params = 'processInstanceId='+processIntanceId;
        this.dialogVisible=true;
        this.picture = this.$apiOther.lookCurrentProcessImage(params);
      },
      handleApply(index, row) {
        let params = {
          'leaveId':row.id
        }
        //row.applyBtnState=false;
        console.info(row)
        this.$api.commitLeave(params).then(res => {
          if(res.data.code==1){
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
            //
            row.applyBtnState=false;
          } 
        }).catch(err => {
            console.error('错误', err);
        })
      },
      initLeaveList(){
        let userName = sessionStorage.getItem('userName');
        let params = "/"+userName+"/0/10";
        this.$api.listWaitMatterPage(params).then(res => {
            let array = res.data.data;
            array.forEach(element => {
              //console.info('tag', element.leaveDate)
              element.leaveDate = new Date(element.leaveDate).toLocaleString();
              element.applyBtnState = true;
            });
            this.tableData = array;
          }).catch(err => {
            console.error('错误', err);
          })
      }
    },
    mounted(){
      this.initLeaveList();
    }
  };
</script>
<style lang="less" scoped>

</style>


