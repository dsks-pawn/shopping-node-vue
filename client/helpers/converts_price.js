export default products => {
  products.filter(product => {
    if (product.currPrice == 0) {
      product.currPrice = ""
    } else {
        product.currPrice = product.currPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
    }
    if (product.oldPrice == 0) {
      product.oldPrice = ""
    } else {
        product.oldPrice = product.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
    }
  })
  return products
}