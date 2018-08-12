<template>
  <section class="container-fuild body_content">
          <TopBar/>
          <Menu/>
            <div class="container carousel_ads">
              <el-row :gutter="10">
                <el-col  :sm="24" :md="16">
                  <CarouselMain/>
                </el-col>
                <el-col  :sm="24" :md="8">
                  <Ads/>
                </el-col>
              </el-row>
							<AdsLong/>
          </div>

					<div class="container product_hot">
						<PhoneHot/>
						<LaptopHot/>
						<TabletHot/>
						<AccessoriesHot/>
					</div>
  <Footer/>
  </section>
</template>

<script>
/* Navbar menu top*/
import TopBar from "~/components/Main/TopBar.vue"
import Menu from "~/components/Main/Menu.vue"

/* Carousel ads*/
import CarouselMain from "~/components/BlockHome/CarouselMain.vue"
import Ads from "~/components/BlockHome/Ads.vue"
import AdsLong from "~/components/BlockHome/AdsLong.vue"

/*Product items all*/
import PhoneHot from "~/components/BlockHome/ProductsImages/PhoneHot.vue"
import LaptopHot from "~/components/BlockHome/ProductsImages/LaptopHot.vue"
import TabletHot from "~/components/BlockHome/ProductsImages/TabletHot.vue"
import AccessoriesHot from "~/components/BlockHome/ProductsImages/AccessoriesHot.vue"

import Footer from "~/components/Main/Footer.vue"


export default {
	components: {
		TopBar,
		Menu,

		CarouselMain,
		Ads,
		AdsLong,

		PhoneHot,
		LaptopHot,
		TabletHot,
		AccessoriesHot,

		Footer
	}
	// async fetch({ store }) {
	// 	try {
	// 		let dataItems = await Items.getItemsWithLimit()
	// 		let dataBrands = await Brands.getBrandsWithLimit()

	// 		if (dataItems)
	// 			await store.dispatch("getItemsWithLimit", dataItems.data)

	// 		if (dataBrands)
	// 			await store.dispatch("getBrandsWithLimit", dataBrands.data)
	// 	} catch (error) {
	// 		throw error
	// 	}
	// }
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
