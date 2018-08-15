 <template>
 	<section class="container">
 		<div class="breadcrumb">
 			<el-breadcrumb separator-class="el-icon-arrow-right">
 				<el-breadcrumb-item ><nuxt-link class="breadcrumb_title" to="/">Trang chủ</nuxt-link></el-breadcrumb-item>
 				<el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">Máy tính bảng</nuxt-link></el-breadcrumb-item>
				 <el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">Tên sản phẩm</nuxt-link></el-breadcrumb-item>
 			</el-breadcrumb>
 		</div>
		 <div class="item_pay">
			 <el-row :gutter="10">
				<el-col :xs="8" :sm="6" :md="10">
					<Detail/>
				</el-col>
				<el-col :xs="4" :sm="6" :md="9">
					<Pay/>
				</el-col>
				<el-col :xs="4" :sm="6" :md="5">
					<Insure/>
				</el-col>
			</el-row>
			 
		 </div>
 	</section>
 </template>
<script>
import Detail from "~/components/block/product/detail/Detail.vue"
import Pay from "~/components/block/product/detail/Pay.vue"
import Insure from "~/components/block/product/detail/Insure.vue"
export default {
	transition: "bounce",
	components: {
		Detail,
		Pay,
		Insure
	}
}
</script>
<style scoped>
.item_pay {
	background-color: #fff;
	padding-top: 20px;
}
</style>
