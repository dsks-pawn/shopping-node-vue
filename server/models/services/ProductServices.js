import convertString from '../../helpers/converts_slug'

const crawlPhone = ($) => {
    let products = []
    $('.fs-carow .fs-lpil').each(function(){
        let product = {}
            product.code = " "
            product.post = " "
            product.color = {}
            product.images = []
            product.imagesCarousel = []
            product.gallery = []
            product.comments = {}
            product.evaluates = {}
            product.rate = {}
    
    
            product.category = 'phone'
            product.name = $(this).find('.fs-lpil-name').text().trim()
            product.slug = convertString(product.name)
            product.brand = product.name.slice(0, product.name.indexOf(" ")).toLowerCase()
            if(product.brand == 'iphone') product.brand = 'apple(iphone)'
            product.link = `https://fptshop.com.vn` + $(this).find('.fs-lpil-img').attr('href')
            product.avatar = $(this).find('.fs-lpil-img img').attr("data-original")
            product.currPrice = $(this).find('.fs-lpil-price p').text().trim()
            if(!product.currPrice) product.currPrice = ' '

            product.oldPrice = $(this).find('.fs-lpil-price del').text().trim()
            product.sale = $(this).find('.fs-icpromo .fs-icpmbox').html()
    
            product.provisional = {} 
            product.provisional.sale = $(this).find('.fs-lpil-lb').text().trim()
            product.provisional.evaluates = $(this).find('.fs-dttrate p').text().trim()
            let valueRate = 0
            $(this).find('.fs-dttrate span').each(function(){
                let liSpan = $(this).attr('class')
                let valueStar = 0;
                if(liSpan == 'fs-dttr10'){
                    valueStar = 1;
                }else if(liSpan == 'fs-dttr05'){
                    valueStar = 0.5;
                }else {
                    valueStar = 0
                }
                valueRate += valueStar
            return valueRate
            })
            product.provisional.rate = valueRate
            return products.push(product)
    })
    return products
}

const crawlTablet = ($) => {
    let products = []
    $('.fs-carow .fs-lpil').each(function(){
        let product = {}
            product.code = " "
            product.post = " "
            product.color = {}
            product.images = []
            product.imagesCarousel = []
            product.gallery = []
            product.comments = {}
            product.evaluates = {}
            product.rate = {}
    
    
            product.category = 'tablets'
            product.name = $(this).find('.fs-lpil-name').text().trim()
            product.slug = convertString(product.name)
            product.brand = product.name.slice(0, product.name.indexOf(" ")).toLowerCase()
            if(product.brand == 'ipad') product.brand = 'apple(ipad)'
            product.link = `https://fptshop.com.vn` + $(this).find('.fs-lpil-img').attr('href')
            product.avatar = $(this).find('.fs-lpil-img img').attr("data-original")
            product.currPrice = $(this).find('.fs-lpil-price p').text().trim()
            if(!product.currPrice) product.currPrice = ' '

            product.oldPrice = $(this).find('.fs-lpil-price del').text().trim()
            product.sale = $(this).find('.fs-icpromo .fs-icpmbox').html()
    
            product.provisional = {} 
            product.provisional.sale = $(this).find('.fs-lpil-lb').text().trim()
            product.provisional.evaluates = $(this).find('.fs-dttrate p').text().trim()
            let valueRate = 0
            $(this).find('.fs-dttrate span').each(function(){
                let liSpan = $(this).attr('class')
                let valueStar = 0;
                if(liSpan == 'fs-dttr10'){
                    valueStar = 1;
                }else if(liSpan == 'fs-dttr05'){
                    valueStar = 0.5;
                }else {
                    valueStar = 0
                }
                valueRate += valueStar
            return valueRate
            })
            product.provisional.rate = valueRate
            return products.push(product)
    })
    return products
}

const crawlLaptop = ($) => {
    let products = []

    $('.fs-carow .fs-lapitem').each(function(){
        let product = {}
         product.code = " "
         product.post = " "
         product.color = {}
         product.images = []
         product.imagesCarousel = []
         product.gallery = []
         product.comments = {}
         product.evaluates = {}
         product.rate = {}
         product.currPrice = " "

 
        product.category = 'laptops'
        product.name = $(this).find('.fs-ilap-name').text().trim()
        product.slug = convertString(product.name)

        product.brand = product.name.slice(0, product.name.indexOf(" ")).toLowerCase()
        if(product.brand == 'macbook') product.brand = 'apple(macbook)'

        product.link = `https://fptshop.com.vn` + $(this).find('.fs-ilap-img').attr('href')
        product.avatar = $(this).find('.fs-ilap-img img').attr("data-original")	
        product.oldPrice = $(this).find('.fs-ilap-price del').text().trim()
        product.sale = $(this).find('.fs-icpromo .fs-icpmbox').html()

        product.provisional = {} 
        product.provisional.sale = $(this).find('.fs-ilap-lb').text().trim()
        product.provisional.evaluates = $(this).find('.fs-dttrate p').text().trim()
        let valueRate = 0
         $(this).find('.fs-dttrate span').each(function(){
                 let liSpan = $(this).attr('class')
                 let valueStar = 0;
                 if(liSpan == 'fs-dttr10'){
                     valueStar = 1;
                 }else if(liSpan == 'fs-dttr05'){
                     valueStar = 0.5;
                 }else {
                     valueStar = 0
                 }
                 valueRate += valueStar
             return valueRate
         })
          product.provisional.rate = valueRate
     
          product.provisional.specifications = []
         $(this).find('.fs-ilap-ch ul li span').each(function(){
             let para = $(this).text()
             return product.provisional.specifications.push(para)
         })
       products.push(product)
    })
    return products
    
}
module.exports = {crawlPhone, crawlTablet, crawlLaptop }