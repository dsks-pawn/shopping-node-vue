export default products => {
  if (products.length > 1) {
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
  } else {
    if (products.currPrice == 0) {
      products.currPrice = ""
    } else {
      products.currPrice = products.currPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
    }
    if (products.oldPrice == 0) {
      products.oldPrice = ""
    } else {
      products.oldPrice = products.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
    }
  }
  return products
}