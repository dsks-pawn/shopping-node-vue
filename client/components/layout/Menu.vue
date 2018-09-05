<template>
   <div class="navbar-menu">
    <nav class="navbar navbar-expand-lg navbar-dark container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
        aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul class="navbar-nav mr-auto" style="display:flex">
            <li class="nav-item dropdown mega-dropdown button-hover1">
                <nuxt-link to="/products/phone" class="nav-link" id="navbarDropdownMenuLink1" ><i class="fa fa-mobile fa-2x"></i> ĐIỆN THOẠI</nuxt-link>
                 <div  class="dropdown-menu mega-menu v-2 row z-depth-1 block1" aria-labelledby="navbarDropdownMenuLink1">

                     <el-row>
                            <el-col :xs="24" :sm="12" :md="8"  class=" padding_left" >
                                <h6 class="text-uppercase font-weight-bold pd">Hãng sản xuất</h6>
                                    <div class="product_list">
                                        <nuxt-link v-for="brand of getMenuBrand[0]" :key="brand.id" to="" :title="brand">{{brand}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of standardPrice.phone" :title="stanPri.title" :key="stanPri.id">
                                    <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                         <div class="product_menu" v-for="proHot of getProductHot.slice(0, 2)" :key="proHot.id">
                                                <div class="product_images">
                                                    <nuxt-link to=""><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link :title="proHot.name" class="title_product" to="">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}</p>
                                                </div>
                                         </div>
                                         <div><nuxt-link style="color: #337ab7 !important;" to=""><b>Xem bảng xếp hạng điện thoại</b></nuxt-link></div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                                <nuxt-link to="" :title="getAds[0].name"><img :src="getAds[0].img" :alt="getAds[0].name"></nuxt-link>
                            </el-col>
                        </el-row>

                </div>
            </li>
            <li class="nav-item dropdown mega-dropdown button-hover2">
                <nuxt-link to="/products/laptop" class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink2" ><i class="fa fa-laptop fa-2x"></i> LAPTOP</nuxt-link>
                <div class="dropdown-menu mega-menu block2 v-2 row z-depth-1 block1" aria-labelledby="navbarDropdownMenuLink2">
                  

                          <el-row>
                            <el-col :xs="24" :sm="12" :md="8"  class=" padding_left" >
                                <h6 class="text-uppercase font-weight-bold pd">Hãng sản xuất</h6>
                                    <div class="product_list">
                                        <nuxt-link v-for="brand of getMenuBrand[1]" :key="brand.id" to="" :title="brand">{{brand}}</nuxt-link>
                                    </div>
                                <h6 class="text-uppercase font-weight-bold pd">phần mềm</h6>
                                <div class="product_list">
                                     <nuxt-link v-for="software of getMenuSoftWare[0]" :key="software.id" :title="software" to="">{{software.slice(9)}}</nuxt-link>
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of standardPrice.laptop" :title="stanPri.title" :key="stanPri.id">
                                        <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">mục đích sử dụng</h6>
                                    <div class="price_list" v-for="usage of getUsageTarget" :key="usage.id">
                                        <nuxt-link to="">{{usage}}</nuxt-link><br>
                                    </div>

                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                               <nuxt-link to="" :title="getAds[1].name"><img :src="getAds[1].img" :alt="getAds[1].name"></nuxt-link>
                            </el-col>
                        </el-row>

                           
                </div>
            </li>
             <li class="nav-item dropdown mega-dropdown button-hover3">
                <nuxt-link to="" class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink3" ><i class="fa fa-apple fa-2x"></i> APPLE</nuxt-link>
                 <div class="dropdown-menu mega-menu v-2 row z-depth-1 block3" aria-labelledby="navbarDropdownMenuLink3">


                     <el-row>
                            <el-col :xs="24" :sm="12" :md="8"  class=" padding_left" >
                                <h6 class="text-uppercase font-weight-bold pd">các sản phẩm của apple</h6>
                                    <div class="product_list">
                                        <nuxt-link v-for="brand of getMenuBrand[2]" :key="brand.id" :title="brand" to="">{{brand}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of standardPrice.apple" :title="stanPri.title" :key="stanPri.id">
                                        <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                               <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                          <div class="product_menu" v-for="proHot of getProductHot.slice(2, 4)" :key="proHot.id">
                                                <div class="product_images">
                                                    <nuxt-link to=""><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link :title="proHot.name" class="title_product" to="">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}</p>
                                                </div>
                                         </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                                <nuxt-link to="" :title="getAds[2].name"><img :src="getAds[2].img" :alt="getAds[2].name"></nuxt-link>
                            </el-col>
                        </el-row>


                </div>
            </li>

            <li class="nav-item dropdown mega-dropdown button-hover4">
                <nuxt-link to="/products/tablet" class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink4" ><i class="fa fa-tablet fa-2x"></i> TABLET</nuxt-link>
                 <div class="dropdown-menu mega-menu v-2 row z-depth-1 block4" aria-labelledby="navbarDropdownMenuLink4">


                         <el-row>
                            <el-col :xs="24" :sm="12" :md="8"  class=" padding_left" >
                                <h6 class="text-uppercase font-weight-bold pd">Hãng sản xuất</h6>
                                    <div class="product_list">
                                       <nuxt-link v-for="brand of getMenuBrand[3]" :key="brand.id" :title="brand" to="">{{brand}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of standardPrice.tablet" :title="stanPri.title" :key="stanPri.id">
                                    <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                          <div class="product_menu" v-for="proHot of getProductHot.slice(4, 6)" :key="proHot.id">
                                                <div class="product_images">
                                                    <nuxt-link to=""><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link :title="proHot.name" class="title_product" to="">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}</p>
                                                </div>
                                         </div>
                                         <div><nuxt-link style="color: #337ab7 !important;" to=""><b>Xem bảng xếp hạng máy tính bảng</b></nuxt-link></div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                                <nuxt-link to="" :title="getAds[3].name"><img :src="getAds[3].img" :alt="getAds[3].name"></nuxt-link>
                            </el-col>
                        </el-row>

                </div>
            </li>

             <li class="nav-item dropdown mega-dropdown button-hover5">
                <nuxt-link to="" class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink5" ><i class="fa fa-headphones fa-2x"></i> PHỤ KIỆN</nuxt-link>
                <div class="dropdown-menu mega-menu v-2 row z-depth-1 block5" aria-labelledby="navbarDropdownMenuLink5">
                   

                        <el-row>
                            <el-col :xs="24" :sm="12" :md="9"  class=" padding_left" >
                                <h6 class="text-uppercase font-weight-bold pd">Hãng sản xuất</h6>
                                    <div class="product_list">
                                        <nuxt-link v-for="brand of getMenuBrand[4]" :key="brand.id" :title="brand" to="">{{brand}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="9" class="padding_left vertical">
                                <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                          <div class="product_menu" v-for="proHot of getProductHot.slice(6, 8)" :key="proHot.id">
                                                <div class="product_images">
                                                    <nuxt-link to=""><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link :title="proHot.name" class="title_product" to="">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}</p>
                                                </div>
                                         </div>
                                         <div><nuxt-link style="color: #337ab7 !important;" to=""><b>Xem bảng xếp hạng máy tính bảng</b></nuxt-link></div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="6">
                                <!-- <nuxt-link to="" :title="getAds[4].name"><img :src="getAds[4].img" :alt="getAds[4].name"></nuxt-link> -->
                            </el-col>
                        </el-row>
				

                </div>
            </li>
             <li class="nav-item dropdown mega-dropdown">
                <nuxt-link to="" class="nav-link text-uppercase no-caret"><i class="fa fa-undo fa-2x"></i> MÁY ĐỔI TRẢ</nuxt-link>
            </li>
             <li class="nav-item dropdown mega-dropdown">
                <el-dropdown>
                     <nuxt-link to="" class="nav-link text-uppercase no-caret el-icon-arrow-down el-icon--right" ><i class="fa fa-credit-card fa-2x"></i> SIM & THẺ</nuxt-link>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><nuxt-link class="link_dropdown" to="" >Sim</nuxt-link></el-dropdown-item>
                    <el-dropdown-item><nuxt-link class="link_dropdown" to="" >Thẻ cào</nuxt-link></el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </li>
             <li class="nav-item dropdown mega-dropdown">
                 <el-dropdown>
                      <nuxt-link  to="" class="nav-link text-uppercase no-caret"><i class="fa fa-bullhorn fa-2x"></i> KHUYẾN MÃI</nuxt-link>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><nuxt-link class="link_dropdown" to="" >Thông tin trao thưởng</nuxt-link></el-dropdown-item>
                    <el-dropdown-item><nuxt-link class="link_dropdown" to="" >Tất cả khyến mại</nuxt-link></el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li class="nav-item dropdown mega-dropdown">
                <nuxt-link to="" class="nav-link text-uppercase no-caret" ><i class="fa fa-child fa-2x"></i> TRẢ GÓP 0%</nuxt-link>
            </li>
        </ul>
    </div>
</nav>
</div>

</template>
<script>
import Home from "~/api/Home.js"
export default {
	computed: {
		getMenuBrand() {
			return this.$store.state.HOME_DATA.menu.brand
		},
		getMenuSoftWare() {
			return this.$store.state.HOME_DATA.menu.software
		},
		getUsageTarget() {
			return this.$store.state.HOME_DATA.menu.purpose
		},
		getProductHot() {
			return this.$store.state.HOME_DATA.menu.productHot
		},
		getAds() {
			return this.$store.state.HOME_DATA.menu.ads
		}
	},
	data() {
		return {
			standardPrice: {
				phone: [
					{ title: "Dưới 1 triệu", link: "" },
					{ title: "Từ 1 đến 3 triệu", link: "" },
					{ title: "Từ 3 đến 6 triệu", link: "" },
					{ title: "Từ 6 đến 10 triệu", link: "" },
					{ title: "Từ 10 đến 15 triệu", link: "" },
					{ title: "Trên 15 triệu", link: "" }
				],
				laptop: [
					{ title: "Dưới 5 triệu", link: "" },
					{ title: "Từ 5 đến 10 triệu", link: "" },
					{ title: "Từ 10 đến 15 triệu", link: "" },
					{ title: "Từ 15 đến 20 triệu", link: "" },
					{ title: "Từ 20 đến 25 triệu", link: "" },
					{ title: "Từ 25 đến 30 triệu", link: "" },
					{ title: "Trên 30 triệu", link: "" }
				],
				apple: [
					{ title: "Dưới 10 triệu", link: "" },
					{ title: "Từ 10 đến 15 triệu", link: "" },
					{ title: "Từ 15 đến 20 triệu", link: "" },
					{ title: "Từ 20 đến 25 triệu", link: "" },
					{ title: "Từ 25 đến 30 triệu", link: "" },
					{ title: "Trên 30 triệu", link: "" }
				],
				tablet: [
					{ title: "Dưới 2 triệu", link: "" },
					{ title: "Từ 2 đến 5 triệu", link: "" },
					{ title: "Từ 5 đến 8 triệu", link: "" },
					{ title: "Trên 8 triệu", link: "" }
				]
			}
		}
	}
}
</script>

<style scoped>
h6 {
	font-size: 14px;
	padding-top: 10px;
}
.price {
	color: #d0021b;
	font-weight: bold;
}
.pd {
	color: #3d3d3d;
}
.vertical {
	border-left: 1px solid #dedede;
	border-right: 1px solid #dedede;
}
.padding_left {
	padding-left: 5px;
}
.product_menu {
	display: flex;
	margin-bottom: 13px;
}
.product_images {
	max-width: 80px;
	margin-right: 10px;
}
.title_product {
	font-weight: bold;
}
.price_list {
	line-height: 2em;
}
.navbar .dropdown-menu.mega-menu.v-2 a {
	padding: 8px !important;
	font-size: 13px;
}
.navbar .dropdown-menu a {
	line-height: 1em;
	color: #3d3d3d !important;
}
.product_list {
	display: grid;
	grid-template-columns: auto auto auto;
}
.navbar .dropdown-menu a:hover {
	color: grey !important;
}

.navbar .dropdown-menu.mega-menu.v-2 a {
	padding-left: 0px !important;
}
.nav-item {
	padding-right: 2px;
}
.navbar-menu {
	background-color: #252525;
}
.navbar {
	padding: 0;
	-webkit-box-shadow: none !important;
	box-shadow: none !important;
}
.navbar .mega-dropdown {
	position: static !important;
}

.navbar .dropdown-menu.mega-menu {
	width: 100%;
	border: none;
	border-radius: 0;
}
.navbar .dropdown-menu.mega-menu.v-2 a {
	font-weight: 400;
}
.navbar .dropdown-menu.mega-menu.v-2 a.news-title-2 {
	font-weight: 500;
	font-size: 1.1rem;
	line-height: 1.5;
	-webkit-transition: 0.2s;
	transition: 0.2s;
	color: #fff !important;
}
.navbar .dropdown-menu.mega-menu.v-2 a.news-title-2:hover {
	color: #d0d6e2 !important;
}
.navbar .dropdown-menu.mega-menu.v-2 .sub-menu ul {
	list-style: none;
}
.navbar .dropdown-menu.mega-menu.v-2 .sub-menu ul.caret-style li {
	-webkit-transition: 0.3s;
	transition: 0.3s;
}
.navbar .dropdown-menu.mega-menu.v-2 .sub-menu ul.caret-style li:hover {
	background-color: rgba(0, 0, 0, 0.2);
	-webkit-transition: 0.3s;
	transition: 0.3s;
}
.navbar .dropdown-menu.mega-menu.v-2 .sub-menu ul.caret-style li a:after {
	font-family: "fontAwesome";
	content: "\f0da";
	position: absolute;
	left: 0.5rem;
	font-size: 12px;
	top: 1rem;
}
.navbar .dropdown-menu.mega-menu.v-2 .sub-menu a.menu-item {
	color: #fff !important;
}
.navbar .dropdown-menu.mega-menu.v-2 .sub-menu a.menu-item:hover {
	color: #fff !important;
}
.navbar .dropdown-menu.mega-menu.v-2 .sub-title {
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid;
}
.navbar .dropdown-menu.mega-menu.v-2 .font-small {
	font-size: 0.85rem;
}
i {
	font-size: 1.4em;
}
.product_list {
	text-transform: capitalize;
}
.nav-link {
	font-weight: bold;
	font-size: 14px;
}
.nav-link::before {
	content: "";
}
.dropdown-menu {
	transition: 1s;
}
.button-hover1:hover > .block1 {
	display: block;
}
.button-hover2:hover > .block2 {
	display: block;
}
.button-hover3:hover > .block3 {
	display: block;
}
.button-hover4:hover > .block4 {
	display: block;
}
.button-hover5:hover > .block5 {
	display: block;
}
.link_dropdown {
	color: #606266;
}
.link_dropdown:hover {
	color: #66b1ff !important;
}
</style>
