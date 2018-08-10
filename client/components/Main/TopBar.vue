<template>
    <div class="navbar_top">
          <nav class="navbar navbar-expand-lg navbar-dark container">
        <a class="navbar-brand logo" href="javascript:;;"><img src="https://cdn.fptshop.com.vn/Uploads/Originals//fpt-shop-tuyen-nhieu-vi-tri-lam-viec-tai-cac-shop-ha-noi-id27942.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
          <ul class="navbar-nav mr-auto search_ul">
            <li class="nav-item active">
                <el-input  style="background-color: white;" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" v-model="input5" class=" input-with-select">
                  <el-button style="left: 2px;" class="button_search waves-effect" slot="append" icon="el-icon-search fa-lg"></el-button>
                </el-input>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item text-center">
              <a class="nav-link waves-effect waves-light">
                <img style="width: 23px;" src="/icons/phone.gif" alt="">
                <div ><small>Điện thoại trợ giá</small></div>
              </a>
            </li>
            <li class="nav-item text-center">
              <el-dropdown>
              <a class="nav-link waves-effect waves-light">
              <i class="fa fa-file fa-lg"></i>
              <div  style="font-size: 1.1em; padding-top: 4px;"><small>Thông tin hay</small></div>
              </a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link waves-effect waves-light">
            <i class="fa fa-american-sign-language-interpreting fa-lg"></i>
             <div ><small>Mua trước trả sau</small></div>
              </a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link waves-effect waves-light">
            <i class="fa fa-shopping-cart fa-lg"></i>
             <div ><small>Giỏ hàng</small></div>
              </a>
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
</style>
<script>
export default {
	data() {
		return {
			input3: "",
			input4: "",
			input5: "",
			select: ""
		}
	}
}
</script>