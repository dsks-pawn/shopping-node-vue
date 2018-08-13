<template>
    <div>
        <el-carousel indicator-position="none" :interval="4000" trigger="click" height="300px">
            <el-carousel-item v-for="product of productSale" :key="product.id">
                <nuxt-link :to="product.link"><img :src="product.img" :alt="product.name" :title="product.name"></nuxt-link>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
	props: ["productSale"]
}
</script>


 <style scoped>
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}

img {
	width: 100%;
	height: 100%;
}
</style>
