<template>
    <div class="detail">

<div class="tab-content" id="myTabContent">
	<div class="tab-pane fade show active" :id="imgActive.id" role="tabpanel" aria-labelledby="home-tab">
		<img :src="imgActive.img" :alt="nameProduct">
	</div>

	<div class="tab-pane fade" role="tabpanel" v-for="item of images" :key="item.id"  :id="item.id" :aria-labelledby="item.id">
		<img :src="item.img">	
	</div>
</div>

   

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link"  data-toggle="tab" :href="'#'+imgActive.id" role="tab" aria-controls="home" aria-selected="true">
        <img :src="imgActive.img" :alt="nameProduct">
    </a>
  </li>

   <li  class="nav-item" v-for="item of images" :key="item.id" >
    <a v-show="item.img" class="nav-link" data-toggle="tab" :href="'#'+item.id" role="tab" aria-controls="item" aria-selected="false">
        <img  :src="item.img" :alt="nameProduct">
    </a>
  </li>
  
   <li class="nav-item">
    <a class="nav-link" data-toggle="tab" v-scroll-to="{ element: '#gallery',  easing: 'linear'}" role="tab" aria-controls="item" aria-selected="false">
        <i class="el-icon-picture"></i>
    </a>
  </li>
</ul>


</div>
</template>
<script>
export default {
	computed: {
		nameProduct() {
			return this.$store.state.PRODUCT_DETAIL.name
		},
		imgActive() {
			let obj = {
				id: "one",
				img: this.$store.state.PRODUCT_DETAIL.images[0]
			}
			return obj
		},
		images() {
			let arr = [
				{
					id: "two",
					img: this.$store.state.PRODUCT_DETAIL.images[1]
				},
				{
					id: "three",
					img: this.$store.state.PRODUCT_DETAIL.images[2]
				}
			]
			return arr
		}
	}
}
</script>
<style scoped>
.detail {
	padding-top: 20px;
}
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
.nav-link {
	border: none;
}
</style>
