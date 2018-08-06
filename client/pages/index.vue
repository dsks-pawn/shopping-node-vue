<template>
  <section class="container">
    <div>
      <TopBar/>
      <NavBar/>
      <el-row >
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
  </section>
</template>

<script>
import TopBar from "~/components/Menu/TopBar.vue"
import NavBar from "~/components/Menu/NavBar.vue"

import SideBar from "~/components/Menu/SideBar.vue"
import SliderMain from "~/components/Slider/SliderMain.vue"
import Ads from "~/components/Block/Ads.vue"

import Promo from "~/components/Block/Promo.vue"
import SliderProduct from "~/components/Slider/SliderProduct.vue"
import Brand from "~/components/Block/Brand.vue"
import ProductWidgetArea from "~/components/Block/ProductWidgetArea.vue"

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
		ProductWidgetArea
	}
}
</script>

