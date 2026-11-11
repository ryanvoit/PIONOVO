import { HeaderAdvantages } from "./HeaderAdvantages"
import { HeaderTopRight } from "./HeaderTopRight"
import styles from "./HeaderTop.module.css"

export function HeaderTop() {
    return (
        <div className={styles.header__top}>
            <HeaderAdvantages />
            <HeaderTopRight />
        </div>
    )
}
