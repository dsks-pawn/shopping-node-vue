<template>
           <div class="ads">
               <div class="div_ads">
                    <nuxt-link :to="imgAds.link"><img style="width: 100%" :src="imgAds.img"  :alt="imgAds.name" :title="imgAds.name">
					</nuxt-link>
					
                </div>
				<div class="div_new">
                    <div class="new_title">
						<p >TIN CÔNG NGHỆ NỔI BẬT</p>
						<nuxt-link to=""><small>Xem tất cả</small></nuxt-link>
					</div>
					<div class="new_content">
						<nuxt-link class="title_product" v-for="proHot of productHot" :key="proHot.id" :to="proHot.link">
						<div class="product_menu">
							<div class="product_images">
								<img :src="proHot.img" :alt="proHot.name" :title="proHot.name">
							</div>
							<div class="product_name">
								<p>{{proHot.name}}</p>
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
}

.product_images {
	max-width: 78px;
	margin-right: 10px;
}
.product_name {
	max-height: 50%;
	font-size: 15px;
	color: #1f1f1f;
}
</style>
<script>
export default {
	data() {
		return {
			imgAds: {
				name: "",
				img:
					"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/9/636694500501127498_H2-2.png",
				link: ""
			},
			productHot: [
				{
					name: "Samsung Galaxy Note 9: Mọi thứ bạn cần biết",
					link: "",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/8/10/636695061093010098_samsung-galaxy-note-9-fptshop.jpg"
				},
				{
					name:
						"Những điểm cải tiến của Galaxy Note 9 so với Galaxy Note 8",
					link: "",
					img:
						"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/8/10/636694760993401853_galaxy-note-9-cover.jpg"
				}
			]
		}
	}
}
</script>
