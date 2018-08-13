<template>
    <no-ssr>
        <div class="phones_block">
             <div class="phones_title">
                <nuxt-link to=""><h5>{{phones.typePhones}}</h5></nuxt-link>
                <nuxt-link :to="phones.viewAll"><small>Xem tất cả</small></nuxt-link>
            </div>
            <carousel  class="phones_carousel icon_block" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>" navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>" :perPageCustom="[[411, 2], [768, 3], [1024, 5]]" :autoplay="true" :minSwipeDistance="10">
                <slide class="hover_block" v-for="phone of phones.itemPhones" :key="phone.id">
                    <nuxt-link  :to="phone.link" class="product_items">
                        <div class="text-center"><img class="product_img" :src="phone.img" :alt="phone.name" :title="phone.name"></div>
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{phone.name}}</h6>
                            </div>
                            <p class="item_price">
                                {{phone.price}}₫
								<span class="item_price_old">{{phone.priceOld}}</span>
                            </p>
							
							
                            <el-rate class="product_rate" v-model="phone.rate.value" disabled show-score text-color="grey" :score-template="phone.rate.countComment"></el-rate>
                        </div>
                    </nuxt-link>
                </slide>
            </carousel>
        </div>
     </no-ssr>
</template>
<script>
export default {
	props: ["phones"]
}
</script>
<style scoped>
.phones_block {
	margin-top: 15px;
}
.phones_title {
	display: flex;
	justify-content: space-between;
	padding-top: 10px;
	padding-bottom: 15px;
}
.phones_title h5 {
	text-transform: uppercase;
	color: #1f1f1f;
}
.phones_carousel {
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
.product_item p {
	margin-bottom: 0.3rem;
}
.product_rate {
	padding-left: 12px;
}
.product_rate i {
	font-size: 14px !important;
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
.hover_block {
	transition: 1s;
}
.hover_block:hover {
	box-shadow: 0px 0px 17px #888888;
}
</style>
