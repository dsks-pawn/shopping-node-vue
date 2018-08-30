<template>
	<no-ssr>
    <div id="gallery" class="gallery">
        <div class="gallery_title">
            <h5>Hình ảnh thực tế ({{gallery.length}} ảnh)</h5>
        </div>

		<viewer :images="gallery">
			<carousel class="icon_block pd"  :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>" navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>" :perPageCustom="[[411, 2], [768, 4], [1024, 6]]" :autoplay="true" :minSwipeDistance="10">
				<slide v-for="img of gallery" :key="img.id">
						<div class="block_images"><img class="image" :src="img" :alt="name" :title="name"></div>
				</slide>
			</carousel>
		</viewer>

    </div>
	</no-ssr>
</template>
<script>
export default {
	computed: {
		gallery() {
			return this.$store.state.PRODUCT_DETAIL.gallery
		},
		name(){
			return this.$store.state.PRODUCT_DETAIL.name
		}
	},
}
</script>
<style scoped>
.gallery {
	padding-top: 30px;
	padding-bottom: 15px;
	background-color: #fff;
}
.gallery_title {
	padding-left: 15px;
	border-bottom: 1px solid #d8d8d8;
}
.pd {
	margin-top: 20px;
}
.block_images {
	padding: 10px 10px;
}
.image {
	cursor: pointer;
	border: 1px solid #ddd;
}
</style>
