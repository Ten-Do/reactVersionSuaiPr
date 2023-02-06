import api from "../http/api";

export class AuthService {
    static async login(email, password) {
        try {
            const response = await api.post('/login', { email, password });
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            return { ...response.data.userInfo, categories: response.data.userCategories };
        } catch (e) {
            console.log(e.response?.data?.message);
            throw e;
        }
    }

    static async logout() {
        try {
            await api.delete('/logout')
            localStorage.removeItem('token');
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    static async checkAuth() {
        try {
            const response = await api.get(`/refresh`)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}
