<template>
 <no-ssr>
    <div class="brands_block">
        <div class="title_brand text-center"><h6 >{{brands.typeBrands}}</h6></div>
        <carousel class="icon_block" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>" navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>" :perPageCustom="[[411, 2], [768, 4], [1024, 7]]" :autoplay="true" :minSwipeDistance="10">
            <slide v-for="brand of brands.brandBig" :key="brand.id">
               <el-row>
				   <el-card style="border: none">
					   <nuxt-link to=""><div class="block_images"><img class="image" :src="brand.img" :alt="brand.title" :title="brand.title"></div></nuxt-link>
				   </el-card>
                </el-row>
            </slide>
            
        </carousel>
    </div>
     </no-ssr>
</template>

<style scoped>
.brands_block {
	padding: 20px 0 0px;
	background-color: #fff;
	margin-top: 30px;
}
.title_brand {
	padding-top: 10px;
	padding-bottom: 15px;
	text-transform: uppercase;
}
.block_images {
	height: 45px;
	padding: 5px 30px;
	text-align: center;
	overflow: hidden;
	transform: scale(1.7);
}

.images {
	width: auto;
	overflow: hidden;
	display: inline-block;
}
</style>

<script>
export default {
	props: ["brands"]
}
</script>
