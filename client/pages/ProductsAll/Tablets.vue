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
				<Result/>
			</el-col>
		</el-row>
	<ProductsJustWatched/>
 	</section>
 </template>

 <script>
import SideBar from "~/components/block/product/filter/SideBar.vue"
import Result from "~/components/block/product/filter/Result.vue"
import ProductsJustWatched from "~/components/common/ProductsJustWatched.vue"
export default {
	components: {
		SideBar,
		Result,
		ProductsJustWatched
	}
}
</script>
 <style scoped>
</style>