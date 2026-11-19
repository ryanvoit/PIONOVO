import { PATHS } from "@/shared/config"

export interface HeaderNavLink {
    href: string
    title: string
}

export const NAV_LINKS: readonly HeaderNavLink[] = [
    { href: PATHS.DELIVERY, title: "Доставка" },
    { href: PATHS.PAYMENT, title: "Оплата" },
    { href: PATHS.CONTACTS, title: "Контакты" },
]