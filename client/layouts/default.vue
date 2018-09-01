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
.el-input-group__append {
	padding: 0 18px;
}
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}

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
a {
	text-decoration: none;
}
a:focus {
	outline: 0px solid;
}
body,
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: normal;
}
textarea {
	width: 100%;
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
	color: #3f3f3f;
}
.el-progress-bar {
	display: inline-block;
}
.post_detail .dgctpro {
	padding-top: 30px;
	padding-bottom: 30px;
	text-align: center;
	font-weight: bold;
}
.post_detail h3 {
	font-size: 23px;
	margin-bottom: 0rem;
}
.post_detail strong {
	font-weight: bold;
	font-size: 20px;
}
.post_detail p {
	font-size: 14px;
	margin-bottom: 0rem;
}
.post_detail h4 {
	margin-bottom: 0rem;
}
.post_detail h5 {
	margin-bottom: 0rem;
}
.sale_main {
	padding: 15px 5px 5px 5px;
	border: 1px dashed #d7d7d7;
}
.sale_main p {
	text-transform: uppercase;
	font-size: 14px;
	margin-bottom: 0px;
}
.sale_main li {
	text-transform: uppercase;
	font-size: 12px;
	margin-bottom: 0px;
}
.sale_main ul {
	margin-bottom: 0.7em;
}
.sale_main p:first-child {
	font-style: italic;
	color: #4a4a4a;
	margin-bottom: 5px;
}
.titkms {
	margin-bottom: 5px;
	padding: 2px 5px;
	font-size: 12px;
	color: #fff;
	background: #f5a623;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	display: block;
	max-width: max-content;
}
</style>

