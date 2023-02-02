import api from "../http/api";


export default class AuthService {
    static async login(data) {
        return api.post('/login', data) 
    }
}