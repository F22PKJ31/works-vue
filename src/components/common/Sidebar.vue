<template>
	<div class="sidebar">
		<el-menu :collapse="collapse" :default-active="onRoutes" active-text-color="#20a0ff" background-color="#324157"
		         class="sidebar-el-menu" router text-color="#bfcbd9" unique-opened>
			<template v-for="item in items">
				<el-menu-item :index="item.index" :key="item.index">
					<i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
    import bus from '../common/bus';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'painting',
                        title: '摸鱼'
                    }
                ]
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
	.sidebar {
		display: block;
		position: absolute;
		left: 0;
		top: 70px;
		bottom: 0;
		overflow-y: scroll;
	}
	
	.sidebar::-webkit-scrollbar {
		width: 0;
	}
	
	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 250px;
	}
	
	.sidebar > ul {
		height: 100%;
	}
</style>
