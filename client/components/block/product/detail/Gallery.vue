<template>
	<no-ssr>
    <div id="gallery" class="gallery">
        <div class="gallery_title">
            <h5>Hình ảnh thực tế ({{product.gallery.length}} ảnh)</h5>
        </div>

		<viewer :images="product.gallery">
			<carousel class="icon_block pd"  :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>" navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>" :perPageCustom="[[411, 2], [768, 4], [1024, 6]]" :autoplay="true" :minSwipeDistance="10">
				<slide v-for="img of product.gallery" :key="img.id">
						<div class="block_images"><img class="image" :src="img" :alt="product.name" :title="product.name"></div>
				</slide>
			</carousel>
		</viewer>

    </div>
	</no-ssr>
</template>
<script>
export default {
	data() {
		return {
			product: {
				name: "Asus Vivobook E406SA-BV001T ",
				gallery: [
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg",
					"http://cdn.fptshop.com.vn/Uploads/Originals/2018/5/15/636619721343342986_HASP-ASUS-E406-8.jpg"
				]
			}
		}
	}
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
