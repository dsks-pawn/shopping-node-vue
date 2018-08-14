<template>
    <div class="general">
		<div class="general_title">
			<div class="title_flex">
				<h4><b>{{productGeneral.typeProduct}}</b></h4>
				<small class="count_product">{{productGeneral.countProduct}}</small>
			</div>
			<div>
				<el-select v-model="valueSortTable" placeholder="Sắp xếp theo">
					<el-option
						v-for="item in sortTable"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
				<button class="fa fa-align-justify" @click="changeTablet"></button>
			</div>
		</div>
         <el-row class="transition" v-if="showTablet">
                <el-col class="hover_block" :xs="12" :sm="8" :md="6" v-for="item of productGeneral.blockData" :key="item.id">
                    <nuxt-link  :to="item.link" class="product_items">
                        <div class="sale"><small>{{item.sale}}</small></div>
                        <div><img class="product_img" :src="item.img" :alt="item.name" :title="item.name"></div>
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{item.name}}</h6>
                            </div>
                            <p class="item_price">
                                {{item.price}}₫
								<span class="item_price_old">{{item.priceOld}}</span>
                            </p>
                            <el-rate class="product_rate" v-model="item.rate.value" disabled show-score text-color="grey" :score-template="item.rate.countComment"></el-rate>
                        </div>
                    </nuxt-link>
                </el-col>
            </el-row>

			<el-row  v-else class="hover_block transition" v-for="item of productGeneral.blockData" :key="item.id">
				<el-col  :xs="6" :sm="6" :md="6" class="block_item">
					<nuxt-link :to="item.link" class="product_items">
						<div class="sale"><small>{{item.sale}}</small></div>
						<div><img class="product_img" :src="item.img" :alt="item.name" :title="item.name"></div>
					</nuxt-link> 
					
				</el-col>
				<el-col :xs="18" :sm="18" :md="18">
					<div class="product_item">
						<div class="item">
							<nuxt-link :to="item.link"><h5 class="item_title2">{{item.name}}</h5></nuxt-link>
						</div>
						<p class="item_price2">
							{{item.price}}₫
							<span class="item_price_old">{{item.priceOld}}</span>
						</p>
						<el-rate class="product_rate" v-model="item.rate.value" disabled show-score text-color="grey" :score-template="item.rate.countComment"></el-rate>
						<div class="specifications">
							<small><b>Màn hình:</b> {{item.specifications.screen}}</small>
							<small><b>Camera:</b> {{item.specifications.camera}}</small>
							<small><b>Pin:</b> {{item.specifications.pin}}</small>
							<small><b>Ram:</b> {{item.specifications.ram}}</small>
							<small><b>Kết nối:</b> {{item.specifications.connect}}</small>
							<small><b>HDH:</b> {{item.specifications.hdh}}</small>
						</div>
						<div class="information_sale">
							<p class="information_sale_tit">khách hàng được chọn 1 trong 2 khuyến mãi sau</p>
							<p >km1</p>
							<li >trả góp 0%</li>
							<p >km2</p>
							<li>Tặng Office 365 Personal</li>
							<li>Giảm thêm 500,000đ khi thanh toán Online bằng thẻ Mastercard</li>
						</div>
					</div>
				</el-col>
			</el-row>
			<div class="text-center">
				<el-pagination
					background
					layout="prev, pager, next"
					:total="100">
				</el-pagination>
			</div>

    </div>
</template>
<style scoped>
.general {
	background: #fff;
	padding-bottom: 20px;
}
.general_title {
	display: flex;
	justify-content: space-between;
	background: #fff;
	margin-top: 10px;
	padding: 20px 15px;
	border-bottom: 1px solid #e0e0e0;
}
.count_product {
	padding-left: 10px;
}
.title_flex {
	display: flex;
}
.product_items {
	padding-top: 5px;
	padding-left: 5px;
}

.fa-align-justify {
	padding: 8px 10px;
	margin-left: 15px;
	cursor: pointer;
	color: #cd1818;
	background: #fff;
	border: 1px solid #e0e0e0;
}
.product_item {
	padding: 10px;
}
.product_item p {
	margin-bottom: 0.3rem;
}
.product_rate {
	padding-left: 12px;
}
.product_rate i {
	font-size: 14px !important;
}
.transition {
	transition: 3s;
}
.item {
	padding-left: 12px;
	display: flex;
	justify-content: space-between;
}
.item_title {
	color: #1f1f1f;
	font-size: 15px;
}
.specifications {
	padding-left: 15px;
	padding-bottom: 15px;
}
.item_price2 {
	color: #1f1f1f;
	font-weight: bold;
	font-size: 20px;
	position: absolute;
	right: 10px;
	top: 5px;
}
.specifications {
	padding-top: 15px;
	display: grid;
	grid-template-columns: auto auto;
}
.item_title2 {
	font-weight: bold;
}
.item_price {
	padding-left: 12px;
	color: #1f1f1f;
	font-weight: bold;
	font-size: 16px;
}
.block_item {
	position: relative;
}
.item_price_old {
	font-weight: 100;
	text-decoration: line-through #6b6b6b;
	font-size: 12px;
}
.hover_block {
	transition: 0.5s;
	background-color: #fff;
	position: relative;
}
.hover_block:hover {
	box-shadow: 0px 2px 17px #888888;
}
.sale {
	position: absolute;
	top: 10px;
	right: 10px;
	color: #fff;
	background: #ff2842;
	padding-left: 3px;
	padding-right: 3px;
	border-radius: 2px;
}
.information_sale {
	padding-left: 15px;
	border: 1px dashed #888888;
}
.information_sale p {
	text-transform: uppercase;
	font-size: 13px;
	font-weight: bold;
}
.information_sale_tit {
	line-height: 0.9em;
	padding-top: 5px;
}
.information_sale li {
	line-height: 1.5em;
	font-size: 13px;
}
</style>
<script>
export default {
	data() {
		return {
			showTablet: true,
			sortTable: [
				{
					value: "Giá cao đến thấp",
					label: "Giá cao đến thấp"
				},
				{
					value: "Giá thấp đến cao",
					label: "Giá thấp đến cao"
				},
				{
					value: "Bán chạy nhất",
					label: "Bán chạy nhất"
				},
				{
					value: "Xem nhiều nhất",
					label: "Xem nhiều nhất"
				}
			],
			valueSortTable: "",
			productGeneral: {
				typeProduct: "Máy tính bảng",
				countProduct: "52+ Sản phẩm",
				blockData: [
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen:
								"Retina display, , 12.9 inch(2732 x 2048 pixels)",
							pin: "41 W/h Lithium - Polymer",
							connect: "Wi-Fi (802.11a/b/g/n/ac), , Có, , Có",
							camera: "12.0 MP, /7.0 MP",
							ram: "4 GB",
							hdh: "iOs"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen:
								"Retina display, , 12.9 inch(2732 x 2048 pixels)",
							pin: "41 W/h Lithium - Polymer",
							connect: "Wi-Fi (802.11a/b/g/n/ac), , Có, , Có",
							camera: "12.0 MP, /7.0 MP",
							ram: "4 GB",
							hdh: "iOs"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen:
								"Retina display, , 12.9 inch(2732 x 2048 pixels)",
							pin: "41 W/h Lithium - Polymer",
							connect: "Wi-Fi (802.11a/b/g/n/ac), , Có, , Có",
							camera: "12.0 MP, /7.0 MP",
							ram: "4 GB",
							hdh: "iOs"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen:
								"Retina display, , 12.9 inch(2732 x 2048 pixels)",
							pin: "41 W/h Lithium - Polymer",
							connect: "Wi-Fi (802.11a/b/g/n/ac), , Có, , Có",
							camera: "12.0 MP, /7.0 MP",
							ram: "4 GB",
							hdh: "iOs"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen:
								"Retina display, , 12.9 inch(2732 x 2048 pixels)",
							pin: "41 W/h Lithium - Polymer",
							connect: "Wi-Fi (802.11a/b/g/n/ac), , Có, , Có",
							camera: "12.0 MP, /7.0 MP",
							ram: "4 GB",
							hdh: "iOs"
						}
					},
					{
						name: "Huwei Nova 3i",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/6/28/636658027774801003_honor10-1o.png",
						price: "6.990.000",
						priceOld: "2.222.222đ",
						rate: { value: 5, countComment: "30 đánh giá" },
						sale: "Trả góp 0%",
						specifications: {
							screen:
								"Retina display, , 12.9 inch(2732 x 2048 pixels)",
							pin: "41 W/h Lithium - Polymer",
							connect: "Wi-Fi (802.11a/b/g/n/ac), , Có, , Có",
							camera: "12.0 MP, /7.0 MP",
							ram: "4 GB",
							hdh: "iOs"
						}
					}
				]
			}
		}
	},
	methods: {
		changeTablet() {
			this.showTablet = !this.showTablet
		}
	}
}
</script>
