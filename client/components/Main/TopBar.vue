<template>
    <div>
        <div class="header-area">
        <div class="container">
			<div class="row">
				<div class="col-xs-7 col-md-10">
                    <div class="menu-hint" >
                        <ul>
							<li ><div style="width: 37px"><img  src="https://vignette.wikia.nocookie.net/halofanon/images/f/fc/Wolves-logo-heat-colors.png/revision/latest?cb=20151012083100"></div></li>
                            <li><a href="#"><i class="fa fa-user"></i> Kênh người bán</a></li>
                            <li><a href="#"><i class="fa fa-heart"></i> Tải ứng dụng</a></li>
							<li class="input-search">
									<el-autocomplete style="max-width: 100%; padding-top: 5px"
									popper-class="my-autocomplete"
									v-model="state3"
									:fetch-suggestions="querySearch"
									placeholder="Please input"
									@select="handleSelect">
									<el-button slot="append" icon="el-icon-search"></el-button>
									<template slot-scope="{ item }">
										<div class="value">{{ item.value }}</div>
										<span class="link">{{ item.link }}</span>
									</template>
									</el-autocomplete>
							</li>
                        </ul>
                    </div>
					</div>
					<div class="col-xs-5 col-md-2">
                    <div class="header-right">
                        <ul class="list-unstyled list-inline">
								<li>
								<el-dropdown trigger="click">
								<span class="el-dropdown-link"><i class="fa fa-flag"></i>
									 Language<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item> English</el-dropdown-item>
									<el-dropdown-item> Vietnamese</el-dropdown-item>
								</el-dropdown-menu>
								</el-dropdown>
								</li>
								<li class="login-avatar">
									<el-dropdown trigger="click" class="avatar-user">
										<span class="el-dropdown-link">
											<img  src="https://kenh14cdn.com/2017/img-9151-1487175576278.jpg" alt="avatar">
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item><a href="#"><i class="fa fa-user"></i> Profile</a></el-dropdown-item>
										<el-dropdown-item><a href="cart.html"><i class="fa fa-user"></i> My Cart</a></el-dropdown-item>
										<el-dropdown-item><a href="checkout.html"><i class="fa fa-user"></i> Check out</a></el-dropdown-item>
										<el-dropdown-item><a href="#"><i class="fa fa-user"></i> Sign uot</a></el-dropdown-item>
									</el-dropdown-menu>
									</el-dropdown>
								</li>										
                        </ul>
                    </div>
					</div>
					</div>
		</div>
    </div>
     <div class="site-branding-area">
        <div class="container-fuild text-center">
			<img src="https://ir.ebaystatic.com/cr/v/c1/Phone_Banner.JPG">
        </div>
    </div>
    </div>
</template>

<style scoped>
.el-dropdown-link {
	cursor: pointer;
	color: #409eff;
}
.el-icon-arrow-down {
	font-size: 12px;
}
.demonstration {
	display: block;
	color: #8492a6;
	font-size: 14px;
	margin-bottom: 20px;
}

.header-area {
	background: none repeat scroll 0 0 #f4f4f4;
}
.header-area a {
	color: #888;
}
.menu-hint ul {
	list-style: outside none none;
	margin: 0;
	padding: 0;
}
.menu-hint li {
	display: inline-block;
}
.menu-hint li a {
	display: block;
	font-size: 13px;
	margin-right: 5px;
	padding: 10px;
}
.menu-hint li a i.fa {
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
.login-avatar {
	display: inline;
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
.avatar-user {
	max-width: 28%;
}
.input-search {
	max-width: 100%;
}
.site-branding-area {
	padding-top: 0px;
}
</style>
<script>
export default {
	data() {
		return {
			links: [],
			state1: "",
			state2: "",
			state3: ""
		}
	},
	methods: {
		querySearch(queryString, cb) {
			var links = this.links
			var results = queryString
				? links.filter(this.createFilter(queryString))
				: links
			// call callback function to return suggestions
			cb(results)
		},
		createFilter(queryString) {
			return link => {
				return (
					link.value
						.toLowerCase()
						.indexOf(queryString.toLowerCase()) === 0
				)
			}
		},
		loadAll() {
			return [
				{ value: "vue", link: "https://github.com/vuejs/vue" },
				{
					value: "element",
					link: "https://github.com/ElemeFE/element"
				},
				{
					value: "cooking",
					link: "https://github.com/ElemeFE/cooking"
				},
				{
					value: "mint-ui",
					link: "https://github.com/ElemeFE/mint-ui"
				},
				{ value: "vuex", link: "https://github.com/vuejs/vuex" },
				{
					value: "vue-router",
					link: "https://github.com/vuejs/vue-router"
				},
				{ value: "babel", link: "https://github.com/babel/babel" }
			]
		},
		handleSelect(item) {
			console.log(item)
		}
	},
	mounted() {
		this.links = this.loadAll()
	}
}
</script>