import Vue from 'vue'
import vcSteps from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },
            show: true,
            closeable: true,
            title: '主标题',
            subTitle: '副标题',
            steps: [{
                time: "2016-08-08 08:08:08",
                record: "已经完成的1",
                // status: 'finish' 可以不写，传入的steps会在组件自动补上`finish` status
            }, {
                time: "2016-08-08 08:08:08",
                record: "已经完成的2",
                status: 'finish'
            }, {
                time: "2016-08-08 08:08:08",
                record: "已经完成的3",
                status: 'error'
            }], 
            allSteps: [{
                time: "2016-08-08 08:08:08",
                record: "预设1",
                status: 'wait'
            }, {
                time: "2016-08-08 08:08:08",
                record: "预设2",
                status: 'wait'
            }, {
                record: '预设3',
                status: 'wait'
            }, {
                record: "预设4",
                status: 'wait'
            }]
		}
	},
    methods: {
    },
	components: {
        vcSteps
	}
})
