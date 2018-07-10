<style lang="less">
	@import "./cs-table.less";
</style>
<template>
	<div class="bpb_table">
		<div class="bpb_table_search">
			<Input v-model="searchConName" placeholder="请输入车牌号搜搜..." style="width: 200px" />
			<span @click="handleSearch" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
			<Button @click="handleCancel" type="ghost" class="bpb_cancel">取消</Button>
		</div>
		<Table :columns="historyColumns" :data="historyData"></Table>
		<Modal :title="plate_no" v-model="visible">
			<img :src="carimg" v-if="visible" style="width: 100%">
		</Modal>
		<Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
	</div>
</template>
<style scoped>
	.paging {
		float: right;
		margin-top: 10px;
	}
</style>
<script>
	import { userinfoList } from '@/api/userinfo'
	let testData = {
		"histories": [{
				"username": "智能审批",
				"shenpistatus": "审批已通过",
				"plate_no": "陕A839VL",
				"time": "2017-07-24 18:11",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批已通过",
				"plate_no": "粤BDB3895",
				"time": "2017-07-24 18:11",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/37b398d8-8273-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/37b3ad1e-8273-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批已通过",
				"plate_no": "粤BDB3895",
				"time": "2017-07-24 10:04",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-24 10:03",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-24 10:02",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:23",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:23",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:21",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:21",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:20",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:20",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:14",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:13",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:11",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-21 14:10",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-20 18:09",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-20 18:08",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-20 18:08",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-20 18:07",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-20 18:05",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批已通过",
				"plate_no": "粤BDB3895",
				"time": "2017-07-20 15:50",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批已通过",
				"plate_no": "粤BDB3895",
				"time": "2017-07-20 15:20",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			},
			{
				"username": "智能审批",
				"shenpistatus": "审批被拒绝",
				"plate_no": "粤BDB3895",
				"time": "2017-07-19 18:27",
				"carimg": 'https://wxapi.benpaobao.com/static/origin/user_info_img/car_img/a202c97e-80e4-11e8-af71-00163e0ad122.jpg',
				"carsmimg": 'https://wxapi.benpaobao.com/static/small/user_info_img/car_img/a202fc14-80e4-11e8-af71-00163e0ad122.jpg'
			}
		]
	}
	export default {
		data() {
			return {
				searchConName: '',
				visible: false,
				carimg: '',
				plate_no: '',
				ajaxHistoryData: [],
				// 初始化信息总条数
				dataCount: 0,
				// 每页显示多少条
				pageSize: 10,
				historyColumns: [{
						title: '人员',
						key: 'username'
					},
					{
						title: '操作',
						key: 'shenpistatus'
					},
					{
						title: '车牌号',
						key: 'plate_no'
					},
					{
						title: '时间',
						key: 'time'
					},
					{
						title: '车辆照片',
						key: 'carimg',
						render: (h, params) => {
							console.log(params.row)
							return h('div', {
								attrs: {
									style: 'width: 128px;height:72px;margin-top: 10px;margin-bottom: 10px;'
								},
							}, [
								h('img', {
									props: {
										type: 'primary',
										size: 'small'
									},
									attrs: {
										src: params.row.carsmimg,
										style: 'width: 128px;height: 72px;cursor: pointer;'
									},
									on: {
										click: () => {
											this.carimg = params.row.carimg;
											this.plate_no = params.row.plate_no;
											this.visible = true;
										}
									},
									style: {},
								}),
							]);
						}
					},

				],
				historyData: []
			}
		},
		methods: {
			// 获取历史记录信息
			handleListApproveHistory() {

				// 保存取到的所有数据
				this.ajaxHistoryData = testData.histories
				this.dataCount = testData.histories.length;
				// 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
				if(testData.histories.length < this.pageSize) {
					this.historyData = this.ajaxHistoryData;
				} else {
					this.historyData = this.ajaxHistoryData.slice(0, this.pageSize);
				}

			},
			changepage(index) {
				var _start = (index - 1) * this.pageSize;
				var _end = index * this.pageSize;
				this.historyData = this.ajaxHistoryData.slice(_start, _end);
			},
			handleSearch() {
				console.log(this.searchConName)
			},
			handleCancel() {
				console.log('取消')
			},
			init() {
				return new Promise((resolve, reject) => {
					userinfoList().then(response => {
						console.log(response)
					}).catch(error => {
						reject(error)
					})
				})
			}
		},
		created() {
			this.handleListApproveHistory();
		},
		mounted() {
			this.init();
		}
	}
</script>