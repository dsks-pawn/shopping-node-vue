export default {
  getDataByHome(state , data){
    state.HOME_DATA = data
  },
  getPhonesAll(state, data){
    state.PHONES = data
  },
  getTabletsAll(state, data){
    state.TABLETS = data
  },
  getLaptopsAll(state, data){
    state.LAPTOPS = data
  },  
  getDataAdditionalPhone(state , data){
    state.ADDITIONAL_PHONE = data
  },
  getDataAdditionalLaptop(state , data){
    state.ADDITIONAL_LAPTOP = data
  },
  getProductLimit(state , data){
    state.PRODUCTS_LIMIT = data
  },
  getProductDetail(state, data){
    state.PRODUCT_DETAIL = data
  },
  laptopSlideFilter(state, data){
    state.LAPTOP_FILTER = data
  }
}
