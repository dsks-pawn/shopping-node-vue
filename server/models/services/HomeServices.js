import convertString from '../../helpers/converts_slug'
const crawlMenu = ($) => {
    let menu = {}
    menu.brand = []
    menu.software = []
    menu.productHot = []
    menu.ads = []

    $('.fs-mnul li').each(function(){
        let brand = []
        let software = []
        
        $(this).find('.fs-mntd1 .fs-mnsul3 li').each(function(){
            let item = $(this).find('a').attr('title')
            item.slice(0, item.indexOf("Phần")) > -1 ? software.push(item) : brand.push(item)
        })
        if(brand.length > 0) menu.brand.push(brand)
        if(software.length >0) menu.software.push(software)
    })

    $(".fs-mnsprod li").each(function(){
        let productHot = {}
        productHot.name = $(this).find('.fs-mnspimg img').attr('alt')
        productHot.img = $(this).find('.fs-mnspimg img').attr('src')
        productHot.price = $(this).find('p').text().trim()
        return menu.productHot.push(productHot)
    })
    
    $('.fs-mntd4 a').each(function(){
        let ads = {}
        ads.link = $(this).attr('href')
        ads.name = $(this).attr('title')
        ads.img = $(this).find('img').attr('src')
        return menu.ads.push(ads)
    })
    return menu
}

const crawlNewsWithAds = ($) => {
    let general = {}
    general.carousel = []
    general.ads = {}
    general.news = []

    $('#fowl1 .item').each(function(){
        let slide = {}
        slide.title = $(this).find('img').attr('title')
        slide.link = $(this).find('a').attr('href')
        slide.img =  $(this).find('img').attr('src')
        if(!slide.img) slide.img = $(this).find('img').attr('data-src')
        general.carousel.push(slide)
    })

    general.ads.short = []
    $('.fs-asright .fs-asads li').each(function(){
        let ads = {}
        ads.title = $(this).find('img').attr('alt')
        ads.link = $(this).find('a').attr('href')
        ads.img = $(this).find('img').attr('src')
        general.ads.short.push(ads)
    })
    general.ads.long = {}
    general.ads.long.link = `https://fptshop.com.vn/` + $('body > section > div > div:nth-child(2) a').attr("href")
    general.ads.long.img = `https://fptshop.com.vn/` + $('body > section > div > div:nth-child(2) a img').attr("src")

    
    $('.fs-asnews ul li').each(function(){
        let news = {}
        news.title = $(this).find('h3').text().trim()
        news.link = $(this).find('a').attr('href')
        news.img = $(this).find('img').attr('src')
        general.news.push(news)
    })
    return general
}

const crawlProductsHot = ($) => {
    let products = []
    $('.fs-horow .fs-hocol').each(function(){
       let product = {}
        product.name =  $(this).find('h3').text().trim()
        product.link = `https://fptshop.com.vn/` + $(this).find('a').attr('href')
        product.slug = convertString(product.name)
        product.sale = $(this).find('.fs-iclbnews').text().trim()
        product.currPrice = $(this).find('.fs-hopri').text().trim()
        product.img = $(this).find('img').attr('src')
        if(!product.img) product.img = $(this).find('img').attr('data-original')
        products.push(product)
    })
    return products
}

const crawlAccessoriesHot = ($) => {
    let products = {}
    products.tags = []
    products.items = []

    $('.fs-hokey li').each(function(){
       let tag = {}
       tag.title =  $(this).find('a').text().trim()
       tag.slug =  $(this).find('a').attr('href').replace("/phu-kien/", "")
       products.tags.push(tag)
    })

    $('.fs-hopkb .fs-hopkrow .fs-hopkcol').each(function(){
        let item = {}
        item.link = $(this).find('a').attr('href')
        item.name = $(this).find('.fs-hopkname').text().trim()
        item.slug = convertString(item.name)
        item.currPrice = $(this).find('.fs-hopkpri').text().trim()
        item.img = $(this).find('img').attr("src")
        if(!item.img) item.img = $(this).find('img').attr("data-original")

        products.items.push(item)
    })
    return products
}
module.exports = {crawlMenu, crawlNewsWithAds, crawlProductsHot, crawlAccessoriesHot}