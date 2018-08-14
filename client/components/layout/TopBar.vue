<template>
    <div class="navbar_top">
          <nav class="navbar navbar-expand-lg navbar-dark container">
        <nuxt-link to="/" class="logo" ><img  src="https://cdn.fptshop.com.vn/Uploads/Originals//fpt-shop-tuyen-nhieu-vi-tri-lam-viec-tai-cac-shop-ha-noi-id27942.png"></nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
          <ul class="navbar-nav mr-auto search_ul">
            <li class="nav-item active">
                <el-input  style="background-color: white;" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" v-model="inputSearch" id="search"  class="input-with-select">
                  <el-button style="left: 2px;" class="button_search waves-effect" slot="append" icon="el-icon-search fa-lg"></el-button>
                </el-input>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item text-center">
              <nuxt-link to="" class="nav-link waves-effect waves-light">
                <img style="width: 23px;" src="/icons/phone.gif" alt="">
                <div ><small>Điện thoại trợ giá</small></div>
              </nuxt-link>
            </li>
            <li class="nav-item text-center">
              <el-dropdown>
              <nuxt-link to="" class="nav-link waves-effect waves-light">
              <i class="fa fa-file fa-lg"></i>
              <div style="font-size: 1.1em; padding-top: 4px;"><small>Thông tin hay</small></div>
              </nuxt-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><nuxt-link class="link_dropdown" to="">Tin mới</nuxt-link></el-dropdown-item>
                <el-dropdown-item><nuxt-link class="link_dropdown" to="">Khuyến mãi</nuxt-link></el-dropdown-item>
                <el-dropdown-item><nuxt-link class="link_dropdown" to="">Thủ thuật</nuxt-link></el-dropdown-item>
                <el-dropdown-item><nuxt-link class="link_dropdown" to="">Video hot</nuxt-link></el-dropdown-item>
                <el-dropdown-item><nuxt-link class="link_dropdown" to="">Góc khách hàng</nuxt-link></el-dropdown-item>
                <el-dropdown-item><nuxt-link class="link_dropdown" to="">Xu hướng</nuxt-link></el-dropdown-item>
                <el-dropdown-item><nuxt-link class="link_dropdown" to="">Giải trí</nuxt-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </li>
            <li class="nav-item text-center">
              <nuxt-link to="" class="nav-link waves-effect waves-light">
            <i class="fa fa-american-sign-language-interpreting fa-lg"></i>
             <div ><small>Mua trước trả sau</small></div>
              </nuxt-link>
            </li>
            <li class="nav-item text-center">
              <nuxt-link to="" class="nav-link waves-effect waves-light">
            <i class="fa fa-shopping-cart fa-lg"></i>
             <div ><small>Giỏ hàng</small></div>
              </nuxt-link>
            </li>
          </ul>
        </div>
       </nav>
    </div>
</template>

<style scoped>
.navbar {
	padding: 2px 0px 0px 0px;
	-webkit-box-shadow: none !important;
	box-shadow: none !important;
}
.navbar_top {
	background-color: #cd1818;
}
.logo {
	max-width: 15%;
}
.navbar-nav {
	width: 100%;
	justify-content: space-evenly;
}
.search_ul .nav-item {
	width: 100%;
}

.input-with-select {
	padding-top: 1px;
	padding-bottom: 1px;
	width: 100%;
	border-radius: 2px;
}
.input-with-select input {
	border: none !important;
}

.button_search {
	background: #333 !important;
	border-right: 2px;
	color: white !important;
	height: 100%;
}
small {
	font-weight: bold;
}
.link_dropdown {
	color: #606266;
}
.link_dropdown:hover {
	color: #66b1ff !important;
}
</style>
<script>
export default {
	data() {
		return {
			inputSearch: ""
		}
	}
}
</script>