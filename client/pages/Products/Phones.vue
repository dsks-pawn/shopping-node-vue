<template>
  <section class="container-fuild body_content">
  
            <div class="container">
             <Price :priceInRange="getPurchasePrice"/>
              <Ads :productSale="getPhoneSaleAds"/>

              <Brand :brands="getBrandPhone"/>

              <Phone :phones="phoneHot"/>
              <Phone :phones="phoneNew"/>
			  <Phone :phones="phoneBestBattery"/>
			  <Phone :phones="phonePhotography"/>
			  <Phone :phones="phoneGame"/>

			<ProductsWatched/>
           </div>

  </section>
</template>

<script>
import Price from "~/components/block/product/slide/Price.vue"
import Ads from "~/components/block/product/slide/Ads.vue"
import Brand from "~/components/block/product/slide/Brand.vue"

import Phone from "~/components/block/product/slide/Phone.vue"
import ProductsWatched from "~/components/common/ProductsWatched.vue"

import Home from "~/api/Home.js"
import Additional from "~/api/Additional.js"
export default {
	components: {
		Price,
		Ads,
		Brand,

		Phone,
		ProductsWatched
	},
	async fetch({ store }) {
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
		try {
			let data = await Additional.getDataAdditionalPhoneDb()
			if (data.data.status != 200)
				data = await Additional.getDataAdditionalPhoneFpt()
			let result = data.data.data[0]
			if (result) await store.dispatch("getDataAdditionalPhone", result)
		} catch (error) {
			throw error
		}
	},
	computed: {
		getPurchasePrice() {
			return {
				typeProduct: this.$store.state.ADDITIONAL_PHONE.typeProduct,
				typeSlug: this.$store.state.ADDITIONAL_PHONE.typeSlug,
				purchasePrice: this.$store.state.ADDITIONAL_PHONE.filter.slice(
					1,
					6
				),
				linkViewAll: "/products/phone"
			}
		},
		getPhoneSaleAds() {
			return this.$store.state.ADDITIONAL_PHONE.carousel
		},
		getBrandPhone() {
			return {
				typeBrands: "thương hiệu ĐIỆN THOẠI",
				brandBig: this.$store.state.ADDITIONAL_PHONE.brand
			}
		}
	},
	data() {
		return {
			phoneHot: {
				typePhones: "ĐIỆN THOẠI HOT NHẤT",
				viewAll: "/products/phone",
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
				viewAll: "/products/phone",
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
				viewAll: "/products/phone",
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
				viewAll: "/products/phone",
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
				viewAll: "/products/phone",
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
