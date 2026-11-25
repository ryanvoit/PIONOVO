import { BurgerIcon, CartIcon, HeartIcon, UserIcon } from "@/shared/assets/icons"
import type { ComponentType, SVGProps } from "react"

export type HeaderBtnRole = "catalogue" | "cart" | "favourite" | "login"

export interface HeaderBtnContent {
    label: string
    Icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const HEADER_BTN_CONTENT: Record<HeaderBtnRole, HeaderBtnContent> = {
    catalogue: { label: "Каталог", Icon: BurgerIcon },
    cart: { label: "Корзина", Icon: CartIcon },
    favourite: { label: "Избранное", Icon: HeartIcon },
    login: { label: "Войти", Icon: UserIcon },
}
