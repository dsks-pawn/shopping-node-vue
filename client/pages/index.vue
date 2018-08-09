<template>
  <section class="container-fuild">
          <TopBar/>
               <NavBar/>
    <div class="container-fuild">
      <el-row>
        <el-col  :sm="24" :md="16">
          <SliderMain/>
        </el-col>
        <el-col  :sm="24" :md="8">
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

import SliderMain from "~/components/Slider/SliderMain.vue"
import Ads from "~/components/Block/Ads.vue"

import SliderProduct from "~/components/Slider/SliderProduct.vue"
import Brand from "~/components/Block/Brand.vue"



import { throws } from "assert"

export default {
	components: {
		TopBar,
		SliderMain,
		Ads,
		SliderProduct,
		Brand,
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

