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
						<CarouselProductHot :productsHot="phonesHot"/> 
						<CarouselProductHot :productsHot="laptopsHot"/> 
						<CarouselProductHot :productsHot="tabletHot"/> 
						<AccessoriesHot/>
					</div>
  <Footer/>
  </section>
</template>

<script>
/* Navbar menu top*/

/* Carousel ads*/
import CarouselMain from "~/components/BlockHome/CarouselMain.vue"
import Ads from "~/components/BlockHome/Ads.vue"
import AdsLong from "~/components/BlockHome/AdsLong.vue"

/*Product items all*/
// import PhoneHot from "~/components/BlockHome/ProductsImages/PhoneHot.vue"
// import LaptopHot from "~/components/BlockHome/ProductsImages/LaptopHot.vue"
import CarouselProductHot from "~/components/BlockHome/CarouselProductHot.vue"
import AccessoriesHot from "~/components/BlockHome/AccessoriesHot.vue"

export default {
	components: {
		CarouselMain,
		Ads,
		AdsLong,

		CarouselProductHot,
		AccessoriesHot
	},
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
	data() {
		return {
			phonesHot: {
				typeProduct: "điện thoại khuyến mại hot",
				viewAll: "",
				item_product: [
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
			laptopsHot: {
				typeProduct: "laptop bán chạy",
				viewAll: "",
				item_product: [
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
				item_product: [
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
