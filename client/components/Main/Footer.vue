<template>
     <footer>
         <div class="footer-top-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="footer-about-us">
                        <h2>u<span>Stora</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                        <div class="footer-social">
                            <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
                            <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-menu">
                        <h2 class="footer-wid-title">User Navigation </h2>
                        <ul>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Order history</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Vendor contact</a></li>
                            <li><a href="#">Front page</a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-menu">
                        <h2 class="footer-wid-title">Categories</h2>
                        <ul>
                            <li><a href="#">Mobile Phone</a></li>
                            <li><a href="#">Home accesseries</a></li>
                            <li><a href="#">LED TV</a></li>
                            <li><a href="#">Computer</a></li>
                            <li><a href="#">Gadets</a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-newsletter">
                        <h2 class="footer-wid-title">Newsletter</h2>
                        <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                        <div class="newsletter-form">
                            <form action="#">
                                <input type="email" placeholder="Type your email">
                                <input type="submit" value="Subscribe">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
    <div class="footer-bottom-area">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="copyright">
                        <p>&copy; 2015 uCommerce. All Rights Reserved. <a href="http://www.freshdesignweb.com" target="_blank">freshDesignweb.com</a></p>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="footer-card-icon">
                        <i class="fa fa-cc-discover"></i>
                        <i class="fa fa-cc-mastercard"></i>
                        <i class="fa fa-cc-paypal"></i>
                        <i class="fa fa-cc-visa"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </footer>
</template>
<style scoped>
.footer-top-area .zigzag-bottom {
	background: #f4f4f4;
}
.footer-top-area {
	background: none repeat scroll 0 0 #333;
	color: #999;
	padding: 35px 0 180px;
}

.footer-bottom-area {
	background: #000;
	color: #fff;
}
.footer-about-us span {
	color: #5a88ca;
}
.footer-wid-title {
	font-family: raleway;
	font-size: 30px;
	font-weight: 100;
	color: #fff;
}

.footer-about-us h2 {
	font-weight: 200;
}
.footer-menu ul {
	list-style: outside none none;
	margin: 0;
	padding: 0;
}
.footer-menu ul li {
	border-bottom: 1px dashed #555;
	padding: 5px 0;
}
.footer-menu a {
	display: block;
	padding: 5px 0;
	color: #999;
}

.footer-social a {
	background: none repeat scroll 0 0 #5a88ca;
	color: #fff;
	display: inline-block;
	font-size: 20px;
	height: 40px;
	margin-bottom: 10px;
	margin-right: 10px;
	padding-top: 5px;
	text-align: center;
	width: 40px;
	border: 1px solid #5a88ca;
}

.footer-social a:hover {
	background-color: #222;
	border-color: #666;
}

.footer-social {
	margin-top: 20px;
}

.newsletter-form input[type="email"] {
	background: none repeat scroll 0 0 #fff;
	border: medium none;
	margin-bottom: 10px;
	padding: 10px;
	width: 100%;
}
.newsletter-form input[type="submit"] {
	background: none repeat scroll 0 0 #5a88ca;
	border: medium none;
	color: #fff;
	display: inline-block;
	font-size: 18px;
	padding: 7px 20px;
	text-transform: uppercase;
	border: 1px solid #5a88ca;
}
.newsletter-form input[type="submit"]:hover {
	background: #222;
	border-color: #666;
}
.newsletter-form {
	margin-top: 25px;
}
a {
	color: #5a88ca;
}
a:hover,
a:focus {
	color: #17a78b;
}
.footer-bottom-area {
	background: none repeat scroll 0 0 #000;
	color: #fff;
	padding-bottom: 40px;
}
.footer-card-icon {
  font-size: 30px;
  text-align: right;
}

.copyright > p {
  margin: 10px 0 0;
}
</style>
