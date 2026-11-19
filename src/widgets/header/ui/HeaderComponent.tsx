import { HeaderBottom } from "./HeaderBottom"
import { HeaderMiddle } from "./HeaderMiddle"
import { HeaderTop } from "./HeaderTop"
import styles from "./HeaderComponent.module.css"

export default function HeaderComponent() {
    return (
        <>
            <HeaderTop />
            <div className={styles.header__navigation}>
                <HeaderMiddle />
                <HeaderBottom />
            </div>
        </>
    )
}
