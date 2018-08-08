import Api from '@/api/Api'
export default {
    getBrandsWithLimit() {
        return Api().get('/company/brand_hot')
    }
}
