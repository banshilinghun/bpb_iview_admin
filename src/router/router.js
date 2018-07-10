import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
	path: '/login',
	name: 'login',
	meta: {
		title: '奔跑宝 - 登录'
	},
	component: () =>
		import('@/views/login.vue')
};

export const page404 = {
	path: '/*',
	name: 'error-404',
	meta: {
		title: '404-页面不存在'
	},
	component: () =>
		import('@/views/error-page/404.vue')
};

export const page403 = {
	path: '/403',
	meta: {
		title: '403-权限不足'
	},
	name: 'error-403',
	component: () =>
		import('@//views/error-page/403.vue')
};

export const page500 = {
	path: '/500',
	meta: {
		title: '500-服务端错误'
	},
	name: 'error-500',
	component: () =>
		import('@/views/error-page/500.vue')
};

export const preview = {
	path: '/preview',
	name: 'preview',
	component: () =>
		import('@/views/form/article-publish/preview.vue')
};

export const locking = {
	path: '/locking',
	name: 'locking',
	component: () =>
		import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
	path: '/',
	name: 'otherRouter',
	redirect: '/home',
	component: Main,
	children: [{
			path: 'home',
			title: {
				i18n: 'home'
			},
			name: 'home_index',
			component: () =>
				import('@/views/home/home.vue')
		},
		{
			path: 'ownspace',
			title: '个人中心',
			name: 'ownspace_index',
			component: () =>
				import('@/views/own-space/own-space.vue')
		},
		{
			path: 'order/:order_id',
			title: '订单详情',
			name: 'order-info',
			component: () =>
				import('@/views/advanced-router/component/order-info.vue')
		}, // 用于展示动态路由
		{
			path: 'shopping',
			title: '购物详情',
			name: 'shopping',
			component: () =>
				import('@/views/advanced-router/component/shopping-info.vue')
		}, // 用于展示带参路由
		{
			path: 'message',
			title: '消息中心',
			name: 'message_index',
			component: () =>
				import('@/views/message/message.vue')
		}
	]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
		path: '/customer',
		icon: 'person-stalker',
		name: 'customer',
		title: '客户管理',
		component: Main,
		children: [{
				path: 'customer-info',
				icon: 'clipboard',
				name: 'customer-info',
				title: '客户信息',
				component: () =>
					import('@/views/customer/customer-info/customer-info.vue')
			},
			{
				path: 'customer-audit',
				icon: 'android-contact',
				name: 'customer-audit',
				title: '客户审核',
				component: () =>
					import('@/views/customer/customer-audit/customer-audit.vue')
			}
		]
	},
	{
		path: '/advertising',
		icon: 'pricetags',
		name: 'advertising',
		title: '广告管理',
		component: Main,
		children: [{
				path: 'advertising-info',
				icon: 'pricetag',
				name: 'advertising-info',
				title: '广告信息',
				component: () =>
					import('@/views/advertising/advertising-info/advertising-info.vue')
			},
			{
				path: 'advertising-audit',
				icon: 'ios-pricetags',
				name: 'advertising-audit',
				title: '广告审核',
				component: () =>
					import('@/views/advertising/advertising-audit/advertising-audit.vue')
			},
			{
				path: 'advertising-track',
				icon: 'ios-glasses',
				name: 'advertising-track',
				title: '项目跟踪',
				component: () =>
					import('@/views/advertising/advertising-track/advertising-track.vue')
			}
		]
	},
	{
		path: '/car',
		icon: 'model-s',
		name: 'car',
		title: '车辆管理',
		component: Main,
		children: [{
				path: 'car-audit',
				icon: 'android-car',
				name: 'car-audit',
				title: '车主审核',
				component: () =>
					import('@/views/car/car-audit/car-audit.vue')
			},
			{
				path: 'car-info',
				icon: 'ios-paper',
				name: 'car-info',
				title: '车主信息',
				component: () =>
					import('@/views/car/car-info/car-info.vue')
			}
		]
	},
	{
		path: '/didi',
		icon: 'trophy',
		name: 'didi',
		title: '滴滴管理',
		component: Main,
		children: [{
				path: 'didi-audit',
				icon: 'waterdrop',
				name: 'didi-audit',
				title: '滴滴车主审核',
				component: () =>
					import('@/views/didi/didi-audit/didi-audit.vue')
			},
			{
				path: 'didi-already',
				icon: 'happy',
				name: 'didi-already',
				title: '已接广告车主',
				component: () =>
					import('@/views/didi/didi-already/didi-already.vue')
			},
			{
				path: 'diid-income',
				icon: 'social-yen',
				name: 'diid-income',
				title: '滴滴车主收益',
				component: () =>
					import('@/views/didi/diid-income/diid-income.vue')
			}
		]
	},
	{
		path: '/service',
		icon: 'cube',
		name: 'service',
		title: '服务网点管理',
		component: Main,
		children: [{
				path: 'service-info',
				icon: 'ios-grid-view',
				name: 'service-info',
				title: '服务网点信息',
				component: () =>
					import('@/views/service/service-info/service-info.vue')
			},
			{
				path: 'service-audit',
				icon: 'ios-cog',
				name: 'service-audit',
				title: '服务网点审核',
				component: () =>
					import('@/views/service/service-audit/service-audit.vue')
			}
		]
	},
	{
		path: '/operation',
		icon: 'easel',
		name: 'operation',
		title: '运营管理',
		component: Main,
		children: [
			{
				path: 'register-audit',
				icon: 'ios-list',
				name: 'register-audit',
				title: '广告登记审核',
				component: () =>
					import('@/views/operation/register-audit/register-audit.vue')
			},
			{
				path: 'register-list',
				icon: 'android-list',
				name: 'register-list',
				title: '广告登记记录',
				component: () =>
					import('@/views/operation/register-list/register-list.vue')
			},
			{
				path: 'check-audit',
				icon: 'film-marker',
				name: 'check-audit',
				title: '广告检测审核',
				component: () =>
					import('@/views/operation/check-audit/check-audit.vue')
			},
			{
				path: 'check-list',
				icon: 'social-instagram',
				name: 'check-list',
				title: '广告检测记录',
				component: () =>
					import('@/views/operation/check-list/check-list.vue')
			},
			{
				path: 'reserve',
				icon: 'ios-time',
				name: 'reserve',
				title: '预约记录',
				component: () =>
					import('@/views/operation/reserve/reserve.vue')
			},
			{
				path: 'mount-list',
				icon: 'ios-filing',
				name: 'mount-list',
				title: '网点安装记录',
				component: () =>
					import('@/views/operation/mount-list/mount-list.vue')
			},
			{
				path: 'paint-off',
				icon: 'ios-color-filter',
				name: 'paint-off',
				title: '掉漆管理',
				component: () =>
					import('@/views/operation/paint-off/paint-off.vue')
			},
			{
				path: 'damage',
				icon: 'sad',
				name: 'damage',
				title: '损坏管理',
				component: () =>
					import('@/views/operation/damage/damage.vue')
			},
			{
				path: 'violation',
				icon: 'social-snapchat',
				name: 'violation',
				title: '违章管理',
				component: () =>
					import('@/views/operation/violation/violation.vue')
			}
		]
	},

	{
		path: '/cs-table',
		icon: 'person-stalker',
		name: 'cstable',
		title: '表格测试',
		component: Main,
		children: [{
			path: 'index',
			title: '表格测试',
			name: 'cstable_index',
			component: () =>
				import('@/views/cs-table/cs-table.vue')
		}]
	}, {
		path: '/access',
		icon: 'key',
		name: 'access',
		title: '权限管理',
		component: Main,
		children: [{
			path: 'index',
			title: '权限管理',
			name: 'access_index',
			component: () =>
				import('@/views/access/access.vue')
		}]
	}, {
		path: '/access-test',
		icon: 'lock-combination',
		title: '权限测试页',
		name: 'accesstest',
		access: 0,
		component: Main,
		children: [{
			path: 'index',
			title: '权限测试页',
			name: 'accesstest_index',
			access: 0,
			component: () =>
				import('@/views/access/access-test.vue')
		}]
	}, {
		path: '/international',
		icon: 'earth',
		title: {
			i18n: 'international'
		},
		name: 'international',
		component: Main,
		children: [{
			path: 'index',
			title: {
				i18n: 'international'
			},
			name: 'international_index',
			component: () =>
				import('@/views/international/international.vue')
		}]
	}, {
		path: '/component',
		icon: 'social-buffer',
		name: 'component',
		title: '组件',
		component: Main,
		children: [{
				path: 'text-editor',
				icon: 'compose',
				name: 'text-editor',
				title: '富文本编辑器',
				component: () =>
					import('@/views/my-components/text-editor/text-editor.vue')
			},
			{
				path: 'md-editor',
				icon: 'pound',
				name: 'md-editor',
				title: 'Markdown编辑器',
				component: () =>
					import('@/views/my-components/markdown-editor/markdown-editor.vue')
			},
			{
				path: 'image-editor',
				icon: 'crop',
				name: 'image-editor',
				title: '图片预览编辑',
				component: () =>
					import('@/views/my-components/image-editor/image-editor.vue')
			},
			{
				path: 'draggable-list',
				icon: 'arrow-move',
				name: 'draggable-list',
				title: '可拖拽列表',
				component: () =>
					import('@/views/my-components/draggable-list/draggable-list.vue')
			},
			{
				path: 'area-linkage',
				icon: 'ios-more',
				name: 'area-linkage',
				title: '城市级联',
				component: () =>
					import('@/views/my-components/area-linkage/area-linkage.vue')
			},
			{
				path: 'file-upload',
				icon: 'android-upload',
				name: 'file-upload',
				title: '文件上传',
				component: () =>
					import('@/views/my-components/file-upload/file-upload.vue')
			},
			{
				path: 'scroll-bar',
				icon: 'android-upload',
				name: 'scroll-bar',
				title: '滚动条',
				component: () =>
					import('@/views/my-components/scroll-bar/scroll-bar-page.vue')
			},
			{
				path: 'count-to',
				icon: 'arrow-graph-up-right',
				name: 'count-to',
				title: '数字渐变',
				// component: () => import('@/views/my-components/count-to/count-to.vue')
				component: () =>
					import('@/views/my-components/count-to/count-to.vue')
			},
			{
				path: 'split-pane-page',
				icon: 'ios-pause',
				name: 'split-pane-page',
				title: 'split-pane',
				component: () =>
					import('@/views/my-components/split-pane/split-pane-page.vue')
			}
		]
	}, {
		path: '/form',
		icon: 'android-checkbox',
		name: 'form',
		title: '表单编辑',
		component: Main,
		children: [{
				path: 'artical-publish',
				title: '文章发布',
				name: 'artical-publish',
				icon: 'compose',
				component: () =>
					import('@/views/form/article-publish/article-publish.vue')
			},
			{
				path: 'workflow',
				title: '工作流',
				name: 'workflow',
				icon: 'arrow-swap',
				component: () =>
					import('@/views/form/work-flow/work-flow.vue')
			}

		]
	}, {
		path: '/tables',
		icon: 'ios-grid-view',
		name: 'tables',
		title: '表格',
		component: Main,
		children: [{
				path: 'dragableTable',
				title: '可拖拽排序',
				name: 'dragable-table',
				icon: 'arrow-move',
				component: () =>
					import('@/views/tables/dragable-table.vue')
			},
			{
				path: 'editableTable',
				title: '可编辑表格',
				name: 'editable-table',
				icon: 'edit',
				component: () =>
					import('@/views/tables/editable-table.vue')
			},
			{
				path: 'searchableTable',
				title: '可搜索表格',
				name: 'searchable-table',
				icon: 'search',
				component: () =>
					import('@/views/tables/searchable-table.vue')
			},
			{
				path: 'exportableTable',
				title: '表格导出数据',
				name: 'exportable-table',
				icon: 'code-download',
				component: () =>
					import('@/views/tables/exportable-table.vue')
			},
			{
				path: 'table2image',
				title: '表格转图片',
				name: 'table-to-image',
				icon: 'images',
				component: () =>
					import('@/views/tables/table-to-image.vue')
			}
		]
	}, {
		path: '/advanced-router',
		icon: 'ios-infinite',
		name: 'advanced-router',
		title: '高级路由',
		component: Main,
		children: [{
				path: 'mutative-router',
				title: '动态路由',
				name: 'mutative-router',
				icon: 'link',
				component: () =>
					import('@/views/advanced-router/mutative-router.vue')
			},
			{
				path: 'argument-page',
				title: '带参页面',
				name: 'argument-page',
				icon: 'android-send',
				component: () =>
					import('@/views/advanced-router/argument-page.vue')
			}
		]
	}, {
		path: '/error-page',
		icon: 'android-sad',
		title: '错误页面',
		name: 'errorpage',
		component: Main,
		children: [{
			path: 'index',
			title: '错误页面',
			name: 'errorpage_index',
			component: () =>
				import('@/views/error-page/error-page.vue')
		}]
	}
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
	loginRouter,
	otherRouter,
	preview,
	locking,
	...appRouter,
	page500,
	page403,
	page404
];