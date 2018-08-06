import Api from '@/api/Api'
export default {
    register(data) {
        return Api().post('/auth/register', data)
    },
    login(data){
        return Api().post('/auth/login', data)
    }
}
