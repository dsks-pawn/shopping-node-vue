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
                <el-col class="hover_block" :xs="12" :sm="8" :md="6" v-for="item of productFilter" :key="item.id">
                    <nuxt-link  to="" class="product_items">
                        <div class="sale"><small>{{item.provisional.sale}}</small></div>
                        <div class="text-center items_img"><img class="product_img" :src="item.avatar" :alt="item.name" :title="item.name"></div>
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{item.name}}</h6>
                            </div>
                            <p class="item_price">
                                {{item.currPrice}}
								<span class="item_price_old">{{item.oldPrice}}</span>
                            </p>
                            <el-rate class="product_rate" v-model="item.provisional.rate" disabled show-score text-color="grey" :score-template="item.provisional.evaluates"></el-rate>
                        </div>
                    </nuxt-link>
                </el-col>
            </el-row>

			<el-row  v-else v-show="item.sale" class="hover_block transition tablet_two" v-for="item of productFilter" :key="item.id">
				<el-col  :xs="6" :sm="6" :md="6" class="block_item">
					<nuxt-link to="" class="product_items">
						<div class="sale"><small>{{item.provisional.sale}}</small></div>
						<div><img class="product_img" :src="item.avatar" :alt="item.name" :title="item.name"></div>
					</nuxt-link> 
					
				</el-col>
				<el-col :xs="18" :sm="18" :md="18">
					<div class="product_item">
						<div class="item">
							<nuxt-link to=""><h5 class="item_title2">{{item.name}}</h5></nuxt-link>
						</div>
						<p class="item_price2">
							{{item.currPrice}}
							<span class="item_price_old">{{item.oldPrice}}</span>
						</p>
                            <el-rate class="product_rate" v-model="item.provisional.rate" disabled show-score text-color="grey" :score-template="item.provisional.evaluates"></el-rate>
						<div class="specifications">
							<small><b>Màn hình:</b> {{item.provisional.specifications[0]}}</small>
							<small><b v-if="productFilter.category != `laptop`">Camera: </b>
									<b v-else>CPU: </b>{{item.provisional.specifications[1]}}
							</small>
							<small><b v-if="item.category != `laptop`">Pin: </b><b v-else>Ram: </b> {{item.provisional.specifications[2]}}</small>
							<small><b v-if="item.category != `laptop`">Ram: </b><b v-else>VGA :</b> {{item.provisional.specifications[3]}}</small>
							<small><b v-if="item.category == `phone`">CPU: </b><b v-else-if="item.category == `tablet`">Kết Nối: </b><b v-else>HĐH: </b> {{item.provisional.specifications[4]}}</small>
							<small><b v-if="item.category != `laptop`">HĐH: </b><b v-else>Nặng: </b> {{item.provisional.specifications[5]}}</small>
						</div>
						<div v-show="item.sale" class="information_sale" v-html="item.sale"></div>
					</div>
				</el-col>
			</el-row>
			<div class="text-center pd">
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
	height: 90px;
}
.product_item p {
	margin-bottom: 0.3rem;
}
.items_img {
	height: 200px;
	display: block;
}
.tablet_two {
	padding: 10px 10px;
	min-height: 310px;
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

.item_price2 {
	color: #1f1f1f;
	font-weight: bold;
	font-size: 20px;
	position: absolute;
	right: 10px;
	top: 5px;
}
.specifications {
	padding-left: 15px;
	padding-bottom: 15px;
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
	color: grey;
	font-weight: 400;
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
	padding-top: 10px;
	border: 1px dashed #888888;
	line-height: 0.3em;
	font-size: 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.fa-circle {
	font-size: 7px;
	color: #34a105;
}
.pd {
	padding-top: 30px;
}
</style>
<script>
export default {
	props: ["productFilter"],
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
				countProduct: "52+ Sản phẩm"
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
