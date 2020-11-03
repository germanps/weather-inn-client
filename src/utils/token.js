import { TOKEN } from './constanst'
import jwtDecode from 'jwt-decode'


//save token in localStorage
export function setToken(token) {
    localStorage.setItem(TOKEN, token)
}

//get token from localstorage
export function getToken() {
    return localStorage.getItem(TOKEN)
}

export function removeToken() {
    return localStorage.removeItem(TOKEN)
}

//decode token
export function decodeToken(token) {
    return jwtDecode(token)
}