import Api from "@/api/Api"

export default {
  getDataByDb() {
    return Api().get("/home/information-db")
  },
  getDataByFpt() {
    return Api().get("/home/information-fpt")
  }
}
