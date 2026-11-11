import { ADVANTAGES } from "../config/content"
import styles from "./HeaderAdvantages.module.css"

export function HeaderAdvantages() {
    return (
        <ul className={styles["header__advantage-list"]}>
            {ADVANTAGES.map(({ id, text }) => (
                <li key={id} className={styles["header__advantage-item"]}>
                    {text}
                </li>
            ))}
        </ul>
    )
}
