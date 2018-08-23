export default {
  getItemsWithLimit(state, data) {
    state.ITEMS_HOT = data
  },
  getBrandsWithLimit(state, data) {
    state.BRANDS = data
  },
  getDataByHome(state , data){
    state.HOME_DATA = data
  }
}
