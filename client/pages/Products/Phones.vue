<template>
  <section class="container-fuild body_content">
          <TopBar/>
          <Menu/>
            <div class="container">
             <ProductByPrice/>
              <CarouselAds/>

              <CarouselBrand/>

              <PhonesHot/>
              <PhonesNew/>
              <!-- <PhonesBattery/> -->
              
           </div>
       
  <!-- <Footer/> -->
  </section>
</template>

<script>
/* Navbar menu top*/
import TopBar from "~/components/Main/TopBar.vue"
import Menu from "~/components/Main/Menu.vue"

import ProductByPrice from "~/components/BlockProductByProducts/ProductByPrice.vue"
import CarouselAds from "~/components/BlockProductByProducts/CarouselAds.vue"
import CarouselBrand from "~/components/BlockProductByProducts/CarouselBrand.vue"

import PhonesHot from "~/components/BlockProductByProducts/Phones/PhonesHot.vue"
import PhonesNew from "~/components/BlockProductByProducts/Phones/PhonesNew.vue"
import PhonesBattery from "~/components/BlockProductByProducts/Phones/PhonesBattery.vue"
import PhonesPhotography from "~/components/BlockProductByProducts/Phones/PhonesPhotography.vue"
import PhonesGame from "~/components/BlockProductByProducts/Phones/PhonesGame.vue"


import Footer from "~/components/Main/Footer.vue"

export default {
	components: {
		TopBar,
		Menu,

		ProductByPrice,
		CarouselAds,
		CarouselBrand,
    
		PhonesHot,
		PhonesNew,
    PhonesBattery,
    PhonesPhotography,
    PhonesGame,

		Footer
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
