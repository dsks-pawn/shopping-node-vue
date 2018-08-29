import express from "express"
const router = express.Router()
import rp from 'request-promise'
import cheerio from "cheerio"
import { SUCCESS, FAILED } from "../constans.js"

import ItemControllers from "../controllers/ItemControllers"
import ItemServices from "../models/services/ItemServices"

router.post("/item-db", async (req, res) => {
    let slug = req.body.slug

        if(slug){
            try {
                let dataLink = await ItemControllers.getLinkFptBySlug(slug)
                if (dataLink) {
                        let options = {
                            uri: `${dataLink.linkFpt}`,
                            transform: function (body) {
                                return cheerio.load(body);
                            }
                        };
        
                    rp(options)
                    .then(async function($) {
                        var result = await ItemServices.crawlProductDetail($)
                        // if(result){
                        // 	try {
                        // 		let data = await ProductControllers.addProductByFpt(result)
                        // 		if (data) {
                        // 			 res.json({
                        // 				status: SUCCESS,
                        // 				data: data,
                        // 				message: `Tạo mới sản phẩm thành công`
                        // 			})
                        // 		} else {
                        // 			 res.json({
                        // 				status: FAILED,
                        // 				data: {},
                        // 				message: `Lỗi trong quá trình tạo mới sản phẩm`
                        // 			})
                        // 		}
                        // 	} catch (error) {
                        // 		 res.json({
                        // 			status: FAILED,
                        // 			data: {},
                        // 			message: `Lỗi xảy ra trong quá trình tạo mới sản phẩm từ cơ sở dữ liệu ${error}`
                        // 		})
                        // 	}
                        // }
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
})
module.exports = router
