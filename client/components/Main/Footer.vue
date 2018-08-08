<template>
     <footer>
         <div class="footer-top-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="footer-about-us">
                        <h2>best<span>Smartphone</span></h2>
                        <p> - Hàng hóa, dịch vụ kinh doanh tại cửa hàng phù hợp với các mặt hàng đã đăng ký trong giấy chứng nhận đăng ký kinh doanh và không thuộc danh mục pháp luật cấm kinh doanh.</p>
                        <p> - Không kinh doanh hàng nhái, hàng lậu, hàng giả, hàng không rõ nguồn gốc.</p>
                        <p> - Hàng hóa có bảo hành giấy bảo hành ghi rõ thời gian bảo hành và địa điểm bảo hành. Tất cả hàng hóa dịch vụ kinh doanh tại cửa hàng phải có thương mại, giá bán niêm yết tại địa điểm kinh doanh bằng VNĐ.</p>
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
                        <h2 class="footer-wid-title">Hỗ trợ </h2>
                        <ul>
                            <li><a href="#">Tìm hiểu về mua trả góp</a></li>
                            <li><a href="#">Chính sách bảo hành</a></li>
                            <li><a href="#">Chính sách đổi trả</a></li>
                            <li><a href="#">Chăm sóc khách hàng</a></li>
                            <li><a href="#">Giao hàng & Thanh toán</a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-menu">
                        <h2 class="footer-wid-title">Về chúng tôi</h2>
                        <ul>
                            <li><a href="#">Giới thiệu cửa hàng</a></li>
                            <li><a href="#">Tuyển dụng</a></li>
                            <li><a href="#">Điều khoản</a></li>
                            <li><a href="#">Chính hãng</a></li>
                            <li><a href="#">Flash Sales</a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-newsletter">
                        <h2 class="footer-wid-title">Newsletter</h2>
                        <p>Đăng ký để nhận tin tức mới nhất của chúng tôi về các ưu đãi độc quyền ngay trong hộp thư đến của mình mà bạn sẽ không tìm thấy ở bất kỳ nơi nào khác!</p>
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
                        <p>&copy; 2018 Best Smartphone. All Rights Reserved. <a href="#" target="_blank">bestsmartphone.com</a></p>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="footer-card-icon">
                        <i class="fa fa-cc-discover icon-pay"></i>
                        <i class="fa fa-cc-mastercard icon-pay"></i>
                        <i class="fa fa-cc-paypal icon-pay"></i>
                        <i class="fa fa-cc-visa icon-pay"></i>
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
	padding-bottom: 20px;
}
.footer-card-icon {
	font-size: 35px;
	text-align: right;
}

.copyright > p {
	margin: 10px 0 0;
}
.icon-pay {
    padding-left: 5px;
}
</style>