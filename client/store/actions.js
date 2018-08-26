import convertPrice from '@/helpers/converts_price'

export default {
  getDataByHome({ commit }, data){
    commit("getDataByHome", data)
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
  }
}
