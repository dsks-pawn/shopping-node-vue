<template>
    <div class="bag">
        <div class="product_title">
			<h5 v-if="product.data[0].price">Phụ kiện dành cho {{product.name}}</h5>
			<h5 v-else>Bài viết về {{product.name}}</h5>
		</div>
		<div class="product_main">
			<nuxt-link v-for="item of product.data" :key="item.id"  :to="item.link">
				<div class="main">
					<div class="main_img">
						<img :src="item.img">
					</div>
					<div class="main_content">
						<p class="item_name">{{item.name}}</p>
						<p v-if="item.price" class="item_price">{{item.price}}</p>
					</div>
				</div>
			</nuxt-link>
			<div class="text-center view_all">
				<nuxt-link :to="product.viewAll">
				Xem tất cả
				</nuxt-link>
			</div>
		</div>
    </div>
</template>
<style scoped>
.bag {
	margin-top: 10px;
	background: #fff;
	padding: 15px;
}
.product_title {
	border-bottom: 1px solid #d8d8d8;
}
.main {
	display: flex;
	padding-top: 7px;
}
.main_img {
	max-width: 100px;
}
.main_content {
	padding-left: 2%;
}
.main_content p {
	font-size: 13px;
	margin-bottom: 0.5rem;
}
.item_name {
	color: #505050;
}
.item_price {
	font-weight: bold;
	color: #d0011b;
}
.view_all {
	padding-top: 20px;
}
</style>

<script>
export default {
	props: ["product"]
}
</script>
