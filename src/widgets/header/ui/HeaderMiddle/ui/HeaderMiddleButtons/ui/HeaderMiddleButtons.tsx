import { HeaderBtn } from "./HeaderBtn"
import styles from "./HeaderMiddleButtons.module.css"

export function HeaderMiddleButtons() {
    return (
        <div className={styles.header__buttons}>
            <HeaderBtn role="cart" />
            <HeaderBtn role="favourite" />
        </div>
    )
}
