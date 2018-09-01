import express from "express"
const router = express.Router()
import request from "request"
import rp from 'request-promise'
import cheerio from "cheerio"
import { SUCCESS, FAILED } from "../constans.js"

import ProductControllers from "../controllers/ProductControllers"
import ProductServices from "../models/services/ProductServices"
import UpdateProductServices from "../models/services/UpdateProductServices"

router.get("/phones-fpt", (req,res)=>{
	let baseOtions = {
		uri: 'https://fptshop.com.vn/dien-thoai?sort=gia-cao-den-thap&trang=1',
		transform: function (body) {
			return cheerio.load(body);
		}
	};
	rp(baseOtions)
	.then(function ($) {
		let numberPage = $(".f-cmtpaging .f-cmtpg-l:last-child").attr("data-page")

		for (let i = 1; i <= numberPage; i++) {

			let options = {
				uri: `https://fptshop.com.vn/dien-thoai?sort=gia-cao-den-thap&trang=${i}`,
				transform: function (body) {
					return cheerio.load(body);
				}
			};

			rp(options)
			.then(async function($) {
				// Get data
				var result = await ProductServices.crawlPhone($)
				// Insert database

				if(result){
					try {
						let data = await ProductControllers.addProductByFpt(result)
						if (data) {
							 res.json({
								status: SUCCESS,
								data: data,
								message: `Tạo mới sản phẩm thành công`
							})
						} else {
							 res.json({
								status: FAILED,
								data: {},
								message: `Lỗi trong quá trình tạo mới sản phẩm`
							})
						}
					} catch (error) {
						 res.json({
							status: FAILED,
							data: {},
							message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
						})
					}
				}
			})
			.catch( err => {
				throw err
			});
		}
	})
	.catch( err => {
		throw err
	});
})

router.get("/tablets-fpt", (req,res)=>{
	let baseOtions = {
		uri: 'https://fptshop.com.vn/may-tinh-bang?sort=ban-chay-nhat&trang=1',
		transform: function (body) {
			return cheerio.load(body);
		}
	};
	rp(baseOtions)
	.then(function ($) {
		let numberPage = $(".f-cmtpaging .f-cmtpg-l:last-child").attr("data-page")

		for (let i = 1; i <= numberPage; i++) {

			let options = {
				uri: `https://fptshop.com.vn/may-tinh-bang?sort=ban-chay-nhat&trang=${i}`,
				transform: function (body) {
					return cheerio.load(body);
				}
			};

			rp(options)
			.then(async function($) {
				// Get data
				var result = await ProductServices.crawlTablet($)
				// Insert database
				if(result){
					try {
						let data = await ProductControllers.addProductByFpt(result)
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
			.catch( err => {
				throw err
			});
		}
	})
	.catch( err => {
		throw err
	});
})

router.get("/laptops-fpt", (req,res)=>{
	let baseOtions = {
		uri: 'https://fptshop.com.vn/may-tinh-xach-tay?sort=ban-chay-nhat&trang=1',
		transform: function (body) {
			return cheerio.load(body);
		}
	};
	rp(baseOtions)
	.then(function ($) {
		let numberPage = $(".f-cmtpaging .f-cmtpg-l:last-child").attr("data-page")

		for (let i = 1; i <= numberPage; i++) {

			let options = {
				uri: `https://fptshop.com.vn/may-tinh-xach-tay?sort=ban-chay-nhat&trang=${i}`,
				transform: function (body) {
					return cheerio.load(body);
				}
			};

			rp(options)
			.then(async function($) {
				// Get data
				var result = await ProductServices.crawlLaptop($)
				// Insert database
				if(result){
					try {
						let data = await ProductControllers.addProductByFpt(result)
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
			.catch( err => {
				throw err
			});
		}
	})
	.catch( err => {
		throw err
	});
})

router.post("/product-limit", async (req,res)=>{
		let category = req.body.category
		if(category){
			try {
				let data = await ProductControllers.getProductByCategoryLimit(category)
				if (data.length > 0) {
					return res.json({
						status: SUCCESS,
						data: data,
						message: `Lấy dữ liệu sản phẩm thành công`
					})
				} else {
					return res.json({
						status: FAILED,
						data: {},
						message: `Lỗi trong quá trình lấy dữ liệu sản phẩm`
					})
				}
			} catch (error) {
				return res.json({
					status: FAILED,
					data: {},
					message: `Lỗi xảy ra trong quá trình lấy dữ liệu sản phẩm từ cơ sở dữ liệu ${error}`
				})
			}
		}
})

router.post("/products-db", async (req,res)=>{
	let category = req.body.category
	if(category){
		try {
			let data = await ProductControllers.getProductByCategory(category)
			if (data) {
				return res.json({
					status: SUCCESS,
					data: data,
					message: `lấy dữ liệu sản phẩm thành công`
				})
			} else {
				return res.json({
					status: FAILED,
					data: {},
					message: `Lỗi trong quá trình lấy dữ liệu sản phẩm`
				})
			}
		} catch (error) {
			return res.json({
				status: FAILED,
				data: {},
				message: `Lỗi xảy ra trong quá trình lấy dữ liệu sản phẩm từ cơ sở dữ liệu ${error}`
			})
		}
	}
})

router.post("/update-product", async (req, res) => {
    let id = req.body.id
        if(id){
            
            let checkFullData = await ProductControllers.checkFullDataProduct(id)
            if(checkFullData.fullData){
                try {
                    let data = await ProductControllers.getProductById(id)
                    if (data) {
                         res.json({
                            status: SUCCESS,
                            data: data,
                            message: `Lấy thông tin chi tiết sản phẩm thành công`
                        })
                    } else {
                         res.json({
                            status: FAILED,
                            data: {},
                            message: `Lỗi trong quá trình lấy thông tin chi tiết sản phẩm`
                        })
                    }
                } catch (error) {
                     res.json({
                        status: FAILED,
                        data: {},
                        message: `Lỗi xảy ra trong quá trình lấy thông tin chi tiết sản phẩm từ cơ sở dữ liệu ${error}`
                    })
                }
            }else{
                try {
                    let dataLink = await ProductControllers.getLinkFptById(id)
                    if (dataLink) {
                            let options = {
                                uri: `${dataLink.linkFpt}`,
                                transform: function (body) {
                                    return cheerio.load(body);
                                }
                            };
                        rp(options)
                        .then(async function($) {
                            var result = await UpdateProductServices.crawlProductDetail($)
                            if(result){
                                try {
                                    let data = await ProductControllers.updateFullProductFpt(id, result)
                                    if (data) {
                                         res.json({
                                            status: SUCCESS,
                                            data: data,
                                            message: `Update thêm thông tin chi tiết sản phẩm thành công`
                                        })
                                    } else {
                                         res.json({
                                            status: FAILED,
                                            data: {},
                                            message: `Lỗi trong quá trình update thêm thông tin chi tiết sản phẩm`
                                        })
                                    }
                                } catch (error) {
                                     res.json({
                                        status: FAILED,
                                        data: {},
                                        message: `Lỗi xảy ra trong quá trình update thêm thông tin chi tiết sản phẩm từ cơ sở dữ liệu ${error}`
                                    })
                                }
                            }
                        })
                        .catch( err => {
                            throw err
                        });
                } else {
                    return res.json({
                        status: FAILED,
                        data: {},
                        message: `Lỗi trong quá trình lấy linkFpt sản phẩm`
                    })
                }
            } catch (error) {
                return res.json({
                    status: FAILED,
                    data: {},
                    message: `Lỗi xảy ra trong quá trình lấy linkFpt từ cơ sở dữ liệu ${error}`
                })
            }
        }
    }
})
module.exports = router
