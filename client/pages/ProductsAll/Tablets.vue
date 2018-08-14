 <template>
 	<section class="container">
 		<div class="breadcrumb">
 			<el-breadcrumb separator-class="el-icon-arrow-right">
 				<el-breadcrumb-item ><nuxt-link class="breadcrumb_title" to="/">Trang chủ</nuxt-link></el-breadcrumb-item>
 				<el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">Máy tính bảng</nuxt-link></el-breadcrumb-item>
 			</el-breadcrumb>
 		</div>
		 <el-row :gutter="10">
			<el-col  :sm="24" :md="5" >
				<SideBar/>
			</el-col>
			<el-col  :sm="24" :md="19" >
				<ProductGeneral/>
			</el-col>
		</el-row>
 	</section>
 </template>

 <script>
import SideBar from "~/components/BlockAllProduct/SideBar.vue"
import ProductGeneral from "~/components/BlockAllProduct/ProductGeneral.vue"
export default {
	components: {
		SideBar,
		ProductGeneral
	}
}
</script>
 <style scoped>
</style>