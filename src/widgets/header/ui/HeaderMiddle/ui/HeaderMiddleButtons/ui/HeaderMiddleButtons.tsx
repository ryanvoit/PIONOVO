import { CartIcon, HeartIcon } from "@/shared/assets/icons"
import { Button } from "@/shared/ui/button"
import styles from "./HeaderMiddleButtons.module.css"

export function HeaderMiddleButtons() {
    return (
        <div className={styles.header__buttons}>
            <Button className={styles.header__btn}>
                <span>Корзина</span>
                <span className={styles["header__btn-badge"]}>
                    <CartIcon />
                </span>
            </Button>
            <Button className={styles.header__btn}>
                <span>Избранное</span>
                <span className={styles["header__btn-badge"]}>
                    <HeartIcon />
                </span>
            </Button>
        </div>
    )
}
