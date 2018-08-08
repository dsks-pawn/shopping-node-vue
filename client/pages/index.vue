<template>
  <section class="container-fuild">
          <TopBar/>
               <NavBar/>
    <div class="container">
      <el-row>
        <el-col :span="4">
          <SideBar/>
        </el-col>
        <el-col :span="14">
          <SliderMain/>
        </el-col>
        <el-col :span="6">
          <Ads/>
        </el-col>
      </el-row>

      <Promo/>
      <Slider-Product/>
      <Brand/>
      <ProductWidgetArea/>
      
  </div>
  <Footer/>
  </section>
</template>

<script>
import TopBar from "~/components/Main/TopBar.vue"
import NavBar from "~/components/Main/NavBar.vue"

import SideBar from "~/components/Main/SideBar.vue"
import SliderMain from "~/components/Slider/SliderMain.vue"
import Ads from "~/components/Block/Ads.vue"

import Promo from "~/components/Block/Promo.vue"
import SliderProduct from "~/components/Slider/SliderProduct.vue"
import Brand from "~/components/Block/Brand.vue"
import ProductWidgetArea from "~/components/Block/ProductWidgetArea.vue"

import Footer from "~/components/Main/Footer.vue"


import { throws } from "assert"

export default {
	components: {
		TopBar,
		NavBar,
		SideBar,
		SliderMain,
		Ads,
		Promo,
		SliderProduct,
		Brand,
		ProductWidgetArea,
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

