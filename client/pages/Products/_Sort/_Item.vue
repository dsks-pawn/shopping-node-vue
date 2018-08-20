 <template>
	<no-ssr>
 	<section>
		 <MenuHidden/>
		 <div class="container">
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
			<CarouselProduct/>
		</div>
		<div class="menu_evalute">
			
			 <el-row :gutter="10">
				<el-col :xs="24" :sm="24" :md="17">
					<Post/>
					<Evaluate/>
					<Comments/>
					<Gallery/>
				</el-col>
				<el-col :xs="24" :sm="24" :md="7">
					<Specifications/>
					<AccessoriesAndPosts v-if="accessories" :product="accessories"/>
					<AccessoriesAndPosts v-if="posts" :product="posts"/>
				</el-col>
			</el-row>
			
		</div>
		<ProductsWatched/>
		
 	</div>
	 </section>
	</no-ssr>
 </template>
<script>
import Detail from "~/components/block/product/detail/Detail.vue"
import Pay from "~/components/block/product/detail/Pay.vue"
import Insure from "~/components/block/product/detail/Insure.vue"
import Title from "~/components/block/product/detail/Title.vue"
import CarouselProduct from "~/components/block/product/detail/CarouselProduct.vue"

import Post from "~/components/block/product/detail/Post.vue"
import Evaluate from "~/components/block/product/detail/Evaluate.vue"
import Comments from "~/components/block/product/detail/Comments.vue"
import Gallery from "~/components/block/product/detail/Gallery.vue"
import MenuHidden from "~/components/block/product/detail/MenuHidden.vue"

import Specifications from "~/components/block/product/detail/Specifications.vue"
import AccessoriesAndPosts from "~/components/block/product/detail/AccessoriesAndPosts.vue"

import ProductsWatched from "~/components/common/ProductsWatched.vue"
export default {
	components: {
		MenuHidden,
		Detail,
		Pay,
		Insure,
		Title,
		CarouselProduct,
		Post,
		Evaluate,
		Comments,
		Gallery,
		Specifications,
		AccessoriesAndPosts,
		ProductsWatched
	},
	data() {
		return {
			accessories: {
				name: "iPad Pro 10.5 WI-FI 4G 64GB (2017)",
				data: [
					{
						name: "Apple Cáp kết nối Lightning to USB Cable",
						price: "499.000đ",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/29/636658630315287052_0001687-1o.png",
						link: ""
					},
					{
						name: "Apple Cáp kết nối Lightning to USB Cable",
						price: "499.000đ",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/29/636658630315287052_0001687-1o.png",
						link: ""
					},
					{
						name: "Apple Cáp kết nối Lightning to USB Cable",
						price: "499.000đ",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/29/636658630315287052_0001687-1o.png",
						link: ""
					},
					{
						name: "Apple Cáp kết nối Lightning to USB Cable",
						price: "499.000đ",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/29/636658630315287052_0001687-1o.png",
						link: ""
					},
					{
						name: "Apple Cáp kết nối Lightning to USB Cable",
						price: "499.000đ",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/29/636658630315287052_0001687-1o.png",
						link: ""
					},
					{
						name: "Apple Cáp kết nối Lightning to USB Cable",
						price: "499.000đ",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/29/636658630315287052_0001687-1o.png",
						link: ""
					}
				],
				viewAll: ""
			},
			posts: {
				name: "iPad Pro 10.5 WI-FI 4G 64GB (2017)",
				data: [
					{
						name: "Nên hay không nên chờ đợi iPad Pro 2018?",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/2/636661387592623681_nen-hay-khong-nen-cho-ipad-pro-2018-3.jpg",
						link: ""
					},
					{
						name: "Nên hay không nên chờ đợi iPad Pro 2018?",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/2/636661387592623681_nen-hay-khong-nen-cho-ipad-pro-2018-3.jpg",
						link: ""
					},
					{
						name: "Nên hay không nên chờ đợi iPad Pro 2018?",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/2/636661387592623681_nen-hay-khong-nen-cho-ipad-pro-2018-3.jpg",
						link: ""
					},
					{
						name: "Nên hay không nên chờ đợi iPad Pro 2018?",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/2/636661387592623681_nen-hay-khong-nen-cho-ipad-pro-2018-3.jpg",
						link: ""
					},
					{
						name: "Nên hay không nên chờ đợi iPad Pro 2018?",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/2/636661387592623681_nen-hay-khong-nen-cho-ipad-pro-2018-3.jpg",
						link: ""
					},
					{
						name: "Nên hay không nên chờ đợi iPad Pro 2018?",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/2/636661387592623681_nen-hay-khong-nen-cho-ipad-pro-2018-3.jpg",
						link: ""
					}
				],
				viewAll: ""
			}
		}
	}
}
</script>
<style scoped>
.item_pay {
	background-color: #fff;
	border-top: 1px solid #e2e2e2;
}
.menu_evalute {
	margin-top: 20px;
}
</style>
