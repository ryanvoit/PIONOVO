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