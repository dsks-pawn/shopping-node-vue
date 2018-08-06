<template>
  <div class="mainmenu-area">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div> 
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop page</a></li>
                        <li><a href="single-product.html">Single product</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Others</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.mainmenu-area {
	background: none repeat scroll 0 0 #fbfbfb;
	font-family: "Roboto Condensed", sans-serif;
	text-transform: uppercase;
	width: 100%;
	z-index: 999;
}

.mainmenu-area ul.navbar-nav li a {
	color: #6e6a6a;
	font-size: 14px;
	padding: 20px;
}

.mainmenu-area ul.navbar-nav li:hover a,
.mainmenu-area ul.navbar-nav li.active a {
	background: #5a88ca;
	color: #fff;
}
.mainmenu-area .nav > li > a:focus {
	color: #fff;
}

.slider-area {
	width: 80%;
	position: relative;
	margin: 0 auto;
	padding: 5px;
}
</style>
