import ajax from './libs/ajax';
import ajaxUrl from './libs/url';

//验证码
const captcha = () => { return ajax.get('app/captcha') };
//登录
const login = (params) => { return ajax.post('user/login', params)};
//申请请假
const applyLeave = (params) => { return ajax.post('leave/applyLeave',params)};
//请假列表
const leaveList = (params) => { return ajax.post('leave/leaveList', params)};
//提交请假
const commitLeave = (params) => { return ajax.post('leave/commitLeave',params)};
//根据角色查询待办的任务集合
const listWaitMatterPage = (params) => { return ajax.post('leave/listWaitMatterPage'+params,params)}



//API集合
const apiList = {
  captcha, login, applyLeave, leaveList, commitLeave, listWaitMatterPage
};

export default apiList;
