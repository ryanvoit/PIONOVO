import { HeaderMainLink } from "./HeaderMainLink"
import { HeaderMiddleButtons } from "./HeaderMiddleButtons"
import styles from "./HeaderMiddle.module.css"

export function HeaderMiddle() {
    return (
        <div className={styles.header__main}>
            <HeaderMainLink />
            <HeaderMiddleButtons />
        </div>
    )
}
