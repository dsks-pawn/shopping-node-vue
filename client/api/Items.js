import Api from '@/api/Api'
export default {
    getItemsWithLimit() {
        return Api().get('/item/items_hot')
    }
}
