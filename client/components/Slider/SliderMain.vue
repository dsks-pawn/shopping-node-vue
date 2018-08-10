<template>
     <div>

            <el-carousel :interval="4000"  height="350px">
                <el-carousel-item   v-for="img of images" :key="img">
                <img :src="img">
                </el-carousel-item>
            </el-carousel>

    </div>
</template>

<script>
export default {
	data() {
		return {
			images: [
				"/img/slider-main.jpg",
				"/img/slider-main2.png",
				"/img/slider-main3.jpg",
				"/img/slider-main4.jpg",
				"/img/slider-main5.png"
			]
		}
	}
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
