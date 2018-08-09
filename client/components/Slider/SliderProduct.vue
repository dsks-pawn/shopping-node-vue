<template>
 <no-ssr>
    <!-- <div>
        
        <carousel paginationColor="#fed700" paginationActiveColor="red" :paginationPadding="10" :paginationEnabled="false" :perPageCustom="[[411, 2], [768, 3], [1024, 5]]" :autoplay="true"  :minSwipeDistance="10" :perPage="6" >
                <slide v-for="co in count" :key="co">
               
                <div class="card card-cascade narrower">
                    <div class="view view-cascade overlay">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap">
                        <a>
                        <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div class="card-body card-body-cascade">
                        <h5 class="pink-text pb-2 pt-1"><i class="fa fa-cutlery"></i> Culinary</h5>
                        <h4 class="card-title">Cheat day inspirations</h4>
                        <p class="card-text">Điện thoại giá rẻ</p>
                        <a class="btn blue-gradient btn-rounded">Mua sản phẩm</a>
                    </div>
            </div>
            </slide>
        </carousel>
    </div> -->
     </no-ssr>
</template>
<script>
import Items from "@/api/Items"

import { throws } from "assert"

export default {
	async mounted() {
		try {
			let dataItems = await Items.getItemsWithLimit()
			if (dataItems)
				await this.$store.dispatch("getItemsWithLimit", dataItems.data)
		} catch (error) {
			throw error
		}
	},
	data() {
		return {
			currentDate: 20,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
		}
	}
}
</script>
