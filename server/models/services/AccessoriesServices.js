import convertString from '../../helpers/converts_slug'

const crawlAccessories = ($, category) => {
    let products = []
    $('.p2-lprod-fbox').each(function(){
        let product = {}
         product.code = " "
         product.images = []
         product.imagesCarousel = []
         product.rate = {}
         product.comments = {}
         product.specifications = {}

         product.name = $(this).find('.pk-infosp-right .pk-tt-insp').text().trim()
         product.slug = convertString(product.name)
         product.category = category
         product.link = `https://fptshop.com.vn` + $(this).find('.pk-infosp-left a').attr('href')
         product.avatar = $(this).find('.pk-infosp-left img').attr('src')
         product.currPrice = $(this).find('.pk-infosp-right h3').first().text().trim()
         if(!product.currPrice) product.currPrice = ' '
         product.sale = []
         $(this).find('ul li').each(function(){
           product.sale.push($(this).text().trim())
         })
         return products.push(product)
     })
     return products
}

module.exports = {crawlAccessories}