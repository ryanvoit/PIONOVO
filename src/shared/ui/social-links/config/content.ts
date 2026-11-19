import {
    InstagramIcon,
    MaxIcon,
    TelegramIcon,
    VkIcon,
    WhatsAppIcon,
} from "@/shared/assets/icons"

export type SocialRole = "instagram" | "telegram" | "whats-app" | "vk" | "max"

export interface SocialLinkItem {
    role: SocialRole
    href: string
    title: string
}

export const DEFAULT_LINKS: SocialLinkItem[] = [
    { role: "telegram", href: "#", title: "Telegram" },
    { role: "max", href: "#", title: "MAX" },
    { role: "whats-app", href: "#", title: "WhatsApp" },
    { role: "instagram", href: "#", title: "Instagram" },
    { role: "vk", href: "#", title: "ВКонтакте" },
]

export const SOCIAL_ICONS = {
    instagram: InstagramIcon,
    telegram: TelegramIcon,
    "whats-app": WhatsAppIcon,
    vk: VkIcon,
    max: MaxIcon,
}
