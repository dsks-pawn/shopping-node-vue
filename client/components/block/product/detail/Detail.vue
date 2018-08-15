<template>
    <div>
   
<div class="tab-content" id="myTabContent">
	<div class="tab-pane fade show active" :id="imgProduct.imgActive.id" role="tabpanel" aria-labelledby="home-tab">
		<img :src="imgProduct.imgActive.link" :alt="imgProduct.name">
	</div>

	<div class="tab-pane fade" role="tabpanel" v-for="item of imgProduct.img" :key="item.id"  :id="item.id" :aria-labelledby="item.id">
		<img :src="item.link">
	</div>
</div>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link"  data-toggle="tab" :href="'#'+imgProduct.imgActive.id" role="tab" aria-controls="home" aria-selected="true">
        <img :src="imgProduct.imgActive.link" :alt="imgProduct.name">
    </a>
  </li>

   <li class="nav-item" v-for="item of imgProduct.img" :key="item.id">
    <a class="nav-link" data-toggle="tab" :href="'#'+item.id" role="tab" aria-controls="item" aria-selected="false">
        <img :src="item.link" :alt="imgProduct.name">
    </a>
  </li>
  

   <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="" role="tab" aria-controls="item" aria-selected="false">
        <i class="el-icon-picture"></i>
    </a>
  </li>
</ul>
		

</div>
</template>
<script>
export default {
	data() {
		return {
			imgProduct: {
				name: "Vivo V9 Youth",
				imgActive: {
					id: 1,
					link:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/5/11/636616407330132502_636330303416257230_800-2.jpg"
				},
				img: [
					{
						id: 2,
						link:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/5/11/636616407330288489_636330303577564332_800-3.jpg"
					},
					{
						id: 3,
						link:
							"//cdn.fptshop.com.vn/Uploads/Originals/2018/5/24/636627767511467797_ipad-pro-105-wi-fi-4g-256gb-2017-xam-2.jpg"
					}
				]
			}
		}
	}
}
</script>
<style scoped>
.nav-tabs {
	padding: 0;
	margin-left: 0;
	margin-right: 0;
	margin-bottom: 0;
	box-shadow: none;
	background-color: #fff;
}
.nav-item {
	text-align: center;
}
.nav-item img {
	max-height: 60px;
	padding: 5px 8px;
	border: 1px solid #e2e2e2;
	cursor: pointer;
	display: block;
}
.el-icon-picture {
	border: 1px solid #e2e2e2;
	color: #616161;
	padding: 13px 15px;
	font-size: 2em;
}
</style>
