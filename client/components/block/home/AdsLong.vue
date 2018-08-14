<template>
    <div class="ads">
        <nuxt-link :to="adsLong.link">
            <img :src="adsLong.img" alt="Giá cực sốc" >
        </nuxt-link>
    </div>
</template>

<style scoped>
.ads {
	padding-top: 20px;
}
</style>
<script>
export default {
	data() {
		return {
			adsLong: {
				img:
					"https://fptshop.com.vn/Uploads/images/samsung-hang-dinh-giam-cuc-da.png?v=2",
				link: ""
			}
		}
	}
}
</script>
