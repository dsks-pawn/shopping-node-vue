<template>
    <div class="bag fixed-top" v-bind:class="{ show_menu: showMenu }" >
			   <nav class="container mb-1 navbar navbar-expand-lg navbar-dark">
				<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
                <div class=" navbar-collapse collapse" id="navbarSupportedContent" style="">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-for="item of menu" :key="item.id" v-bind:class="{ active: item.isActive }" @click="actionMenu(item)">
                            <a class="nav-link waves-effect waves-light" v-scroll-to="item.link">{{item.title}}</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto nav-flex-icons">
                        <li class="nav-item">
                            <a  class="nav-link waves-effect waves-light advisory">
                                <div>
									<i class="fa fa-phone fa-2x"></i>
								</div>
								<div class="advisory_block">
									<span class="advisory_title">TƯ VẤN MIỄN PHÍ</span><br>
									<span class="advisory_number">1800 6601</span>
								</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="" class="nav-link waves-effect waves-light button_buy">
                                Mua ngay
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </nav> 
    </div>
</template>
<style scoped>
.bag {
	display: none;
	background: #313131;
}
.show_menu {
	display: block;
}
.navbar {
	padding: 0;
	width: 100%;
	-webkit-box-shadow: none !important;
	box-shadow: none !important;
}
.active {
	border-bottom: 3px solid #ff001f;
}
.advisory {
	display: flex !important;
	padding-top: 0px;
	padding-bottom: 0px;
}
.advisory i {
	padding-top: 25%;
}
.advisory_block {
	display: inline;
	padding-left: 5px;
}
.advisory_title {
	font-size: 13px;
}
.advisory_number {
	display: block;
	font-size: 21px;
	font-weight: bold;
	color: #ff9f00;
	white-space: nowrap;
	line-height: 1em;
}
.button_buy {
	padding: 5px 20px !important;
	border-radius: 2px;
	background: #d0021b;
	margin-top: 5%;
}
</style>
<script>
export default {
	data() {
		return {
			showMenu: false,
			menu: [
				{
					title: "Đặc điểm nổi bật",
					link: { element: "#characteristics", easing: "linear" },
					isActive: true
				},
				{
					title: "Đánh giá & Nhận xét",
					link: { element: "#evaluate", easing: "linear" },
					isActive: false
				},
				{
					title: "Hỏi & Đáp",
					link: { element: "#ask", easing: "linear" },
					isActive: false
				},
				{
					title: "Hình Ảnh",
					link: { element: "#gallery", easing: "linear" },
					isActive: false
				},
				{
					title: "Phụ kiện",
					link: { element: "#accessories", easing: "linear" },
					isActive: false
				},
				{
					title: "Tin Tức",
					link: { element: "#news", easing: "linear" },
					isActive: false
				}
			]
		}
	},
	methods: {
		actionMenu(item) {
			this.menu.forEach(item => {
				return (item.isActive = false)
			})
			item.isActive = true
		},
		handleScroll() {
			let navbar = document.getElementById("navbar_hidden")
			let sticky = navbar.getBoundingClientRect().top
			sticky < 0 ? (this.showMenu = true) : (this.showMenu = false)
		}
	},
	beforeMount() {
		window.addEventListener("scroll", this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll)
	}
}
</script>
