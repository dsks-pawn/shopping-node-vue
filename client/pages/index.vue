<template>
  <section class="container-fuild body_content">
			<div class="container carousel_ads">
				<el-row :gutter="10">
					<el-col  :sm="24" :md="16">
						<AdsCarousel/>
					</el-col>
					<el-col  :sm="24" :md="8">
						<AdsShort/>
					</el-col>
				</el-row>
				<AdsLong/>
			</div>

			<div class="container product_hot">
				<ProductHot :productsHot="phoneHot"/> 
				<ProductHot :productsHot="laptopHot"/> 
				<ProductHot :productsHot="tabletHot"/> 
				<AccessoriesHot/>
			</div>
			<div>
				<h3>
					{{$store.state.HOME_DATA}}
				</h3>
			</div>
  </section>
</template>

<script>
/* Carousel ads*/
import AdsCarousel from "~/components/block/home/AdsCarousel.vue"
import AdsShort from "~/components/block/home/AdsShort.vue"
import AdsLong from "~/components/block/home/AdsLong.vue"

/*Product items all*/
import ProductHot from "~/components/block/home/ProductHot.vue"
import AccessoriesHot from "~/components/block/home/AccessoriesHot.vue"

import Home from "~/api/Home.js"
export default {
	components: {
		AdsCarousel,
		AdsShort,
		AdsLong,

		ProductHot,
		AccessoriesHot
	},
	async fetch({ store }) {
		try {
			let data = await Home.getDataByDb()
			if (data.data.status != 200) data = await Home.getDataByFpt()
			let result = data.data.data[0]

			if (result) await store.dispatch("getDataByHome", result)

		} catch (error) {
			throw error
		}
	},
	data() {
		return {
			phoneHot: {
				typeProduct: "điện thoại khuyến mại hot",
				viewAll: "",
				itemProduct: [
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/10/636694992362191478_636660010182440948_A2lite.jpeg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/10/636694992362191478_636660010182440948_A2lite.jpeg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/10/636694992362191478_636660010182440948_A2lite.jpeg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/10/636694992362191478_636660010182440948_A2lite.jpeg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/10/636694992362191478_636660010182440948_A2lite.jpeg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/10/636694992362191478_636660010182440948_A2lite.jpeg",
						link: ""
					}
				]
			},
			laptopHot: {
				typeProduct: "laptop bán chạy",
				viewAll: "",
				itemProduct: [
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
						link: ""
					}
				]
			},
			tabletHot: {
				typeProduct: "tablet nổi bật",
				viewAll: "",
				itemProduct: [
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686824428755381_Banner-iPad.jpg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686824428755381_Banner-iPad.jpg",
						link: ""
					},
					{
						name: "Macbook Air 128G MQD32SA/A (2017)",
						price: "23.999.000",
						answer: "0",
						img:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686824428755381_Banner-iPad.jpg",
						link: ""
					}
				]
			}
		}
	}
}
</script>

<style scoped>
.body_content {
	background-color: #f3f3f3;
}
.carousel_ads {
	padding-top: 10px;
}
</style>
