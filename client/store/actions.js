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
  async getProductLimit({ commit }, data){
    await convertPrice(data)
    commit("getProductLimit", data)
  },
  async getProductDetail({ commit }, data){
    await convertPrice(data)
    commit("getProductDetail", data)
  },
  async laptopSlideFilter({ commit }, data){
    await convertPrice(data.fptShopSelected)
    commit("laptopSlideFilter", data)
  },
}
