import Api from "@/api/Api"
export default {
  getProductDetail(keyWord) {
    return Api().post("/detail/item-db", keyWord)
  }
}
