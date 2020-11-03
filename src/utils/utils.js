import { ICONS } from './constanst'

export function getDay() {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    today = mm + '/' + dd + '/' + yyyy;
    return today
}

export const getItemIcon = state => {
    const icon = ICONS[state]
    if (!icon) return ""
    return icon
}