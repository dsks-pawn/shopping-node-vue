<template>
  <div>
	  <TopBar/>
	  <Menu/>
    	<nuxt/>
		<Footer/>
  </div>
</template>

<script>
import TopBar from "~/components/layout/TopBar.vue"
import Menu from "~/components/layout/Menu.vue"

import Footer from "~/components/layout/Footer.vue"

export default {
	components: {
		TopBar,
		Menu,
		Footer
	}
}
</script>

<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
a:focus {
	outline: 0px solid;
}
img {
	max-width: 100%;
	height: auto;
}
body {
	background-color: #f3f3f3;
}
.breadcrumb {
	background-color: #f3f3f3;
	margin-bottom: 0px;
}
.fa-chevron-circle-right {
	position: absolute;
	top: 15%;
	transform: translateY(-50%);
	right: 0px;
	cursor: pointer;
	font-size: 35px;
	opacity: 0;
	transition: 0.5s;
	color: #bbbbbb;
}
.fa-chevron-circle-left {
	position: absolute;
	top: 15%;
	transform: translateY(-50%);
	left: 0px;
	cursor: pointer;
	font-size: 35px;
	opacity: 0;
	transition: 0.5s;
	color: #bbbbbb;
}
.icon_block:hover .fa-chevron-circle-left {
	left: 20px;
	opacity: 1;
}
.icon_block:hover .fa-chevron-circle-right {
	right: 20px;
	opacity: 1;
}
.el-rate__icon {
	font-size: 13px;
	margin-right: 2px;
}
.el-rate__text {
	font-size: 12px;
	padding-left: 6px;
}
.el-checkbox__label {
	white-space: pre-line;
	font-size: 13px;
}
.el-input__inner {
	padding: 0px !important;
}
</style>

