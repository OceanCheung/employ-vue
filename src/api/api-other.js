import ajaxUrl from './libs/url';

//根据流程实例查询流程图
const lookCurrentProcessImage = (params) => { return ajaxUrl + 'leave/lookCurrentProcessImage?' + params };

const apiOtherList = {
    lookCurrentProcessImage
}

export default apiOtherList;