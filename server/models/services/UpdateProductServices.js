
const crawlProductDetail = ($) => {
    let product = {}
    product.images = []
    $(".fs-dtsul a").each(function () {
        let img = $(this).attr("href")
        if(img.indexOf('youtube.com') < 0) return product.images.push(img)
    })
    product.attached = $(".fancybox-access-box p").text().trim()

    product.color = []
    $(".fs-dticolor ul li span").each(function () {
        let obj = {}
        obj.title = $(this).attr("title")
        obj.background = $(this).attr("style").replace("background:", "").trim()
        return product.color.push(obj)
    })

    product.imagesCarousel = []
    $("#dac-diem-noi-bat .item").each(function () {
        let img = $(this).find("img").attr("data-original")
        return product.imagesCarousel.push(img)
    })
    product.post = $(".fs-dtctbox").html()

    product.gallery = []
    $("#hinh-anh .item .fs-imgls img").each(function () {
        let img = $(this).attr("data-original")
        return product.gallery.push(img)
    })

    product.specifications = []
    $(".fs-dttsktul li").each(function () {
        let spec = {}
        spec.title = $(this).find("label").text().trim()
        if (!spec.title) spec.title = $(this).text().trim()
        spec.value = $(this).find("span").text().trim()
        if(spec.value){
            spec.color = "color: #333"
        }else {
            spec.color = "color: #d0021b; font-weight: bold"
        }
        return product.specifications.push(spec)
    })
    product.code = $(".fs-dttname .nosku").text().trim()

    product.rate = {}
    product.rate.one = $(".fs-dtrtstar li:first-child .fs-dtrscout").text().trim()
    product.rate.two = $(".fs-dtrtstar li:nth-child(2) .fs-dtrscout").text().trim()
    product.rate.three = $(".fs-dtrtstar li:nth-child(3) .fs-dtrscout").text().trim()
    product.rate.four = $(".fs-dtrtstar li:nth-child(4) .fs-dtrscout").text().trim()
    product.rate.five = $(".fs-dtrtstar li:last-child .fs-dtrscout").text().trim()

    product.updated_date = new Date()
    product.fullData = true

    return product

}

module.exports = { crawlProductDetail }