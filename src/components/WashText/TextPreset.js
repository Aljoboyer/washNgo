import { COLORS } from "../../theme/colors"
import { FontFamily } from "../../theme/typography.js"

const Light = {
    fontFamily: FontFamily.INTER_REGULAR,
    fontSize: 12,
    color: COLORS.GRAY
}

const MEDIUM = {
    fontFamily: FontFamily.POPPINS_MEDIUM,
    fontSize: 16,
    color: COLORS.GRAY,
}

const SEMI_BOLD = {
    fontFamily: FontFamily.POPPINS_SEMI_BOLD,
    fontSize: 20,
    color: COLORS.GRAY,
}

const BOLD = {
    fontFamily: FontFamily.INTER_BOLD,
    fontSize: 20,
    color: COLORS.DARKBLACK,
}

const EXTRA_BOLD = {
    fontFamily: FontFamily.POPPINS_BOLD,
    fontSize: 20,
    color: COLORS.DARKBLACK,
}


export const presets = {
    default: Light,
    title: {
        ...EXTRA_BOLD,
        fontSize: 32
    },
    title1: {
        ...BOLD,
        fontSize: 16
    },
    title2: {
        ...EXTRA_BOLD,
        fontSize: 24
    },
    title3: {
        ...MEDIUM,
        fontSize: 14
    },
    p: {
        ...SEMI_BOLD,
        fontSize: 16
    },
    small: {
        ...Light,
        fontSize: 14
    }
}