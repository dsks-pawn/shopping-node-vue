<template>
  <section class="container-fuild body_content">

            <div class="container">
             <Price :priceInRange="getPurchasePrice"/>

              <Ads :productSale="getLaptopSaleAds"/>

              <Brand :brands="getBrandLaptop"/>

              <Laptop :laptops="laptopFptShop"/>
			  <Laptop :laptops="laptopTwoOfOne"/>
			  <Laptop :laptops="laptopGaming"/>
			  <Laptop :laptops="laptopWindows"/>
			  <Laptop :laptops="laptopStudent"/>
			  <Laptop :laptops="laptopLight"/>
			  <Laptop :laptops="laptopBusinessMan"/>
			  <Laptop :laptops="laptopRamTerrible"/>

			<ProductsWatched/>
           </div>

  </section>
</template>

<script>
import Price from "~/components/block/product/slide/Price.vue"
import Ads from "~/components/block/product/slide/Ads.vue"
import Brand from "~/components/block/product/slide/Brand.vue"
import Laptop from "~/components/block/product/slide/Laptop.vue"
import ProductsWatched from "~/components/common/ProductsWatched.vue"

import Home from "~/api/Home.js"
import Additional from "~/api/Additional.js"
export default {
	components: {
		Price,
		Ads,
		Brand,

		Laptop,
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
			let data = await Additional.getDataAdditionalLaptopDb()
			if (data.data.status != 200)
				data = await Additional.getDataAdditionalLaptopFpt()
			let result = data.data.data[0]
			if (result) return await store.dispatch("getDataAdditionalLaptop", result)
		} catch (error) {
			throw error
		}
	},
	computed: {
		getPurchasePrice() {
			return {
				typeProduct: this.$store.state.ADDITIONAL_LAPTOP.typeProduct,
				typeSlug: this.$store.state.ADDITIONAL_LAPTOP.typeSlug,
				purchasePrice: this.$store.state.ADDITIONAL_LAPTOP.filter.slice(
					1,
					6
				),
				linkViewAll: ""
			}
		},
		getLaptopSaleAds() {
			return this.$store.state.ADDITIONAL_LAPTOP.carousel
		},
		getBrandLaptop() {
			return {
				typeBrands: "thương hiệu laptop",
				brandBig: this.$store.state.ADDITIONAL_LAPTOP.brand
			}
		}
	},
	data() {
		return {
			laptopFptShop: {
				typeLaptops: "Chọn bởi FPT Shop",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					}
				]
			},
			laptopTwoOfOne: {
				typeLaptops: "sản phẩm 2 trong 1",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					}
				]
			},
			laptopGaming: {
				typeLaptops: "laptop gaming - đồ họa",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					}
				]
			},
			laptopWindows: {
				typeLaptops: "laptop windows",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					}
				]
			},
			laptopStudent: {
				typeLaptops: "laptop sinh viên - văn phòng",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					}
				]
			},
			laptopLight: {
				typeLaptops: "laptop mỏng nhẹ",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					}
				]
			},
			laptopBusinessMan: {
				typeLaptops: "laptop doanh nhân",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					}
				]
			},
			laptopRamTerrible: {
				typeLaptops: "laptop ram khủng",
				viewAll: "",
				itemLaptops: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/9/636667588264506999_E5-475.png",
						price: "6.990.000",
						priceOld: "7.000.000",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen: "11.6 inchHD TN AG TOUCH",
							cpu: "Itel, Pentium, 1.10 GHz",
							ram: "4 GB, ĐR#L, 1600 MHz",
							vga: "Itel@ HD Graphics 505...",
							hdh: "Windows 10",
							weight: "1.50Kg"
						}
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
