<template>
    <div class="bag">
		
            <el-tabs v-model="activeCarousel" >
                <el-tab-pane :label="product.itemSame.title" name="same">
					
                     <carousel class="phones_carousel icon_block" :paginationEnabled="false" :navigationEnabled="true"
                        navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>"
                        navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>"
                        :perPageCustom="[[411, 2], [768, 3], [1024, 5]]" :autoplay="true" :minSwipeDistance="10">
                            <slide v-for="product of product.itemSame.products" :key="product.id">
                                <nuxt-link :to="product.link" class="product_items">
                                    <img class="product_img" :src="product.img" :alt="product.name" :title="product.name">
                                        <div class="product_item">
                                        <div class="item">
                                            <h6 class="item_title">{{product.name}}</h6>
                                        </div>
                                        <p class="item_price">
                                            {{product.price}}₫
                                        </p>
                                    </div>
                                </nuxt-link>
                        </slide>
                     </carousel>

                </el-tab-pane>
                <el-tab-pane  label="Điện thoại cùng hãng" name="brand">

                         <carousel class="phones_carousel icon_block" :paginationEnabled="false" :navigationEnabled="true"
                        navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>"
                        navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>"
                        :perPageCustom="[[411, 2], [768, 3], [1024, 5]]" :autoplay="true" :minSwipeDistance="10">
                            <slide v-for="product of product.itemBrand.products" :key="product.id">
                                <nuxt-link :to="product.link" class="product_items">
                                    <img class="product_img" :src="product.img" :alt="product.name" :title="product.name">
                                        <div class="product_item">
                                        <div class="item">
                                            <h6 class="item_title">{{product.name}}</h6>
                                        </div>
                                        <p class="item_price">
                                            {{product.price}}₫
                                        </p>
                                    </div>
                                </nuxt-link>
                        </slide>
                     </carousel>

                </el-tab-pane>
            </el-tabs>
    </div>
</template>
<script>
export default {
	data() {
		return {
			activeCarousel: "same",
			product: {
				itemSame: {
					title: "Điện thoại tương tự",
					products: [
						{
							name: "Huwei Nova 3i",
							link: "",
							img:
								"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
							price: "6.990.000"
						}
					]
				},
				itemBrand: {
					title: "Điện thoại cùng hãng",
					products: [
						{
							name: "Huwei Nova 3i",
							link: "",
							img:
								"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
							price: "6.990.000"
						},
						{
							name: "Huwei Nova 3i",
							link: "",
							img:
								"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
							price: "6.990.000"
						}
					]
				}
			}
		}
	}
}
</script>
<style scoped>
.bag {
	background-color: #fff;
	margin-top: 20px;
	padding-left: 15px;
	padding-right: 15px;
}

.product_items {
	padding-top: 5px;
	padding-left: 5px;
}

.product_item {
	background-color: #fff;
	padding: 10px;
}

.product_item p {
	margin-bottom: 0.3rem;
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
	color: #d0021b;
	font-weight: bold;
	font-size: 16px;
}
</style>
