import Api from "@/api/Api"
export default {
    laptopFptShopSelected() {
        return Api().get("/filter-laptop/product-fpt-shop-selected")
    },
    laptopTwoInOne() {
        return Api().get("/filter-laptop/product-two-in-one")
    },
    laptopGaming() {
        return Api().get("/filter-laptop/product-gaming")
    },
    laptopWindows() {
        return Api().get("/filter-laptop/product-window")
    },
    laptopStudent() {
        return Api().get("/filter-laptop/product-student")
    },
    laptopLight() {
        return Api().get("/filter-laptop/product-light")
    },
    laptopBusiness() {
        return Api().get("/filter-laptop/product-business")
    },
    laptopRam() {
        return Api().get("/filter-laptop/product-ram")
    },
}
