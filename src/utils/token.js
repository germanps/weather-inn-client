import { TOKEN } from './constanst'

//save token in localStorage
export function setToken(token) {
    localStorage.setItem(TOKEN, token)
}

//get token from localstorage
export function getToken() {
    return localStorage.getItem(TOKEN)
}