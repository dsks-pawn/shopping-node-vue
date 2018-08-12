<template>
 <no-ssr>
    <div class="brands_block">
        <div class="title_brand text-center"><h6 >{{typeBrand}}</h6></div>
        <carousel class="icon_block" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>" navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>" :perPageCustom="[[411, 2], [768, 4], [1024, 7]]" :autoplay="true" :minSwipeDistance="10">
            <slide v-for="brand of brandBig" :key="brand.id">
               <el-row>
				   <el-card style="border: none">
					   <nuxt-link :to="brand.link"><div class="block_images"><img class="image" :src="brand.img" :alt="brand.name" :title="brand.name"></div></nuxt-link>
				   </el-card>
                </el-row>
            </slide>
            
        </carousel>
         <!-- <div>{{$store.state.BRANDS}}</div> -->
    </div>
     </no-ssr>
</template>

<style scoped>
.brands_block {
	padding: 20px 0 0px;
	background-color: #fff;
	margin-top: 30px;
}
.title_brand {
	padding-top: 10px;
	padding-bottom: 15px;
	text-transform: uppercase;
}
.block_images {
	height: 45px;
	padding: 5px 30px;
	text-align: center;
	overflow: hidden;
	transform: scale(1.7);
}

.images {
	width: auto;
	overflow: hidden;
	display: inline-block;
}
</style>

<script>
// import Brands from "@/api/Brands"

export default {
	data() {
		return {
			typeBrand: "thương hiệu điện thoại",
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
		}
	}
	// async mounted() {
	// 	try {
	// 		let dataBrands = await Brands.getBrandsWithLimit()
	// 		if (dataBrands)
	// 			await this.$store.dispatch(
	// 				"getBrandsWithLimit",
	// 				dataBrands.data
	// 			)
	// 	} catch (error) {
	// 		throw error
	// 	}
	// }
}
</script>
