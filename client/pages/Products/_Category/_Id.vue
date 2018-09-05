 <template>
	<no-ssr>
 	<section>
		 <MenuHidden/>
		 <div class="container">
 		<div class="breadcrumb">
 			<el-breadcrumb separator-class="el-icon-arrow-right">
 				<el-breadcrumb-item ><nuxt-link class="breadcrumb_title" to="/">Trang chủ</nuxt-link></el-breadcrumb-item>
 				<el-breadcrumb-item><nuxt-link class="breadcrumb_title" :to="'/products/'+$route.params.Category">{{typeProduct}}</nuxt-link></el-breadcrumb-item>
				 <el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">{{nameProduct}}</nuxt-link></el-breadcrumb-item>
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

import Home from "~/api/Home.js"
import Product from "~/api/Product.js"

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
	async fetch({ store, route }) {
		//check data menu
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

		// get data detail product
		try {
			let keyWord = {}
			keyWord.id = route.params.Id

			let { data } = await Product.getProductDetail(keyWord)
			if (data.status == 200) {
				return store.dispatch("getProductDetail", data.data)
			}
		} catch (error) {
			throw error
		}

		//check data product

		// Lúc khác làm lại phần check xem database có data các product chưa
		//sau đó load ra để vào bất kì 1 trang nào cũng có sp

		// let typeProduct = {
		// 	category: route.params.Category
		// }
		// if (typeProduct.category == "tablet") {
		// 	if (store.state.TABLETS.length == 0) {
		// 		let { data } = await Product.getProductByDb(typeProduct)
		// 		if (data.data.length == 0) {
		// 			data = await Product.getProductByFpt(typeProduct)
		// 			return await store.dispatch("getTabletsAll", data.data.data)
		// 		} else {
		// 			return await store.dispatch("getTabletsAll", data.data)
		// 		}
		// 	}
		// } else if (typeProduct.category == "phone") {
		// 	if (store.state.PHONES.length == 0) {
		// 		let { data } = await Product.getProductByDb(typeProduct)
		// 		if (data.data.length == 0) {
		// 			data = await Product.getProductByFpt(typeProduct)
		// 			return await store.dispatch("getPhonesAll", data.data.data)
		// 		} else {
		// 			return await store.dispatch("getPhonesAll", data.data)
		// 		}
		// 	}
		// } else if (typeProduct.category == "laptop") {
		// 	if (store.state.LAPTOPS.length == 0) {
		// 		let { data } = await Product.getProductByDb(typeProduct)
		// 		if (data.data.length == 0) {
		// 			data = await Product.getProductByFpt(typeProduct)
		// 			return await store.dispatch("getLaptopsAll", data.data.data)
		// 		} else {
		// 			return await store.dispatch("getLaptopsAll", data.data)
		// 		}
		// 	}
		// }
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
	},
	computed: {
		nameProduct() {
			return this.$store.state.PRODUCT_DETAIL.name
		},
		typeProduct() {
			let category = this.$store.state.PRODUCT_DETAIL.category
			if (category == "tablet") {
				return "Máy tính bảng"
			} else if (category == "phone") {
				return "Điện thoại"
			} else {
				return "Laptop"
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
