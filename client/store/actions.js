export default {
  getItemsWithLimit({ commit }, data) {
    commit("getItemsWithLimit", data)
  },
  getBrandsWithLimit({ commit }, data) {
    commit("getBrandsWithLimit", data)
  },
  getDataByHome({ commit }, data){
    commit("getDataByHome", data)
  }
}
