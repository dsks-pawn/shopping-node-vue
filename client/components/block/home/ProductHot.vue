<template>
    <div class="product">
         <div class="product_title">
             <nuxt-link :to="productsHot.viewAll"><h5>{{productsHot.typeProduct}}</h5></nuxt-link>
            <nuxt-link :to="productsHot.viewAll"><small>Xem tất cả</small></nuxt-link>
        </div>
        <div>
            <el-row :gutter="10">
                <el-col  :xs="24" :sm="12" :md="8" v-for="item of productsHot.products" :key="item.id">
                    <nuxt-link to="" :title="item.name">
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{item.name}}</h6>
                                <small v-if="item.sale" class="item_answer">{{item.sale}}</small>
                            </div>
                            <p class="item_price">
                                {{item.currPrice}}
                            </p>
                            <img :src="item.img" :alt="item.name" :title="item.name">
                        </div>
                    </nuxt-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
	props: ["productsHot"]
}
</script>


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
.product_item {
	background-color: #fff;
	padding: 10px;
	margin-top: 10px;
}
.item {
	padding-left: 12px;
	display: flex;
	justify-content: space-between;
}
.item_title {
	color: #1f1f1f;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.item_price {
	padding-left: 12px;
	color: #656464;
	font-weight: bold;
}
.item_answer {
	background-color: #ff2842;
	padding: 0px 7px 0px 7px;

	color: #fff;
}
</style>

