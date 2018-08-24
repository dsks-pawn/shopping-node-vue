<template>
    <div class="ads">
        <nuxt-link to="">
            <img :src="getAdsLong.img" alt="Giá cực sốc" >
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
	computed: {
		getAdsLong() {
			return this.$store.state.HOME_DATA.ads.long
		}
	}
}
</script>
