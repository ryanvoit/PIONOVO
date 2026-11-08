import clsx from "clsx"
import { BurgerIcon, CartIcon, EmailIcon, PhoneIcon, UserIcon } from "../../../shared/assets/icons"
import { Container } from "../../../shared/ui/container"
import buttonStyles from "../../../shared/ui/button/Button.module.css"
import { HeaderInfo } from "./HeaderInfo"
import { HeaderNav } from "./HeaderNav"
import styles from "./HeaderComponent.module.css"

export default function HeaderComponent() {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <HeaderInfo />
                    <div className={styles.header__main}>
                        <div className={styles["header__main-wrapper"]}>
                            <a className={styles["header__main-link"]} href="#">
                                <span>P.I.O.N.O.V.O.</span>
                            </a>
                            <div className={styles["header__catalogue-wrapper"]}>
                                <button className={clsx(styles["header__btn-catalogue"], buttonStyles.btn, buttonStyles["btn--secondary"])}>
                                    <span>Каталог</span>
                                    <BurgerIcon className={buttonStyles.btn__icon}/>
                                </button>
                                <ul className={styles["header__catalogue-list"]}>
                                    <li className={styles["header__catalogue-item"]}>
                                        <a href="#" className={styles["header__catalogue-link"]}>8 Марта</a>
                                    </li>
                                    <li className={styles["header__catalogue-item"]}>
                                        <a href="#" className={styles["header__catalogue-link"]}>14 Февраля</a>
                                    </li>
                                    <li className={styles["header__catalogue-item"]}>
                                        <a href="#" className={styles["header__catalogue-link"]}>Букет пионов</a>
                                    </li>
                                    <li className={styles["header__catalogue-item"]}>
                                        <a href="#" className={styles["header__catalogue-link"]}>Пионы поштучно</a>
                                    </li>
                                    <li className={styles["header__catalogue-item"]}>
                                        <a href="#" className={styles["header__catalogue-link"]}>Пионы в коробке</a>
                                    </li>
                                    <li className={styles["header__catalogue-item"]}>
                                        <a href="#" className={styles["header__catalogue-link"]}>Пионы в сумке</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.header__buttons}>
                            <button className={clsx(styles.header__btn, buttonStyles.btn)}>
                                <span>Корзина</span>
                                <div className={buttonStyles["btn__icon-wrapper"]}>
                                    <CartIcon className={buttonStyles.btn__icon}/>
                                </div>
                            </button>
                            <button className={clsx(styles.header__btn, buttonStyles.btn)}>
                                <span>Войти</span>
                                <div className={buttonStyles["btn__icon-wrapper"]}>
                                    <UserIcon className={buttonStyles.btn__icon}/>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.header__bottom}>
                        <HeaderNav />
                        <div className={styles.header__contacts}>
                            <a className={clsx(styles.header__link, styles["header__link--contrast"])} href="tel:+79312810922">
                                <PhoneIcon className={styles.header__icon}/>
                                <span>+7 (931) 281-09-22</span>
                            </a>
                            <a className={clsx(styles.header__link, styles["header__link--contrast"])} href="mailto:hello@pionovo.ru">
                                <EmailIcon className={styles.header__icon}/>
                                <span>hello@pionovo.ru</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
