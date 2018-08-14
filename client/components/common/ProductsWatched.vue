<template>
  <no-ssr>
    <div class="phones_block">
      <div class="phones_title">
        <nuxt-link to=""><h5>{{productsViewed.viewed}}</h5></nuxt-link>
        <nuxt-link :to="productsViewed.linkView">
          <small>Xem tất cả</small>
        </nuxt-link>
      </div>
      <carousel class="phones_carousel icon_block" :paginationEnabled="false" :navigationEnabled="true"
                navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>"
                navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>"
                :perPageCustom="[[411, 2], [768, 3], [1024, 5]]" :autoplay="true" :minSwipeDistance="10">
        <slide v-for="product of productsViewed.products" :key="product.id">
          <nuxt-link :to="product.link" class="product_items">
            <img class="product_img" :src="product.img" :alt="product.name" :title="product.name">
            <div class="product_item">
              <div class="item">
                <h6 class="item_title">{{product.name}}</h6>
              </div>
              <p class="item_price">
                {{product.price}}₫
              </p>
            </div>
          </nuxt-link>
        </slide>
      </carousel>
    </div>
  </no-ssr>
</template>
<script>
  export default {
    data() {
      return {
        productsViewed: {
          viewed: "điện thoại vừa xem",
          linkView: "",
          products: [
            {
              name: "Huwei Nova 3i",
              link: "",
              img:
                "//cdn.fptshop.com.vn/Uploads/Thumbs/2018/7/19/636675937265112606_huawei3i-1o.png",
              price: "6.990.000"
            }
          ]
        }
      }
    }
  }
</script>
<style scoped>
  .phones_block {
    margin-top: 15px;
  }

  .phones_title {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 15px;
  }

  .phones_title h5 {
    text-transform: uppercase;
    color: #1f1f1f;
  }

  .phones_carousel {
    background-color: #fff;
    padding-top: 15px;
  }

  .product_items {
    padding-top: 5px;
    padding-left: 5px;
  }

  .product_item {
    background-color: #fff;
    padding: 10px;
  }

  .product_item p {
    margin-bottom: 0.3rem;
  }

  .product_rate {
    padding-left: 12px;
  }

  .product_rate i {
    font-size: 14px !important;
  }

  .item {
    padding-left: 12px;
    display: flex;
    justify-content: space-between;
  }

  .item_title {
    color: #1f1f1f;
    font-size: 15px;
  }

  .item_price {
    padding-left: 12px;
    color: #1f1f1f;
    font-weight: bold;
    font-size: 16px;
  }
</style>
