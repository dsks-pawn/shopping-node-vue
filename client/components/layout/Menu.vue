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
                                        <nuxt-link v-for="proCom of phoneProduct.productionCompany" :key="proCom.id" :to="proCom.link">{{proCom.name}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of phoneProduct.standardPrice" :key="stanPri.id">
                                    <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                         <div class="product_menu" v-for="proHot of phoneProduct.productHot" :key="proHot.id">
                                                <div class="product_images">
                                                    <nuxt-link :to="proHot.link"><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link class="title_product" :to="proHot.link">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}₫</p>
                                                </div>
                                         </div>
                                         <div><nuxt-link style="color: #337ab7 !important;" to=""><b>Xem bảng xếp hạng điện thoại</b></nuxt-link></div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                                <nuxt-link :to="phoneProduct.ads.link"><img :src="phoneProduct.ads.img" alt="Quảng cáo"></nuxt-link>
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
                                        <nuxt-link v-for="proCom of laptopProduct.productionCompany" :key="proCom.id" :to="proCom.link">{{proCom.name}}</nuxt-link>
                                    </div>
                                <h6 class="text-uppercase font-weight-bold pd">phần mềm</h6>
                                <div class="product_list">
                                     <nuxt-link v-for="soft of laptopProduct.software" :key="soft.id" :to="soft.link">{{soft.name}}</nuxt-link>
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of laptopProduct.standardPrice" :key="stanPri.id">
                                        <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">mục đích sử dụng</h6>
                                    <div class="price_list" v-for="usage of laptopProduct.usageTarget" :key="usage.id">
                                        <nuxt-link  :to="usage.link">{{usage.title}}</nuxt-link><br>
                                    </div>

                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                                <nuxt-link :to="laptopProduct.ads.link"><img :src="laptopProduct.ads.img" alt="Quảng cáo"></nuxt-link>
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
                                        <nuxt-link v-for="proCom of appleProduct.productionCompany" :key="proCom.id" :to="proCom.link">{{proCom.name}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of appleProduct.standardPrice" :key="stanPri.id">
                                        <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                               <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                         <div class="product_menu" v-for="proHot of appleProduct.productHot" :key="proHot.id">
                                                <div class="product_images">
													 <nuxt-link :to="proHot.link"><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link class="title_product" :to="proHot.link">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}₫</p>
                                                </div>
                                         </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                                <nuxt-link :to="appleProduct.ads.link"><img :src="appleProduct.ads.img" alt="Quảng cáo"></nuxt-link>
                            </el-col>
                        </el-row>


                </div>
            </li>

            <li class="nav-item dropdown mega-dropdown button-hover4">
                <nuxt-link to="/productsall/tablets" class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink4" ><i class="fa fa-tablet fa-2x"></i> TABLET</nuxt-link>
                 <div class="dropdown-menu mega-menu v-2 row z-depth-1 block4" aria-labelledby="navbarDropdownMenuLink4">


                         <el-row>
                            <el-col :xs="24" :sm="12" :md="8"  class=" padding_left" >
                                <h6 class="text-uppercase font-weight-bold pd">Hãng sản xuất</h6>
                                    <div class="product_list">
                                        <nuxt-link v-for="proCom of tabletProduct.productionCompany" :key="proCom.id" :to="proCom.link">{{proCom.name}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                    <div class="price_list" v-for="stanPri of tabletProduct.standardPrice" :key="stanPri.id">
                                    <nuxt-link  :to="stanPri.link">{{stanPri.title}}</nuxt-link><br>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="7" class="padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                         <div class="product_menu" v-for="proHot of tabletProduct.productHot" :key="proHot.id">
                                                <div class="product_images">
													 <nuxt-link :to="proHot.link"><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link class="title_product" :to="proHot.link">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}₫</p>
                                                </div>
                                         </div>
                                         <div><nuxt-link style="color: #337ab7 !important;" to=""><b>Xem bảng xếp hạng máy tính bảng</b></nuxt-link></div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="5">
                                <nuxt-link :to="tabletProduct.ads.link"><img :src="tabletProduct.ads.img" alt="Quảng cáo"></nuxt-link>
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
                                        <nuxt-link v-for="proCom of accessoriesProduct.productionCompany" :key="proCom.id" :to="proCom.link">{{proCom.name}}</nuxt-link>
                                    </div>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="9" class="padding_left vertical">
                                <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                         <div class="product_menu" v-for="proHot of accessoriesProduct.productHot" :key="proHot.id">
                                                <div class="product_images">
                                                    <nuxt-link :to="proHot.link"><img :src="proHot.img" :alt="proHot.name" :title="proHot.name"></nuxt-link>
                                                </div>
                                                <div>
                                                    <nuxt-link class="title_product" :to="proHot.link">{{proHot.name}}</nuxt-link>
                                                    <p class="price">{{proHot.price}}₫</p>
                                                </div>
                                         </div>
                                         <div><nuxt-link style="color: #337ab7 !important;" to=""><b>Xem bảng xếp hạng máy tính bảng</b></nuxt-link></div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="6">
                                <nuxt-link :to="accessoriesProduct.ads.link"><img :src="accessoriesProduct.ads.img" alt="Quảng cáo"></nuxt-link>
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
export default {
	data() {
		return {
			phoneProduct: {
				productionCompany: [
					{ name: "Apple(Iphone)", link: "" },
					{ name: "Huawei", link: "" },
					{ name: "Intel", link: "" },
					{ name: "Asus", link: "" },
					{ name: "Wiko", link: "" },
					{ name: "MEIZU", link: "" },
					{ name: "Xiaomi", link: "" },
					{ name: "Samsung", link: "" },
					{ name: "Nokia", link: "" },
					{ name: "Sony", link: "" },
					{ name: "Mobiistart", link: "" },
					{ name: "HONOR", link: "" },
					{ name: "OPPO", link: "" },
					{ name: "Vivo", link: "" },
					{ name: "Masstel", link: "" },
					{ name: "Philips", link: "" },
					{ name: "Tecnos", link: "" }
				],
				standardPrice: [
					{ title: "Dưới 1 triệu", link: "" },
					{ title: "Từ 1 đến 3 triệu", link: "" },
					{ title: "Từ 3 đến 6 triệu", link: "" },
					{ title: "Từ 6 đến 10 triệu", link: "" },
					{ title: "Từ 10 đến 15 triệu", link: "" },
					{ title: "Trên 15 triệu", link: "" }
				],
				productHot: [
					{
						name: "Xiaomi Redmi Note 5 32GB",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/7/636612801354913649_636574162702861277_1o.png.jpeg",
						price: "4.799.000"
					},
					{
						name: "OPPO F7",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/4/12/636591268193868757_1o.png",
						price: "7.999.000"
					}
				],
				ads: {
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636687067369243072_636660033217957991_Samsung-H4.jpg",
					link: ""
				}
			},
			laptopProduct: {
				productionCompany: [
					{ name: "Apple(Macbook)", link: "" },
					{ name: "Asus", link: "" },
					{ name: "Ancer", link: "" },
					{ name: "Dell", link: "" },
					{ name: "HP", link: "" },
					{ name: "Lenovo", link: "" },
					{ name: "MSI", link: "" },
					{ name: "Masstel", link: "" }
				],
				software: [
					{ name: "Diệt virus", link: "" },
					{ name: "Microsoft Office", link: "" },
					{ name: "Windows", link: "" },
					{ name: "Phần mềm khác", link: "" }
				],
				standardPrice: [
					{ title: "Dưới 5 triệu", link: "" },
					{ title: "Từ 5 đến 10 triệu", link: "" },
					{ title: "Từ 10 đến 15 triệu", link: "" },
					{ title: "Từ 15 đến 20 triệu", link: "" },
					{ title: "Từ 20 đến 25 triệu", link: "" },
					{ title: "Từ 25 đến 30 triệu", link: "" },
					{ title: "Trên 30 triệu", link: "" }
				],
				usageTarget: [
					{ title: "Sản phẩm 2 trong 1", link: "" },
					{ title: "Gaming - Đồ họa", link: "" },
					{ title: "Doanh nhân", link: "" },
					{ title: "Ram khủng", link: "" },
					{ title: "Chọn bởi FPT shop", link: "" },
					{ title: "Sinh viên - Văn phòng", link: "" },
					{ title: "Windows", link: "" },
					{ title: "Giá rẻ", link: "" },
					{ title: "Hiện đại", link: "" }
				],
				ads: {
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/6/30/636659578548694071_H4-Section 1.png",
					link: ""
				}
			},
			appleProduct: {
				productionCompany: [
					{ name: "iPhone", link: "" },
					{ name: "iPad", link: "" },
					{ name: "Mac", link: "" },
					{ name: "iMac", link: "" },
					{ name: "Macmini", link: "" },
					{ name: "Macpro", link: "" },
					{ name: "Watch", link: "" },
					{ name: "TV", link: "" },
					{ name: "Phụ kiện", link: "" },
					{ name: "Beats", link: "" }
				],
				standardPrice: [
					{ title: "Dưới 10 triệu", link: "" },
					{ title: "Từ 10 đến 15 triệu", link: "" },
					{ title: "Từ 15 đến 20 triệu", link: "" },
					{ title: "Từ 20 đến 25 triệu", link: "" },
					{ title: "Từ 25 đến 30 triệu", link: "" },
					{ title: "Trên 30 triệu", link: "" }
				],
				productHot: [
					{
						name: "iPhone 6 32GB (2017)",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/18/636622605489276625_6-32.png",
						price: "7.499.000"
					},
					{
						name: "iPad 2018 WiFi 32GB",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/5/8/636613881392399068_ipad-wifi.png",
						price: "9.999.000"
					}
				],
				ads: {
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/1/1/636504001230136182_636482946260323426_636459941853997270_Banner-Apple-T12.png",
					link: ""
				}
			},
			tabletProduct: {
				productionCompany: [
					{ name: "Apple(iPad)", link: "" },
					{ name: "Samsung", link: "" },
					{ name: "Lenovo", link: "" },
					{ name: "Masstel", link: "" },
					{ name: "Huawei", link: "" },
					{ name: "Itel", link: "" }
				],
				standardPrice: [
					{ title: "Dưới 2 triệu", link: "" },
					{ title: "Từ 2 đến 5 triệu", link: "" },
					{ title: "Từ 5 đến 8 triệu", link: "" },
					{ title: "Trên 8 triệu", link: "" }
				],
				productHot: [
					{
						name: "Samsung Galaxy Tab A 2017",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/11/1/636451312432993323_1o.png",
						price: "5.490.000"
					},
					{
						name: "Huawei MediaPad T3 7.0 Prestige",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/10/24/636444518526948294_Huawei-MediaPad-T3-7.0-Prestige.png",
						price: "2.090.000"
					}
				],
				ads: {
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/7/12/636669934945963395_H4.png",
					link: ""
				}
			},
			accessoriesProduct: {
				productionCompany: [
					{ name: "Bao da ốp lưng", link: "" },
					{ name: "Ốp lưng tự thiết kế", link: "" },
					{ name: "Sạc dự phòng", link: "" },
					{ name: "Thẻ nhớ", link: "" },
					{ name: "Phụ kiện Apple", link: "" },
					{ name: "Miếng dáng màn hình", link: "" },
					{ name: "Tai nghe", link: "" },
					{ name: "Loa", link: "" },
					{ name: "USB - Ổ cứng", link: "" },
					{ name: "Sạc cáp", link: "" },
					{ name: "Chuột", link: "" },
					{ name: "Balo - Túi xách", link: "" },
					{ name: "TV BOX", link: "" },
					{ name: "Phụ kiện khác", link: "" },
					{ name: "Máy chơi game", link: "" }
				],
				productHot: [
					{
						name: "MDMH iPhone X Kính cường lực Clear",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2018/1/25/636524432304682928_636482583480745126_P1510979240_mieng-dan-kinh-cuong-luc-iphone-x-nillkin-amazing-h-pro-1-(1).jpg",
						price: "250.000"
					},
					{
						name: "Mic Karaoke kèm loa Bluetooth và SDP iCore M9",
						link: "",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/3/1/636239586738677906_HAPK-MICRO-KARAOKE-KEM-LOA-BLUETOOTH-VA-SDP-ARIRANG-ICORE-M9-00328363.png",
						price: "675.000"
					}
				],
				ads: {
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/6/6/636638812628409464_phukiengiam-248x248.jpg",
					link: ""
				}
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
	padding: 15px 10px 10px 35px;
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
