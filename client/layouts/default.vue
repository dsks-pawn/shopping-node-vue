<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
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
</style>

