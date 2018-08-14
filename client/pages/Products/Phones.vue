<template>
  <section class="container-fuild body_content">
          <TopBar/>
          <Menu/>
            <div class="container">
             <Price :priceInRange="typePhoneAndPrice"/>
              <Ads :productSale="phoneSaleAds"/>

              <Brand :brands="brandPhone"/>

              <Phone :phones="phoneHot"/>
              <Phone :phones="phoneNew"/>
			  <Phone :phones="phoneBestBattery"/>
			  <Phone :phones="phonePhotography"/>
			  <Phone :phones="phoneGame"/>

			<ProductsJustWatched/>
           </div>

  <Footer/>
  </section>
</template>

<script>
import Price from "~/components/block/product/slide/Price.vue"
import Ads from "~/components/block/product/slide/Ads.vue"
import Brand from "~/components/block/product/slide/Brand.vue"

import Phone from "~/components/block/product/slide/Phone.vue"

import ProductsJustWatched from "~/components/common/ProductsWatched.vue"

export default {
	components: {
		Price,
		Ads,
		Brand,

		Phone,
		ProductsJustWatched
	},
	data() {
		return {
			typePhoneAndPrice: {
				title: "điện thoại",
				purchasePrice: [
					{
						price: "Từ 1 đến 3 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287267646710000_200.jpg",
						link: ""
					},
					{
						price: "Từ 3 đến 6 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287267954174000_200.jpg",
						link: ""
					},
					{
						price: "Từ 6 đến 10 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287268647066000_200.jpg",
						link: ""
					},
					{
						price: "Từ 10 đến 15 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/5/15/636304622649228315_10-15.jpg",
						link: ""
					},
					{
						price: "Trên 15 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287269146660000_200.jpg",
						link: ""
					}
				],
				linkViewAll: ""
			},
			phoneSaleAds: [
				{ name: "", img: "/img/slider-main.jpg", link: "" },
				{ name: "", img: "/img/slider-main2.png", link: "" },
				{ name: "", img: "/img/slider-main3.jpg", link: "" },
				{ name: "", img: "/img/slider-main4.jpg", link: "" },
				{ name: "", img: "/img/slider-main5.png", link: "" }
			],
			brandPhone: {
				typeBrands: "thương hiệu điện thoại",
				brandBig: [
					{
						name: "Apple",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2015/10/1/635793092706022125_apple.jpg",
						link: ""
					},
					{
						name: "Samsung",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/3/11/635932924981879113_samsung.png",
						link: ""
					},
					{
						name: "OPPO",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2014/3/14/201403141559325468_Capture.JPG",
						link: ""
					},
					{
						name: "Huawei",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/3/10/635932190034345664_Huawei.png",
						link: ""
					},
					{
						name: "Xiaomi",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/7/14/636356220909653789_logoxiaomi.png",
						link: ""
					},
					{
						name: "VIVO",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/9/5/636086929260693925_vivo.png",
						link: ""
					},
					{
						name: "Nokia",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/3/11/635932891350777770_nokia.png",
						link: ""
					},
					{
						name: "Asus",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/3/11/635932890324997258_asus.png",
						link: ""
					},
					{
						name: "Masstel",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/1/28/635896004818738946_mastel.png",
						link: ""
					},
					{
						name: "MEIZU",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/9/5/636086929260383205_meizu.png",
						link: ""
					},
					{
						name: "Mobiistar",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/3/11/635932891350309809_mobistar.png",
						link: ""
					},
					{
						name: "Philips",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/3/11/635932891351245731_plis.png",
						link: ""
					},
					{
						name: "Wiko",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/12/636276137938166126_wiko-logo.png",
						link: ""
					},
					{
						name: "Tecno",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/7/14/636356222748113789_logo.png",
						link: ""
					},
					{
						name: "Itel",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/7/14/636356220265217789_logo.png",
						link: ""
					},
					{
						name: "SONY",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2016/3/10/635932137879399915_sony.png",
						link: ""
					},
					{
						name: "HONOR",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/3/7/636560197214942746_1.png",
						link: ""
					}
				]
			},
			phoneHot: {
				typePhones: "ĐIỆN THOẠI HOT NHẤT",
				viewAll: "",
				itemPhones: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					}
				]
			},
			phoneNew: {
				typePhones: "ĐIỆN THOẠI MỚI RA MẮT",
				viewAll: "",
				itemPhones: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					}
				]
			},
			phoneBestBattery: {
				typePhones: "ĐIỆN THOẠI pin khủng",
				viewAll: "",
				itemPhones: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/9/636614825973103497_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/9/636614825973103497_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/9/636614825973103497_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/9/636614825973103497_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/9/636614825973103497_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/9/636614825973103497_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					}
				]
			},
			phonePhotography: {
				typePhones: "ĐIỆN THOẠI nhiếp ảnh",
				viewAll: "",
				itemPhones: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/2/26/636552329323936581_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/2/26/636552329323936581_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/2/26/636552329323936581_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/2/26/636552329323936581_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/2/26/636552329323936581_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/2/26/636552329323936581_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					}
				]
			},
			phoneGame: {
				typePhones: "ĐIỆN THOẠI chơi game",
				viewAll: "",
				itemPhones: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" }
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/24/636471207542719059_1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%"
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
