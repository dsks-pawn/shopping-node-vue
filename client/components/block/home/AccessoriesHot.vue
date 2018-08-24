<template>
    <div class="product">
         <div class="product_title">
             <nuxt-link to=""><h5>phụ kiện giá tốt</h5></nuxt-link>
            <nuxt-link to=""><small>Xem tất cả</small></nuxt-link>
        </div>
        <div class="product_topic" >
            <div >
                <nuxt-link class="topic_access" v-for="topic of accessoriesHot.tags" :key="topic.id" to=""><small class="topic_title">{{topic.title}}</small></nuxt-link>
            </div>
        </div>
        <div class="product_access">
            <el-row >
                <el-col  :xs="6" :sm="4" :md="3" v-for="item of accessoriesHot.items" :key="item.id">
                    <nuxt-link to="" class="product_items">
                        <div class="text-center product_img">
							<img  :src="item.img" :alt="item.name" :title="item.name">
						</div>
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{item.name}}</h6>
                            </div>
                            <p class="item_price">
                                {{item.currPrice}}
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
	padding: 12px 8px 6px 8px;
	background: #e5e5e5;
	word-spacing: 0px;
}
.product_access {
	background-color: #fff;
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
.product_img {
	height: 130px;
	margin-top: 10px;
}
.product_img img {
	max-height: 115px;
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
	props: ["accessoriesHot"]
}
</script>

