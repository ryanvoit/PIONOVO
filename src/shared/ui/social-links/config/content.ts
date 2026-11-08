import { InstagramIcon, TelegramIcon, VkIcon, WhatsAppIcon } from "../../../assets/icons"

export type SocialRole = "instagram" | "telegram" | "whats-app" | "vk"

export interface SocialLinkItem {
    role: SocialRole
    href: string
    title: string
}

export const DEFAULT_LINKS: SocialLinkItem[] = [
    { role: "instagram", href: "#", title: "Instagram" },
    { role: "telegram", href: "#", title: "Telegram" },
    { role: "whats-app", href: "#", title: "WhatsApp" },
    { role: "vk", href: "#", title: "ВКонтакте" },
]

export const SOCIAL_ICONS = {
    instagram: InstagramIcon,
    telegram: TelegramIcon,
    "whats-app": WhatsAppIcon,
    vk: VkIcon,
}