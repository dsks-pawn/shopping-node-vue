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
			 <Title/>
			 <el-row :gutter="10">
				<el-col :xs="24" :sm="12" :md="10">
					<Detail/>
				</el-col>
				<el-col :xs="24" :sm="12" :md="9">
					<Pay/>
				</el-col>
				<el-col :xs="24" :sm="24" :md="5">
					<Insure/>
				</el-col>
			</el-row>
			</div>
		<div>
			<Evaluate/>
		</div>
 	</section>
 </template>
<script>
import Detail from "~/components/block/product/detail/Detail.vue"
import Pay from "~/components/block/product/detail/Pay.vue"
import Insure from "~/components/block/product/detail/Insure.vue"
import Title from "~/components/block/product/detail/Title.vue"
import Evaluate from "~/components/block/product/detail/Evaluate.vue"
export default {
	components: {
		Detail,
		Pay,
		Insure,
		Title,
		Evaluate
	}
}
</script>
<style scoped>
.item_pay {
	background-color: #fff;
	border-top: 1px solid #e2e2e2;
}
</style>
