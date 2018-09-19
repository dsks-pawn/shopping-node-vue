import Product from "../models/schemas/Product"

const laptopFptShopSelected = async () => {
    try {
        let data = await Product.aggregate([{ $match: { category: "laptop" } }, { $sample: { size: 20 } }])
        console.log('data.length :', data.length);
        return data
    } catch (error) {
        throw error
    }
    return false
}
module.exports = { laptopFptShopSelected }	