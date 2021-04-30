import Vue from "vue"
import Router from "vue-router"
import CreateEvaluation from "../normal/CreateEvaluation.vue";
import CrEvaform from "../normal/CreateEvaluationForm.vue";
import HwList from "../normal/HomeworkList.vue"
import HwDetail from "../normal/HomeworkDetail.vue"
import Performance from "../normal/Performance.vue"
import PfmDetail from "../normal/PerformanceDetail.vue"
import GrdList from "../normal/GradeList.vue"
import AstList from "../normal/AssistantList.vue"
import ClsInfo from "../normal/ClassInfo.vue"
import CrtClass from "../normal/CreatClass.vue"

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			name:'CrEva',
			component:CreateEvaluation
		},
		{
			path:'/evacr',
			name:'CrEvaf',
			component:CrEvaform
		},
		{
			path:'/hwlist',
			name:'HwList',
			component:HwList
		},
		{
			path:'/hwdetail',
			name:'HwDetail',
			component:HwDetail
		},
		{
			path:'/performance',
			name:'Performance',
			component:Performance
		},
		{
			path:'/pfmdetail',
			name:'PfmDetail',
			component:PfmDetail
		},
		{
			path:'/gradelist',
			name:'GrdList',
			component:GrdList
		},
		{
			path:'/astlist',
			name:'AstList',
			component:AstList
		},
		{
			path:'/clsinfo',
			name:'ClsInfo',
			component:ClsInfo
		},
		{
			path:'/crtclass',
			name:'CrtClass',
			component:CrtClass
		},
	]
})