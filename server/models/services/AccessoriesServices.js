import convertSlug from '../../helpers/converts_slug'
import convertPrice from '../../helpers/converts_price'

const crawlAccessories = ($, category) => {
    let products = []
    $('.p2-lprod-fbox').each(function(){
        let product = {}
         product.imagesCarousel = []
         product.name = $(this).find('.pk-infosp-right .pk-tt-insp').text().trim()
         product.slug = convertSlug(product.name)
         product.category = category
         product.linkFpt = `https://fptshop.com.vn` + $(this).find('.pk-infosp-left a').attr('href')
         product.avatar = $(this).find('.pk-infosp-left img').attr('src')
         product.currPrice = convertPrice($(this).find('.pk-infosp-right h3').first().text().trim())
         product.sale = []
         $(this).find('ul li').each(function(){
           product.sale.push($(this).text().trim())
         })
         return products.push(product)
     })
     return products
}

module.exports = {crawlAccessories}