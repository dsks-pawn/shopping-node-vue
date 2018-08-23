import express from "express"
const router = express.Router()
import rp from 'request-promise'
import cheerio from "cheerio"
import { SUCCESS, FAILED } from "../constans.js"

import AccessoriesControllers from '../controllers/AccessoriesControllers'
import AccessoriesServices from "../models/services/AccessoriesServices"


router.get("/cladding", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/bao-da-op-lung',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "cladding"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-bao-da-op-lung%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "cladding"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/backup-charger", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/sac-du-phong',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "backup-charger"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-sac-du-phong%2C&currentRecord=${i}&sort=ban-chay-nhat`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "backup-charger"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/memory-stick", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/the-nho',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "memory-stick"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-the-nho%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "memory-stick"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/apple", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/phu-kien-apple',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "apple"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-phu-kien-apple%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "apple"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/paste-screen", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/mieng-dan-man-hinh',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "paste-screen"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-mieng-dan-man-hinh%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "paste-screen"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/headphone", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/tai-nghe',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "headphone"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-tai-nghe%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "headphone"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/speaker", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/tai-nghe',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "speaker"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-loa%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "speaker"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/usb", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/usb-o-cung',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "usb"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-usb-o-cung%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "usb"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/charging-cable", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/sac-cap',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "charging-cable"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-sac-cap%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "charging-cable"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/mouse", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/chuot',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "mouse"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-chuot%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "mouse"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/balo", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/balo-tui-xach',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "balo"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-balo-tui-xach%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "balo"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/tv-box", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/tv-box',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "tv-box"
               let result =  await AccessoriesServices.crawlAccessories($, category) 
               if(result){
                try {
                    let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                    if (data) {
                        return res.json({
                            status: SUCCESS,
                            data: data,
                            message: `Tạo mới sản phẩm thành công`
                        })
                    } else {
                        return res.json({
                            status: FAILED,
                            data: {},
                            message: `Lỗi trong quá trình tạo mới sản phẩm`
                        })
                    }
                } catch (error) {
                    return res.json({
                        status: FAILED,
                        data: {},
                        message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                    })
                }
            }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/other", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/phu-kien-khac',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "other"
               let productFirsts =  await AccessoriesServices.crawlAccessories($, category) 
               for(let i = dataPagesize; i <= dataTotal; i+= dataPagesize ){
                    let options = {
                        uri: `https://fptshop.com.vn/phu-kien/Ajax/Product/AjaxCateLoadMoreProduct?queryFilter=nhom-hang-phu-kien-khac%2C&currentRecord=${i}&sort=`,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options)
                    .then(async function ($) {
                        let category = "other"
                        let result = await AccessoriesServices.crawlAccessories($, category)
                        if(result){
                            if(i == dataPagesize) result = result.concat(productFirsts)
                            try {
                                let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                                if (data) {
                                    return res.json({
                                        status: SUCCESS,
                                        data: data,
                                        message: `Tạo mới sản phẩm thành công`
                                    })
                                } else {
                                    return res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi trong quá trình tạo mới sản phẩm`
                                    })
                                }
                            } catch (error) {
                                return res.json({
                                    status: FAILED,
                                    data: {},
                                    message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                                })
                            }
                        }
                    })
                    .catch(function (err) {
                        throw err
                    });
                }
        })
        .catch(function (err) {
          throw err
        });
})

router.get("/game", async (req, res) => {
    let baseOptions = {
        uri: 'https://fptshop.com.vn/phu-kien/may-choi-game',
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(baseOptions)
        .then(async function ($) {
               let dataTotal = Number($('.pk-xtsp .loadmore').attr('data-total'))
               let dataPagesize = Number($('.pk-xtsp .loadmore').attr('data-pagesize'))

               let category = "game"
               let result =  await AccessoriesServices.crawlAccessories($, category) 
               if(result){
                try {
                    let data = await AccessoriesControllers.addAccessoriesByFpt(result)
                    if (data) {
                        return res.json({
                            status: SUCCESS,
                            data: data,
                            message: `Tạo mới sản phẩm thành công`
                        })
                    } else {
                        return res.json({
                            status: FAILED,
                            data: {},
                            message: `Lỗi trong quá trình tạo mới sản phẩm`
                        })
                    }
                } catch (error) {
                    return res.json({
                        status: FAILED,
                        data: {},
                        message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                    })
                }
            }
        })
        .catch(function (err) {
          throw err
        });
})

module.exports = router	