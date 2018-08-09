<template>
           <div class="ads">
               <div class="div-ads" v-for="img of imgAds" :key="img">
                    <img class="img-ads" :src="img" alt="Giá cực sốc">
                </div>

           </div>
</template>
<style scoped>
.ads {
	height: 270px;
	display: flex;
	flex-direction: column;
}
.div-ads {
	height: 50%;
	width: 100%;
}
.img-ads {
	width: 100%;
	height: 100%;
}
</style>
<script>
export default {
	data() {
		return {
			imgAds: ["/img/ads1.png", "/img/ads2.png"]
		}
	}
}
</script>
