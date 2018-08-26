import convertSlug from '../../helpers/converts_slug'

const crawlAdditional = ($) => {
    let general = {}
    general.filter = []
    general.carousel = []
    general.brand = []
    general.typeProduct = $('.fs-ctelist .fs-ctetit').text().trim()
    general.typeSlug =  convertSlug(general.typeProduct)
    
    $('.fs-ctelist .fs-cteul li').each(function(){
       let item = {}
        item.img =  $(this).find('img').attr('data-original')
        item.price =  $(this).find('img').attr('alt')
        if(item.price)item.slug = convertSlug(item.price)
        return general.filter.push(item)
    })

    $('body > section > div > div.fs-ctbn > div .item').each(function(){
       let item = {}
       item.img = $(this).find('img').attr("data-src-retina")
       item.title = $(this).find('img').attr("title")
       item.slug = convertSlug(item.title)
       return general.carousel.push(item)
    })

    $('.fs-ctbrand .item img').each(function(){
        let item = {}
        item.img = $(this).attr("data-original")
        item.title = $(this).attr("alt")
        item.slug = convertSlug(item.title)
        return general.brand.push(item)
    })
    return general
}


module.exports = {crawlAdditional}