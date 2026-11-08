import clsx from "clsx"
import styles from "./SocialLinks.module.css"
import type { SocialLinksProps } from "./SocialLinks.props"
import { DEFAULT_LINKS } from "../config/content"
import { SOCIAL_ICONS } from "../config/content"

export default function SocialLinks({ links = DEFAULT_LINKS, className }: SocialLinksProps) {
    return (
        <ul className={clsx(styles.social, className)}>
            {links.map(({ role, href, title }) => {
                const IconComponent = SOCIAL_ICONS[role]

                return (
                    <li key={role} className={styles.social__item}>
                        <a className={styles.social__link} href={href} aria-label={title} title={title}>
                            <IconComponent className={styles.social__icon} />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
