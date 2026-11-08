import styles from "./HeaderNav.module.css"
import { NAV_LINKS } from "../config/links"

export function HeaderNav() {
    return (
        <nav className={styles["main-nav"]}>
            <ul className={styles["main-nav__list"]}>
                {NAV_LINKS.map(({ href, title }) => (
                    <li key={title} className={styles["main-nav__item"]}>
                        <a className={styles["main-nav__link"]} href={href}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
