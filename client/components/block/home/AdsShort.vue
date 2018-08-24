<template>
           <div class="ads">
               <div class="div_ads">
                    <nuxt-link to=""><img style="width: 100%" :src="getAdsShort.img"  :alt="getAdsShort.title" :title="getAdsShort.title">
					</nuxt-link>
                </div>
				<div class="div_new">
                    <div class="new_title">
						<p >TIN CÔNG NGHỆ NỔI BẬT</p>
					
						<nuxt-link to=""><small>Xem tất cả</small></nuxt-link>
					</div>
					<div class="new_content">
						<nuxt-link class="title_product" v-for="news of getNews" :key="news.id" :title="news.title" to="">
						<div class="product_menu">
							<span class="product_images">
								<img :src="news.img" :alt="news.title" :title="news.title">
							</span>
							<div class="product_name">
								<p>{{news.title}}</p>
							</div>
						</div>
						</nuxt-link>
						
					</div>
                </div>
           </div>
</template>
<style scoped>
.ads {
	height: 300px;
	display: flex;
	flex-direction: column;
}
.div_ads {
	height: 33%;
	width: 100%;
}
.div_new {
	height: 67%;
	width: 100%;
	background-color: #fff;
	padding: 11px 15px 15px 15px;
}
.new_title {
	display: flex;
	justify-content: space-between;
}
.new_title p {
	font-weight: bold;
	color: #d0011b;
}
.img_ads {
	width: 100%;
	height: 100%;
}

.product_menu {
	padding-top: 10px;
	display: flex;
	justify-content: space-between;
}

.product_images {
	max-width: 120px;
	height: 40px;
	overflow: hidden;
}
.product_name {
	margin-left: 10px;
	max-height: 50%;
	font-size: 13px;
	color: #1f1f1f;
}
</style>
<script>
export default {
	computed: {
		getAdsShort() {
			return this.$store.state.HOME_DATA.ads.short[0]
		},
		getNews() {
			return this.$store.state.HOME_DATA.news
		}
	}
}
</script>
