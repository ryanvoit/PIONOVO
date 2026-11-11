import { HeaderNav } from "./HeaderNav"
import { HeaderContacts } from "./HeaderContacts"
import styles from "./HeaderBottom.module.css"

export function HeaderBottom() {
    return (
        <div className={styles.header__bottom}>
            <HeaderNav />
            <HeaderContacts />
        </div>
    )
}
