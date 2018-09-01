import convertPrice from '@/helpers/converts_price'

export default {
  getDataByHome({ commit }, data){
    commit("getDataByHome", data)
  },
  getPhonesAll({ commit }, data){
    commit("getPhonesAll", data)
  },
  getLaptopsAll({ commit }, data){
    commit("getLaptopsAll", data)
  },
  getTabletsAll({ commit }, data){
    commit("getTabletsAll", data)
  },
  getDataAdditionalPhone({ commit }, data){
    commit("getDataAdditionalPhone", data)
  },
  getDataAdditionalLaptop({ commit }, data){
    commit("getDataAdditionalLaptop", data)
  },
  getProductLimit({ commit }, data){
    convertPrice(data)
    commit("getProductLimit", data)
  },
  getProductDetail({ commit }, data){
    convertPrice(data)
    commit("getProductDetail", data)
  },
}
