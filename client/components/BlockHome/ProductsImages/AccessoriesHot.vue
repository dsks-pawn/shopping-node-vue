<template>
    <div class="product">
         <div class="product_title">
             <nuxt-link to=""><h5>phụ kiện giá tốt</h5></nuxt-link>
            <nuxt-link to=""><small>Xem tất cả</small></nuxt-link>
        </div>
        <div class="product_topic" >
            <div >
                <nuxt-link class="topic_access" v-for="topic of accessoriesHot" :key="topic.id" :to="topic.link"><small class="topic_title">{{topic.title}}</small></nuxt-link>
            </div>
        </div>
        <div >
            <el-row >
                <el-col  :xs="6" :sm="4" :md="3" v-for="item of accessoriesItem" :key="item.id">
                    <nuxt-link :to="item.link" class="product_items">
                         <img class="product_img" :src="item.img" :alt="item.name" :title="item.name">
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{item.name}}</h6>
                            </div>
                            <p class="item_price">
                                {{item.price}}₫
                            </p>
                        </div>
                    </nuxt-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
.product {
	padding-top: 30px;
}
.product_title {
	display: flex;
	justify-content: space-between;
}
.product_title h5 {
	color: #1f1f1f;
	text-transform: uppercase;
}
.product_topic {
	display: flex;
	justify-content: flex-end;
	padding: 12px 8px 6px 8px;
	background: #e5e5e5;
}

.topic_title {
	background-color: #fff;
	border-radius: 20px;
	height: 30px;
	line-height: 30px;
	padding: 7px 6px;
	color: #1f1f1f;
	margin: 2px 2px;
}
.topic_access {
	display: inline-block;
	margin: 5px 0px;
}
.topic_title:hover {
	background-color: #1f1f1f;
	color: #fff;
}
.product_items {
	padding-top: 5px;
	padding-left: 5px;
}
.product_item {
	background-color: #fff;
	padding: 10px;
}
.item {
	padding-left: 12px;
	display: flex;
	justify-content: space-between;
}
.item_title {
	color: #1f1f1f;
	font-size: 14px;
}

.item_price {
	padding-left: 12px;
	color: #1f1f1f;
	font-weight: bold;
	font-size: 14px;
}
</style>
<script>
export default {
	data() {
		return {
			accessoriesHot: [
				{ title: "Miếng dán màn hình", link: "" },
				{ title: "Bao da ốp lưng", link: "" },
				{ title: "Sạc dự phòng", link: "" },
				{ title: "Thẻ nhớ", link: "" },
				{ title: "Phụ kiện Apple", link: "" },
				{ title: "Tai nghe", link: "" },
				{ title: "Loa", link: "" },
				{ title: "USB - Ổ cứng", link: "" },
				{ title: "Sạc cáp", link: "" },
				{ title: "Chuột", link: "" },
				{ title: "Balo - Túi xách", link: "" },
				{ title: "TV BOX", link: "" },
				{ title: "Phụ kiện khác", link: "" }
			],
			accessoriesItem: [
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				},
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				},
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				},
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				},
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				},
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				},
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				},
				{
					name: "MDMH iPhone X Kính cường lực",
					price: "250.000",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
					link: ""
				}
			]
		}
	}
}
</script>

