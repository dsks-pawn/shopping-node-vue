<template>
   <div class="navbar-menu">
    <nav class="navbar navbar-expand-lg navbar-dark container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
        aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul class="navbar-nav mr-auto" style="display:flex">
            <li class="nav-item dropdown mega-dropdown button-hover1">
                <a class="nav-link" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-mobile fa-2x"></i> ĐIỆN THOẠI</a>
                 <div class="dropdown-menu mega-menu v-2 row z-depth-1 block1" aria-labelledby="navbarDropdownMenuLink1">
                        <el-row>
                            <el-col :xs="8" :sm="6" :md="8" class=" padding_left" >
                                <h6 class="text-uppercase font-weight-bold pd">Hãng sản xuất</h6>
                                    <el-row >
                                        <el-col class="link-black" :xs="8" :sm="8" :md="8">
                                            <nuxt-link to="">Apple(Iphone)</nuxt-link><br>
                                            <nuxt-link to="">Huawei</nuxt-link><br>
                                            <nuxt-link to="">Asus</nuxt-link><br>
                                            <nuxt-link to="">Wiko</nuxt-link><br>
                                            <nuxt-link to="">MEIZU</nuxt-link><br>
                                            <nuxt-link to="">Xiaomi</nuxt-link><br>
                                        </el-col>
                                    <el-col :xs="8" :sm="8" :md="8">
                                             <nuxt-link to="">Samsung</nuxt-link><br>
                                            <nuxt-link to="">Nokia</nuxt-link><br>
                                            <nuxt-link to="">Sony</nuxt-link><br>
                                            <nuxt-link to="">Mobiistart</nuxt-link><br>
                                            <nuxt-link to="">Intel</nuxt-link><br>
                                            <nuxt-link to="">HONOR</nuxt-link><br>
                                    </el-col>
                                    <el-col :xs="8" :sm="8" :md="8">
                                             <nuxt-link to="">OPPO</nuxt-link><br>
                                            <nuxt-link to="">Vivo</nuxt-link><br>
                                            <nuxt-link to="">Masstel</nuxt-link><br>
                                            <nuxt-link to="">Philips</nuxt-link><br>
                                            <nuxt-link to="">Tecnos</nuxt-link><br>
                                    </el-col>
                                    </el-row>
                            </el-col>
                            <el-col :xs="4" :sm="6" :md="4" class="vertical padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Mức giá</h6>
                                 <el-row >
                                <el-col :span="24">
                                             <nuxt-link to="">Dưới 1 triệu</nuxt-link><br>
                                            <nuxt-link to="">Từ 1 đến 3 triệu</nuxt-link><br>
                                            <nuxt-link to="">Từ 3 đến 6 triệu</nuxt-link><br>
                                            <nuxt-link to="">Từ 6 đến 10 triệu</nuxt-link><br>
                                            <nuxt-link to="">Từ 10 đến 15 triệu</nuxt-link><br>
                                            <nuxt-link to="">Trên 15 triệu</nuxt-link><br>
                                    </el-col>
                                 </el-row>
                            </el-col>
                            <el-col :xs="4" :sm="6" :md="7" class="padding_left">
                                <h6 class="text-uppercase font-weight-bold pd">Bán chạy nhất</h6>
                                 <el-row >
                                    <el-col :span="24">
                                        <div class="product_menu">
                                                <div class="product_images">
                                                    <img src="//cdn.fptshop.com.vn/Uploads/Originals/2018/7/19/636676205014398728_huawei-nova-3i-mo-ta-1.jpg" alt="">
                                                </div>
                                                <div >
                                                    <h6 class="title_product">Xiaomi Redmi Note 5 32GB</h6>
                                                    <p class="price">4.799.000 ₫</p>
                                                </div>
                                         </div>
                                         <div class="product_menu">
                                                <div class="product_images">
                                                    <img src="//cdn.fptshop.com.vn/Uploads/Originals/2018/7/19/636676205014398728_huawei-nova-3i-mo-ta-1.jpg" alt="">
                                                </div>
                                                <div>
                                                    <h6 class="title_product">OPPO F7</h6>
                                                    <p class="price">7.990.000 ₫</p>
                                                </div>
                                         </div>
                                         <div><nuxt-link style="color: #337ab7 !important;" to=""><b>Xem bảng xếp hạng điện thoại</b></nuxt-link></div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="8" :sm="6" :md="5">
                                <img src="//cdn.fptshop.com.vn/Uploads/Originals/2018/8/4/636689822673516144_H4.png" alt="">
                            </el-col>
                        </el-row>



                </div>
            </li>
            <li class="nav-item dropdown mega-dropdown button-hover2">
                <a class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-laptop fa-2x"></i> LAPTOP</a>
                <div class="dropdown-menu mega-menu block2 v-2 row z-depth-1 special-color block1" aria-labelledby="navbarDropdownMenuLink2">
                    <div class="row mx-md-4 mx-1">
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-5 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text"></h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item mb-0" href="">Lorem ipsum dolor sit amet</a></li>
                                <li class=""><a class="menu-item" href="">Consectetur adipiscing elit</a></li>
                                <li class=""><a class="menu-item" href="">Sed do eiusmod tempor incididunt</a></li>
                                <li class=""><a class="menu-item" href="">Ut labore et dolore magna</a></li>
                                <li class=""><a class="menu-item" href="">Ut enim ad minim veniam</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-md-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Lorem ipsum dolor sit</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 20</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Ut labore et dolore magna</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 25</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-5">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="">Totam rem aperiam eaque</a></li>
                                <li class=""><a class="menu-item" href="">Beatae vitae dicta sun</a></li>
                                <li class=""><a class="menu-item" href="">Quae ab illo inventore veritatis et quasi architecto</a></li>
                                <li class=""><a class="menu-item" href="">Nemo enim ipsam voluptatem</a></li>
                                <li class=""><a class="menu-item" href="">Neque porro quisquam est</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
             <li class="nav-item dropdown mega-dropdown button-hover3">
                <a class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-apple fa-2x"></i> APPLE</a>
                 <div class="dropdown-menu mega-menu v-2 row z-depth-1 special-color block3" aria-labelledby="navbarDropdownMenuLink3">
                    <div class="row mx-md-4 mx-1">
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-5 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item mb-0" href="">Lorem ipsum dolor sit amet</a></li>
                                <li class=""><a class="menu-item" href="">Consectetur adipiscing elit</a></li>
                                <li class=""><a class="menu-item" href="">Sed do eiusmod tempor incididunt</a></li>
                                <li class=""><a class="menu-item" href="">Ut labore et dolore magna</a></li>
                                <li class=""><a class="menu-item" href="">Ut enim ad minim veniam</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-md-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Lorem ipsum dolor sit</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 20</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Ut labore et dolore magna</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 25</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-5">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="">Totam rem aperiam eaque</a></li>
                                <li class=""><a class="menu-item" href="">Beatae vitae dicta sun</a></li>
                                <li class=""><a class="menu-item" href="">Quae ab illo inventore veritatis et quasi architecto</a></li>
                                <li class=""><a class="menu-item" href="">Nemo enim ipsam voluptatem</a></li>
                                <li class=""><a class="menu-item" href="">Neque porro quisquam est</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
             <li class="nav-item dropdown mega-dropdown button-hover4">
                <a class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-tablet fa-2x"></i> TABLET</a>
                 <div class="dropdown-menu mega-menu v-2 row z-depth-1 special-color block4" aria-labelledby="navbarDropdownMenuLink4">
                    <div class="row mx-md-4 mx-1">
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-5 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item mb-0" href="">Lorem ipsum dolor sit amet</a></li>
                                <li class=""><a class="menu-item" href="">Consectetur adipiscing elit</a></li>
                                <li class=""><a class="menu-item" href="">Sed do eiusmod tempor incididunt</a></li>
                                <li class=""><a class="menu-item" href="">Ut labore et dolore magna</a></li>
                                <li class=""><a class="menu-item" href="">Ut enim ad minim veniam</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-md-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Lorem ipsum dolor sit</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 20</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Ut labore et dolore magna</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 25</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-5">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="">Totam rem aperiam eaque</a></li>
                                <li class=""><a class="menu-item" href="">Beatae vitae dicta sun</a></li>
                                <li class=""><a class="menu-item" href="">Quae ab illo inventore veritatis et quasi architecto</a></li>
                                <li class=""><a class="menu-item" href="">Nemo enim ipsam voluptatem</a></li>
                                <li class=""><a class="menu-item" href="">Neque porro quisquam est</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
             <li class="nav-item dropdown mega-dropdown button-hover5">
                <a class="nav-link text-uppercase no-caret" id="navbarDropdownMenuLink5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-headphones fa-2x"></i> PHỤ KIỆN</a>
                <div class="dropdown-menu mega-menu v-2 row z-depth-1 special-color block5" aria-labelledby="navbarDropdownMenuLink5">
                    <div class="row mx-md-4 mx-1">
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-5 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item mb-0" href="">Lorem ipsum dolor sit amet</a></li>
                                <li class=""><a class="menu-item" href="">Consectetur adipiscing elit</a></li>
                                <li class=""><a class="menu-item" href="">Sed do eiusmod tempor incididunt</a></li>
                                <li class=""><a class="menu-item" href="">Ut labore et dolore magna</a></li>
                                <li class=""><a class="menu-item" href="">Ut enim ad minim veniam</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-md-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Lorem ipsum dolor sit</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 20</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-4">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                            <!--Featured image-->
                            <div class="view overlay mb-3 z-depth-1">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight flex-center">
                                    <p></p>
                                </div>
                            </div>
                            <h4 class="mb-2"><a class="news-title-2 pl-0" href="">Ut labore et dolore magna</a></h4>
                            <p class="font-small text-uppercase white-text"><i class="fa fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fa fa-comments-o px-1" aria-hidden="true"></i> 25</p>
                        </div>
                        <div class="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-5">
                            <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="">Totam rem aperiam eaque</a></li>
                                <li class=""><a class="menu-item" href="">Beatae vitae dicta sun</a></li>
                                <li class=""><a class="menu-item" href="">Quae ab illo inventore veritatis et quasi architecto</a></li>
                                <li class=""><a class="menu-item" href="">Nemo enim ipsam voluptatem</a></li>
                                <li class=""><a class="menu-item" href="">Neque porro quisquam est</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
             <li class="nav-item dropdown mega-dropdown">
                <a class="nav-link text-uppercase no-caret"><i class="fa fa-undo fa-2x"></i> MÁY ĐỔI TRẢ</a>
            </li>
             <li class="nav-item dropdown mega-dropdown">
                <el-dropdown>
                     <a class="nav-link text-uppercase no-caret el-icon-arrow-down el-icon--right" ><i class="fa fa-credit-card fa-2x"></i> SIM & THẺ</a>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Sim</el-dropdown-item>
                    <el-dropdown-item>Thẻ cào</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </li>
             <li class="nav-item dropdown mega-dropdown">
                 <el-dropdown>
                      <a class="nav-link text-uppercase no-caret"><i class="fa fa-bullhorn fa-2x"></i> KHUYẾN MÃI</a>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Thông tin trao thưởng</el-dropdown-item>
                    <el-dropdown-item>Tất cả khyến mại</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li class="nav-item dropdown mega-dropdown">
                <a class="nav-link text-uppercase no-caret" ><i class="fa fa-child fa-2x"></i> TRẢ GÓP 0%</a>
            </li>
        </ul>
    </div>
</nav>
</div>
</template>

<style scoped>
.title_product {
	font-weight: bold;
}
.price {
	color: #d0021b;
	font-weight: bold;
}
.pd {
	padding-top: 10px;
	padding-bottom: 10px;
	color: black;
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
}
.product_images {
	max-width: 50%;
}

.navbar .dropdown-menu a {
	line-height: 2.5em;
}
.navbar .dropdown-menu a:hover {
	color: black !important;
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
</style>
