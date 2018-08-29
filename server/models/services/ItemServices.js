
const crawlProductDetail = ($) => {
    let product = {}
    product.images = []
    $(".fs-dtsul a").each(function () {
        let img = $(this).attr("href")
        return product.images.push(img)
    })
    product.attached = $(".fancybox-access-box p").text().trim()

    product.color = []
    $(".fs-dticolor ul li span").each(function(){
        let obj = {}
        obj.title = $(this).attr("title")
        obj.background = $(this).attr("style").replace("background:", "").trim()
        return product.color.push(obj)
    })
    
    product.imagesCarousel = []
    $("#dac-diem-noi-bat .item").each(function(){
        let img = $(this).find("img").attr("data-original")
        return product.imagesCarousel.push(img)
    })
    product.post = $(".fs-dtctbox").html()

    product.gallery = []
    $("#hinh-anh .item .fs-imgls img").each(function(){
        let img = $(this).attr("data-original")
        product.gallery.push(img)
    })

    product.specifications = []
    $(".fs-dttsktul li").each(function(){
        let spec = {}
        spec.title = $(this).find("label").text().trim()
        if(!spec.title) spec.title = $(this).text().trim()
        spec.value = $(this).find("span").text().trim()
    })

    product.code = $(".fs-dttname .nosku").text().trim()

    product.rate = {}
    product.rate.one = $(".fs-dtrtstar li:first-child .fs-dtrscout").text().trim()
    product.rate.two = $(".fs-dtrtstar li:nth-child(2) .fs-dtrscout").text().trim()
    product.rate.three = $(".fs-dtrtstar li:nth-child(3) .fs-dtrscout").text().trim()
    product.rate.four = $(".fs-dtrtstar li:nth-child(4) .fs-dtrscout").text().trim()
    product.rate.five = $(".fs-dtrtstar li:last-child .fs-dtrscout").text().trim()

    product.evaluates = []
    $("#listRate .fs-dttrateitem").each(function(){
        let rate = 0
        $(this).find(".fs-dttrate ul li span").each(function(){
            console.log('object');
            //     let liSpan = $(this).attr('class')
            //     let valueStar = 0;
            //     if(liSpan == 'fs-dttr10'){
            //         valueStar = 1;
            //     }else if(liSpan == 'fs-dttr05'){
            //         valueStar = 0.5;
            //     }else {
            //         valueStar = 0
            //     }
            //     rate += valueStar
            //     console.log('rate :', rate);
            // return rate
        })
    })
    console.log('object');
}

module.exports = { crawlProductDetail }