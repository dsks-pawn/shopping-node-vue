 <template>
 	<section class="container">
 		<div class="breadcrumb">
 			<el-breadcrumb separator-class="el-icon-arrow-right">
 				<el-breadcrumb-item ><nuxt-link class="breadcrumb_title" to="/">Trang chủ</nuxt-link></el-breadcrumb-item>
 				<el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">Máy tính bảng</nuxt-link></el-breadcrumb-item>
 			</el-breadcrumb>
 		</div>
		 <el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="5" >
				<SideBar/>
			</el-col>
			<el-col :xs="4" :sm="6" :md="19" >

			</el-col>
		</el-row>
 	</section>
 </template>

 <script>
 	import SideBar from "~/components/BlockAllProduct/SideBar.vue"
 	export default {

 		components: {
 			SideBar
 		}
 	}
 </script>
 <style scoped>

</style>