 <template>
 	<section class="container">
 		<div class="breadcrumb">
 			<el-breadcrumb separator-class="el-icon-arrow-right">
 				<el-breadcrumb-item ><nuxt-link class="breadcrumb_title" to="/">Trang chủ</nuxt-link></el-breadcrumb-item>
 				<el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">Máy tính bảng</nuxt-link></el-breadcrumb-item>
				 <el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">Tên sản phẩm</nuxt-link></el-breadcrumb-item>
 			</el-breadcrumb>
 		</div>
		 <div>
			 <Detail/>
		 </div>
 	</section>
 </template>
<script>
import Detail from "~/components/block/product/detail/detail.vue"
export default {
	components: {
		Detail
	}
}
</script>
