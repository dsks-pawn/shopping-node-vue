
import express from "express"
const router = express.Router()
import { SUCCESS, FAILED } from "../constans.js"

import ItemControllers from '../controllers/ItemControllers'

router.get("/items_hot", (req,res)=>{
    
})

module.exports = router