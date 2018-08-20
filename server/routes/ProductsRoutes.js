import express from "express"
const router = express.Router()
import request from "request"
import cheerio from "cheerio"
import { SUCCESS, FAILED } from "../constans.js"

import ProductControllers from '../controllers/ProductControllers'

router.get("/phones", async (req, res) => {
	
	let baseUrl =
		`https://fptshop.com.vn/dien-thoai?sort=gia-cao-den-thap&trang=1`
	request.get(baseUrl, async (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(body)
			let numberPage = await $('.f-cmtpaging .f-cmtpg-l:last-child').attr('data-page')
			
			for (let i = 1; i <= numberPage; i++) {
				let url = `https://fptshop.com.vn/dien-thoai?sort=gia-cao-den-thap&trang=${i}`

					request.get(url, async (error, response, body) => {
						let products = []
						$('.fs-carow .fs-lpil').each(function(){
						   if (!error && response.statusCode == 200) {
   

							   product.name = $(this).find('.fs-lpil-name').text().trim()
							   product.link = `https://fptshop.com.vn` + $(this).find('.fs-lpil-img').attr('href')
							   product.avatar = $(this).find('.fs-lpil-img').find('img').attr("data-original")
							   product.sale = $(this).find('.fs-lpil-lb').text().trim()
							   product.currPrice = $(this).find('.fs-lpil-price').find('p').text().trim()
							   product.oldPrice = $(this).find('.fs-lpil-price').find('del').text().trim()
							   product.evaluates = $(this).find('.fs-dttrate').find('p').text().trim()
	  
							  let valueRate = 0
							  $(this).find('.fs-dttrate').find('span').each(function(){
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
							  product.rate = valueRate
						
							  products.push(product)
							 
						   }
					   })

					    //   đẩy vào database
					   if(products){
						try {
							let data = await ProductControllers.addProductByFpt(products)
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
			}
		}
	}).on('error', function(err) {
		console.log(err)
	})
})

module.exports = router



let product = {}
						