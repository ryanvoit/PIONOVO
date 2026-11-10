import { BurgerIcon, CartIcon, UserIcon } from "@/shared/assets/icons"
import { Button } from "@/shared/ui/button"
import styles from "./HeaderMiddle.module.css"

const CATALOGUE_LINKS = [
    "8 Марта",
    "14 Февраля",
    "Букет пионов",
    "Пионы поштучно",
    "Пионы в коробке",
    "Пионы в сумке",
]

export function HeaderMiddle() {
    return (
        <div className={styles.header__main}>
            <div className={styles["header__main-wrapper"]}>
                <a className={styles["header__main-link"]} href="#">
                    <span>P.I.O.N.O.V.O.</span>
                </a>
                <div className={styles["header__catalogue-wrapper"]}>
                    <Button
                        variant="secondary"
                        className={styles["header__btn-catalogue"]}
                    >
                        <span>Каталог</span>
                        <BurgerIcon />
                    </Button>
                    <ul className={styles["header__catalogue-list"]}>
                        {CATALOGUE_LINKS.map((label) => (
                            <li key={label}>
                                <a href="#" className={styles["header__catalogue-link"]}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.header__buttons}>
                <Button className={styles.header__btn}>
                    <span>Корзина</span>
                    <span className={styles["header__btn-badge"]}>
                        <CartIcon />
                    </span>
                </Button>
                <Button className={styles.header__btn}>
                    <span>Войти</span>
                    <span className={styles["header__btn-badge"]}>
                        <UserIcon />
                    </span>
                </Button>
            </div>
        </div>
    )
}