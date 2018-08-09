<template>
<div class="container-fuild">
  <el-menu active-text-color="#ba68c8" :collapse-transition="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">
    <el-tooltip class="item" :hide-after="1000" effect="dark" content="PHỤ KIỆN" placement="bottom">
      <i class="fa fa-headphones fa-2x"></i>
    </el-tooltip>
  </el-menu-item>
  <el-menu-item index="2">
    <el-tooltip class="item" :hide-after="1000" effect="dark" content="ĐIỆN THOẠI" placement="bottom">
     <i class="fa fa-mobile fa-2x"></i>
    </el-tooltip>
    </el-menu-item>
  <el-menu-item index="4">
    <el-tooltip class="item" :hide-after="1000" effect="dark" content="TABLET" placement="bottom">
    <i class="fa fa-tablet fa-2x"></i>
    </el-tooltip>
    </el-menu-item>
  <el-menu-item index="5">
         <el-tooltip class="item" :hide-after="1000" effect="dark" content="LAPTOP" placement="bottom">
    <i class="fa fa-laptop fa-2x"></i>
    </el-tooltip>
    </el-menu-item>
  <el-menu-item index="6">
     <el-tooltip class="item" :hide-after="1000" effect="dark" content="KHUYẾN MÃI" placement="bottom">
    <i class="fa fa-gift fa-2x"></i>
    </el-tooltip>
    </el-menu-item>
   <el-menu-item index="7">
     <el-tooltip class="item" :hide-after="1000" effect="dark" content="TIN TỨC" placement="bottom">
     <i class="fa fa-file fa-2x"></i>
   </el-tooltip>
   </el-menu-item>
   <el-menu-item index="8">
     <el-tooltip class="item" :hide-after="1000" effect="dark" content="HỎI ĐÁP" placement="bottom">
     <i class="fa fa-comments fa-2x"></i>
   </el-tooltip>
   </el-menu-item>
</el-menu>
</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: "1",
			activeIndex2: "1"
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath)
		}
	}
}
</script>
<style scoped>
.el-menu-demo {
	display: flex;
	justify-content: space-around;
	background-color: rgba(0, 0, 0, 0.1);
}
.el-submenu__title:hover {
	background-color: none;
}
i {
	color: #80cbc4;
}
</style>
