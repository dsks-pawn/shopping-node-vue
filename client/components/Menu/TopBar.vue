<template>
    <div>
        <div class="header-area">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="user-menu">
                        <ul>
                            <li><a href="#"><i class="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i class="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i class="fa fa-user"></i> Checkout</a></li>
                            <li><a href="#"><i class="fa fa-user"></i> Login</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="header-right">
                        <ul class="list-unstyled list-inline">
                            <li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">currency :</span><span class="value">USD </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">language :</span><span class="value">English </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div class="site-branding-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="logo">
                        <h1><a href="./"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAApVBMVEX///9BuIM1SV47gHDBx83F6dnD2NM2UWE1TF9MvIo3YGb3/Po7fm/U49/2/Pk2TmA5b2o3WGNfl4o6dm3t8/I4Zmg5ammAz6xxo5fk7evg8+s/pX02VGJ3zKbP7d89lXey4sw3W2Q8iHNlxpuuysOPtq1Ar4BKinuU17k5c2x/rKG81M5ZwZOh28Gcv7c+nnrCz9BqnpI9kXbM7N275dKYvbRUkIKzQZGJAAACKklEQVRoge2Xa1PaQBSGPWeLApHgnUoFtbQVFeoN+f8/rUlgy9nkZJu9pOM45/mYDzyTyTP7Lnt7giAIgiAIwgcjmf8HyRLeWneMezBrXTICgJuWHdPMAb20Xcksl0C7334FG8b04VlcR7rYSibUsY5rmYOms3v4oH7GdGT5ahaJfjhQSl1GlExgx1I/fMkkX+M53ojjb8aPKmc/mmRGJTAqniXrQnISy3EDJkXG72rDjziOtFeS5EfY5dah7uJkPIcyqzxfTZSMxxUHLNKB2jGIIJlUJbA8IZKXcEeHccDrIZGox1BHsmAcv676VLJO/v07VpbcixwinlLL7zDHWTnf4kWGiMdUEpjxiHuRI8w4opaHEMeUczzlDjwwvn1IxjNO0i8keE4lARmvOMf3jQO7cTJO+Xy3EjQyvvPNuC5fjZHxu59jzOX7rbuTXFGJ5xKz+V4gITxjNt9r6sCh8e19lpjN99aQmBl7LHF5c418NV3j2zsvcWVzi3wPShK8DTrCqpubcVp2IN5Ti+MSM5tr5hsjY25z4bzqQLygEqcLJbu515zDP2N2c+GYlaDvErOHluIdpSOsccZ8vsM6iV/GbL73dQ6/jNl8n+odXkvM5tu3SMyMGy0xu7mvNkcp4wZL7JSvxjVjt3w1bhdKdnPr89W4XSjrr4x2XJbYcmW045Kx7cpop/kSs5trz1djXihtR9i0w/D8pRHP+4QY/yMFQRAEQRA+FX8A4QwoVtGJW+wAAAAASUVORK5CYII="></a></h1>
                    </div>
                </div>
                
                <div class="col-sm-6">
                    <div class="shopping-item">
                        <a href="cart.html">Cart - <span class="cart-amunt">$100</span> <i class="fa fa-shopping-cart"></i> <span class="product-count">5</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {}
</script>
<style scoped>
.header-area {
	background: none repeat scroll 0 0 #f4f4f4;
}
.header-area a {
	color: #888;
}
.user-menu ul {
	list-style: outside none none;
	margin: 0;
	padding: 0;
}
.user-menu li {
	display: inline-block;
}
.user-menu li a {
	display: block;
	font-size: 13px;
	margin-right: 5px;
	padding: 10px;
}
.user-menu li a i.fa {
	margin-right: 5px;
}
.header-right ul.list-inline {
	margin: 0;
	text-align: right;
}
.header-right ul.list-inline li a {
	display: block;
	padding: 9px;
}
.header-right ul.list-inline li ul a {
	padding: 5px 15px;
}
.header-right ul.list-inline li ul {
	border: medium none;
	border-radius: 0;
	left: 50%;
	margin-left: -50px;
	min-width: 100px;
	text-align: center;
}

.logo h1 {
	font-size: 40px;
	margin: 30px 0;
	font-weight: 400;
}
.logo h1 a {
	color: #999;
}
.logo h1 a:hover {
	text-decoration: none;
	opacity: 0.7;
}
.logo h1 a span {
	color: #5a88ca;
}
.shopping-item {
	border: 1px solid #ddd;
	float: right;
	font-size: 18px;
	margin-top: 40px;
	padding: 10px;
	position: relative;
}
.shopping-item a {
	color: #666;
}
.cart-amunt {
	color: #5a88ca;
	font-weight: 700;
}
.product-count {
	background: none repeat scroll 0 0 #5a88ca;
	border-radius: 50%;
	color: #fff;
	display: inline-block;
	font-size: 10px;
	height: 20px;
	padding-top: 2px;
	position: absolute;
	right: -10px;
	text-align: center;
	top: -10px;
	width: 20px;
}
.shopping-item i.fa {
	margin-left: 15px;
}
.shopping-item:hover {
	background: none repeat scroll 0 0 #5a88ca;
	border-color: #5a88ca;
}
.shopping-item:hover a {
	color: #fff;
	text-decoration: none;
}
.shopping-item:hover .cart-amunt {
	color: #fff;
}
.shopping-item:hover .product-count {
	background: none repeat scroll 0 0 #000;
}
</style>