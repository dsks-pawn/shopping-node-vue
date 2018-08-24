
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
		<h3>{{testDataaaaaa}}</h3>
	<ProductsWatched/>
 	</section>
 </template>

 <script>
import SideBar from "~/components/block/product/filter/SideBar.vue"
import Result from "~/components/block/product/filter/Result.vue"
import ProductsWatched from "~/components/common/ProductsWatched.vue"

import Home from "~/api/Home.js"
import Additional from "~/api/Additional.js"
import Product from "~/api/Product.js"
export default {
	components: {
		SideBar,
		Result,
		ProductsWatched
	},
	async fetch({ store }) {
		if (!store.state.HOME_DATA._id) {
			let data = await Home.getDataByDb()
			try {
				if (data.data.status != 200) data = await Home.getDataByFpt()
				let result = data.data.data[0]
				if (result) await store.dispatch("getDataByHome", result)
			} catch (error) {
				throw error
			}
		}

		try {
			let typeProduct = {
				category: "phone"
			}
			let data = await Product.getProductLimitByDb(typeProduct)
			if (data.data.status != 200) {
				let status = await Product.getProductByFpt(typeProduct)
				if (status.data.status == 200) {
					data = await Product.getProductLimitByDb(typeProduct)
				}
			}
			let result = data.data.data
			if (result) return await store.dispatch("getProductLimit", result)
		} catch (error) {
			throw error
		}
	},
	computed: {
		testDataaaaaa() {
			return this.$store.state.PRODUCTS_LIMIT
		}
	}
}
</script>
 <style scoped>
</style>
