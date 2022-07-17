import { color } from "../Theme/Color"

const BASE = {
    fontFamily: 'Sfprotext',
    fontSize: 17,
    color: color.color
}

const BASE_BOLD = {
    fontFamily: 'Sfprodisplay',
    fontSize: 34,
    fontWeight: 'bold',
    color: color.black
}
 
export const presets = {
    default: BASE,
    h1: {
        ...BASE_BOLD,
    },
    h2: {
        ...BASE_BOLD,
        fontSize: 30
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 25
    }
}

