import Api from "@/api/Api"

export default {
 getDataAdditionalPhoneDb() {
    return Api().get("/additional/phone-db")
  },
  getDataAdditionalPhoneFpt() {
    return Api().get("/additional/phone-fpt")
  },
  getDataAdditionalLaptopDb() {
    return Api().get("/additional/laptop-db")
  },
  getDataAdditionalLaptopFpt() {
    return Api().get("/additional/laptop-fpt")
  }
}
