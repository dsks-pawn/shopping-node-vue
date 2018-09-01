<template>
     <div class="bag">
        <div class="menu" id="navbar_hidden">
            <el-menu default-active="1"  text-color="black" active-text-color="#d0021b"  class="el-menu-demo" mode="horizontal" >
                <el-menu-item index="1" v-scroll-to="{ element: '#characteristics',  easing: 'linear', }">Đặc điểm nổi bật</el-menu-item>
                <el-menu-item index="2" v-scroll-to="{ element: '#evaluate',  easing: 'linear', }">Đánh giá & Nhận xét</el-menu-item>
                <el-menu-item index="3"  v-scroll-to="{ element: '#ask',  easing: 'linear', }">Hỏi & Đáp</el-menu-item>
                <el-menu-item index="4" v-scroll-to="{ element: '#gallery',  easing: 'linear', }">Hình Ảnh</el-menu-item>
            </el-menu>
        </div>
        <div id="characteristics">
            <el-carousel indicator-position="outside" :interval="4000" trigger="click" height="530px">
        <el-carousel-item v-for="img of imagesCarousel" :key="img.id">
            <nuxt-link to=""><img :src="img"></nuxt-link>
        </el-carousel-item>
        </el-carousel>
        </div>
        
        <div class="post_detail" v-if="showPost" >
                <div v-if="articleProduct" v-html="articleProduct">
                </div>       
        </div>
         <div class="post_detail" v-else v-html="articleProductIntro">
        </div>
        <div class="text-center button_show">
             <el-button v-if="showPost" @click="showPost = false" v-scroll-to="{ element: '#characteristics',  easing: 'linear'}">Rút gọn <i class="el-icon-caret-top"></i></el-button>
             <el-button v-else @click="showPost = true" v-scroll-to="{ element: '#evaluate',  easing: 'linear' }">Xem thêm <i class="el-icon-caret-bottom"></i></el-button>
        </div>

    </div>
</template>
<script>
export default {
	data() {
		return {
			showPost: false
		}
	},
	computed: {
		articleProduct() {
			return this.$store.state.PRODUCT_DETAIL.post
		},
		articleProductIntro() {
			return this.$store.state.PRODUCT_DETAIL.post.slice(1, 555) + "..."
		},
		imagesCarousel() {
			return this.$store.state.PRODUCT_DETAIL.imagesCarousel
		}
	}
}
</script>
<style scoped>
.bag {
	background: #fff;
	padding: 15px 15px;
}
.menu {
	padding-bottom: 10px;
}
.button_show {
	margin-top: 30px;
}
</style>
