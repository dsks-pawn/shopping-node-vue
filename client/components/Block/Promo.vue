<template>
    <div class="promo-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo promo1">
                        <i class="fa fa-refresh"></i>
                        <p>30 Days return</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo promo2">
                        <i class="fa fa-truck"></i>
                        <p>Free shipping</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo promo3">
                        <i class="fa fa-lock"></i>
                        <p>Secure payments</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo promo4">
                        <i class="fa fa-gift"></i>
                        <p>New products</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.promo-area .zigzag-bottom, .brands-area .zigzag-bottom{background: #f4f4f4}
.single-promo {
    font-size: 25px;
    font-weight: 200;
    padding: 20px 10px;
    text-align: center;
}
.single-promo i {
  font-size: 50px;
}

.single-promo:hover {color: #fff;background: #222;}
.promo1 { background:#5a88ca;}
.promo2 { background:#ffd900;}
.promo3 { background:#fa8072;}
.promo4 { background:#4abebd;}
</style>
