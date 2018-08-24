<template>
  <section class="container-fuild body_content">
			<div class="container carousel_ads">
				<el-row :gutter="10">
					<el-col :sm="24" :md="16">
						<AdsCarousel/>
					</el-col>
					<el-col :sm="24" :md="8">
						<AdsShort/>
					</el-col>
				</el-row>
				<AdsLong/>
			</div>

			<div class="container product_hot">
				<ProductHot :productsHot="getPhoneHot"/> 
				<ProductHot :productsHot="getLaptopHot"/>
				<ProductHot :productsHot="getTabletpHot"/>
				<AccessoriesHot :accessoriesHot="getAccessories"/>
			</div>
			<div>
				<h3>
				
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
			if (result) return await store.dispatch("getDataByHome", result)
		} catch (error) {
			throw error
		}
	},
	computed: {
		getPhoneHot() {
			return {
				typeProduct: "điện thoại khuyến mại hot",
				viewAll: "/products/phone",
				products: this.$store.state.HOME_DATA.products.slice(0, 6)
			}
		},
		getLaptopHot() {
			return {
				typeProduct: "laptop BÁN CHẠY",
				viewAll: "/products/laptop",
				products: this.$store.state.HOME_DATA.products.slice(6, 12)
			}
		},
		getTabletpHot() {
			return {
				typeProduct: "tablet NỔI BẬT",
				viewAll: "/products/tablet",
				products: this.$store.state.HOME_DATA.products.slice(12)
			}
		},
		getAccessories() {
			return this.$store.state.HOME_DATA.accessories
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
