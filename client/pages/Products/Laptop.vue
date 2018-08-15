<template>
  <section class="container-fuild body_content">
          <TopBar/>
          <Menu/>
            <div class="container">
             <Price :priceInRange="typeLaptopAndPrice"/>

              <Ads :productSale="laptopSaleAds"/>

              <Brand :brands="brandLaptop"/>

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

  <Footer/>
  </section>
</template>

<script>
import Price from "~/components/block/product/slide/Price.vue"
import Ads from "~/components/block/product/slide/Ads.vue"
import Brand from "~/components/block/product/slide/Brand.vue"
import Laptop from "~/components/block/product/slide/Laptop.vue"
import ProductsWatched from "~/components/common/ProductsWatched.vue"

export default {
	components: {
		Price,
		Ads,
		Brand,

		Laptop,
		ProductsWatched
	},

	data() {
		return {
			typeLaptopAndPrice: {
				title: "điện thoại",
				purchasePrice: [
					{
						price: "Dưới 5 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/26/636288203390151206_tu-25-den-30M.png",
						link: ""
					},
					{
						price: "Từ 5 đến 10 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/26/636288203390151206_tu-25-den-30M.png",
						link: ""
					},
					{
						price: "Từ 10 đến 15 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/26/636288203390151206_tu-25-den-30M.png",
						link: ""
					},
					{
						price: "Từ 15 đến 20 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/26/636288203390151206_tu-25-den-30M.png",
						link: ""
					},
					{
						price: "Từ 20 đến 25 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/26/636288203390151206_tu-25-den-30M.png",
						link: ""
					}
				],
				linkViewAll: ""
			},
			brandLaptop: {
				typeBrands: "thương hiệu laptop",
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
			laptopSaleAds: [
				{ name: "", img: "/img/slider-main.jpg", link: "" },
				{ name: "", img: "/img/slider-main2.png", link: "" },
				{ name: "", img: "/img/slider-main3.jpg", link: "" },
				{ name: "", img: "/img/slider-main4.jpg", link: "" },
				{ name: "", img: "/img/slider-main5.png", link: "" }
			],
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
