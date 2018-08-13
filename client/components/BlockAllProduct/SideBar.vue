<template>
    <div class="side_bar">

      <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <div class="sidebar_title"><h5>Bộ lọc</h5></div>

          <el-submenu class="horizontal" index="1">
          <template slot="title">
              <span class="items_title">{{productsAll.manufacturer.title}}</span>
          </template>
          <el-menu-item index="1-1">
            <el-autocomplete style="padding: 0px;" id="searchBrand" class="input-with-select" v-model="searchBrand" placeholder="Tìm thương hiệu">
            </el-autocomplete>
            </el-menu-item>
            
            <el-menu-item style="padding-left: 20px;" index="1-2" v-for="value of productsAll.manufacturer.value" :key="value.id">
               <el-checkbox>{{value}}</el-checkbox>
          </el-menu-item>
            </el-submenu>



          <el-submenu class="horizontal" v-for="proSide of productsAll.sideBarValue" :key="proSide.id" :index="proSide.title">
             <template slot="title">
                  <span class="items_title">{{proSide.title}}</span>
              </template>
            <el-menu-item style="padding-left: 20p; margin: 0 auto"  index="1-1"  v-for="pro of proSide.value" :key="pro.id">
              <el-checkbox>{{pro}}</el-checkbox>
             </el-menu-item>
						 <hr>
          </el-submenu>

			</el-menu>

		</div>
</template>
<script>
export default {
	data() {
		return {
			searchBrand: "",
			productsAll: {
				manufacturer: {
					title: "Hãng sản xuất",
					value: [
						"Tất cả",
						"Apple (Macbook)",
						"Samsung",
						"Lenovo",
						"Masstel",
						"Huawei",
						"Itel"
					]
				},
				sideBarValue: [
					{
						title: "Mức giá",
						value: [
							"Tất cả",
							"Dưới 5 triệu",
							"Từ 5 - 10 triệu",
							"Từ 10 - 15 triệu",
							"Từ 15 - 20 triệu",
							"Từ 20 - 25 triệu",
							"Từ 25 - 30 triệu",
							"Trên 30 triệu"
						]
					},
					{
						title: "Tính năng nổi bật",
						value: [
							"Tất cả",
							"Chụp ảnh tuyệt đỉnh",
							"Chụp ảnh tuyệt đỉnh",
							"Trải nghiệm màn hình tuyệt hảo",
							"Thiết kế hiện đại",
							"Cải tiến công nghệ mới nhất",
							"Tạo tác hoàn hảo",
							"Máy tính bảng thông minh"
						]
					},
					{
						title: "Hệ điều hành",
						value: ["Tất cả", "Android", "iOS", "Windows"]
					},
					{
						title: "Kích thước màn hình",
						value: [
							"Tất cả",
							"7 - 8 Inch",
							"8 - 9 Inch",
							"9 - 10 Inch",
							"Trên 10 Inch"
						]
					},
					{
						title: "Trả góp ưu đãi",
						value: [
							"Tất cả",
							"Trả góp 0%",
							"Trả góp 0Đ",
							"Trả góp 0%/0Đ"
						]
					}
				]
			}
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		}
	}
}
</script>
<style scoped>
.horizontal {
	border-top: 1px solid rgb(219, 219, 219);
}
.side_bar {
	padding-top: 10px;
}
.sidebar_title h5 {
	font-weight: bold;
	padding-left: 20px;
	text-transform: initial;
	padding-top: 20px;
}

.items_title {
	font-weight: bold;
}
.input-with-select {
	padding-top: 1px;
	padding-bottom: 1px;
	padding-right: 0px !important;
	width: 100%;
	border-radius: 2px;
}
.input-with-select input {
	border: none !important;
}
#searchBrand {
	padding-right: 0px !important;
}
</style>
