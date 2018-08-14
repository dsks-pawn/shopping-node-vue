<template>
    <no-ssr>
        <div class="laptops_block">
             <div class="laptops_title">
                <nuxt-link to=""><h5>{{laptops.typeLaptops}}</h5></nuxt-link>
                <nuxt-link :to="laptops.viewAll"><small>Xem tất cả</small></nuxt-link>
            </div>
            <carousel  class="laptops_carousel icon_block " :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>" navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>" :perPageCustom="[[411, 2], [768, 2], [1024, 4]]" :autoplay="true" :minSwipeDistance="10">
                <slide class="hover_block" v-for="laptop of laptops.itemLaptops" :key="laptop.id">
                    <div class="sale"><small>{{laptop.sale}}</small></div>
					<nuxt-link  :to="laptop.link" class="product_items">
						<div class="text-center"><img class="product_img" :src="laptop.img" :alt="laptop.name" :title="laptop.name"></div>
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{laptop.name}}</h6>
                            </div>
                            <p class="item_price">
                                {{laptop.price}}₫
								<span class="item_price_old">{{laptop.priceOld}}</span>
                            </p>
                            <el-rate  class="product_rate" v-model="laptop.rate.value" disabled show-score text-color="grey" :score-template="laptop.rate.countComment"></el-rate>
							<div class="horizontal"></div>
							<div class="specifications">
								<small class="specifications_item"><span class="specifications_item_title">Màn hình: </span><span> {{laptop.specifications.screen}}</span></small><br>
								<small class="specifications_item"><span class="specifications_item_title">CPU: </span> <span> {{laptop.specifications.cpu}}</span></small><br>
								<small class="specifications_item"><span class="specifications_item_title">Ram: </span> <span> {{laptop.specifications.ram}}</span></small><br>
								<small class="specifications_item"><span class="specifications_item_title">VGA: </span> <span> {{laptop.specifications.vga}}</span></small><br>
								<small class="specifications_item"><span class="specifications_item_title">GB: </span> <span> {{laptop.specifications.hdh}}</span></small><br>
								<small class="specifications_item"><span class="specifications_item_title">HĐH: </span> <span> {{laptop.specifications.weight}}</span></small><br>
							</div>
                        </div>
                    </nuxt-link>
                </slide>
            </carousel>
        </div>
     </no-ssr>
</template>
<script>
export default {
	props: ["laptops"]
}
</script>
<style scoped>
.laptops_block {
	margin-top: 15px;
}
.laptops_title {
	display: flex;
	justify-content: space-between;
	padding-top: 10px;
	padding-bottom: 15px;
}
.laptops_title h5 {
	text-transform: uppercase;
	color: #1f1f1f;
}
.laptops_carousel {
	background-color: #fff;
	padding-top: 15px;
}
.product_items {
	padding-top: 5px;
	padding-left: 5px;
}
.product_item {
	padding: 10px;
}
.specifications {
	padding: 10px;
}
.product_item p {
	margin-bottom: 0.3rem;
}
.product_rate {
	padding-left: 12px;
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

.item_price {
	padding-left: 12px;
	color: #1f1f1f;
	font-weight: bold;
	font-size: 16px;
}
.item_price_old {
	font-weight: 100;
	text-decoration: line-through #6b6b6b;
	font-size: 12px;
}
.horizontal {
	height: 1px;
	border-top: 1px solid #dbdbdb;
	margin-top: 5px;
}
.specifications_item {
	display: inline-block;
	color: grey;
}
.specifications_item_title {
	font-weight: bold;
}
.hover_block {
	transition: 1s;
	background-color: #fff;
	position: relative;
}
.hover_block:hover {
	box-shadow: 0px 0px 17px #888888;
}
.sale {
	position: absolute;
	top: 8px;
	right: 10px;
	color: #fff;
	background: #ff2842;
	padding-left: 3px;
	padding-right: 3px;
	border-radius: 2px;
}
</style>
