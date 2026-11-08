import { Icon } from "../../shared/ui/icon/Icon"
import buttonStyles from "../../shared/ui/button/Button.module.css"
import { cx } from "../../shared/lib/cx"
import styles from "./HeaderComponent.module.css"

export default function HeaderComponent() {
    return (
        <div className="container">
            <div className={styles.header__wrapper}>
                <HeaderInfo />
                <div className={styles.header__main}>
                    <div className={styles["header__main-wrapper"]}>
                        <a className={styles["header__main-link"]} href="#">
                            <span>P.I.O.N.O.V.O.</span>
                        </a>
                        <div className={styles["header__catalogue-wrapper"]}>
                            <button className={cx(styles["header__btn-catalogue"], buttonStyles.btn, buttonStyles["btn--secondary"])}>
                                <span>Каталог</span>
                                <Icon role='burger' className={buttonStyles.btn__icon}/>
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
                        <button className={cx(styles.header__btn, buttonStyles.btn)}>
                            <span>Корзина</span>
                            <div className={buttonStyles["btn__icon-wrapper"]}>
                                <Icon role='cart' className={buttonStyles.btn__icon}/>
                            </div>
                        </button>
                        <button className={cx(styles.header__btn, buttonStyles.btn)}>
                            <span>Войти</span>
                            <div className={buttonStyles["btn__icon-wrapper"]}>
                                <Icon role='user' className={buttonStyles.btn__icon}/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={styles.header__bottom}>
                    <nav className={cx(styles["header__nav-menu"], styles["main-nav"])}>
                        <ul className={styles["main-nav__list"]}>
                            <li className={styles["main-nav__item"]}>
                                <a className={styles["main-nav__link"]} href="#">Доставка</a>
                            </li>
                            <li className={styles["main-nav__item"]}>
                                <a className={styles["main-nav__link"]} href="#">Оплата</a>
                            </li>
                            <li className={styles["main-nav__item"]}>
                                <a className={styles["main-nav__link"]} href="#">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header__contacts}>
                        <a className={cx(styles.header__link, styles["header__link--contrast"])} href="tel:+79312810922">
                            <Icon role='phone' className={styles.header__icon}/>
                            <span>+7 (931) 281-09-22</span>
                        </a>
                        <a className={cx(styles.header__link, styles["header__link--contrast"])} href="mailto:hello@pionovo.ru">
                            <Icon role='email' className={styles.header__icon}/>
                            <span>hello@pionovo.ru</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function HeaderInfo() {
    return (
        <div className={styles.header__info}>
            <ul className={styles["header__advantage-list"]}>
                <li className={styles["header__advantage-item"]}>Свежие пионы</li>
                <li className={styles["header__advantage-item"]}>Подарки к букетам</li>
            </ul>
            <div className={styles["header__info-wrapper"]}>
                <a className={styles.header__link} href="#">
                    <Icon className={styles.header__icon} role='location' />
                    <span>Санкт-Петербург, Проспект Обуховской обороны, 73; Метро &laquo;Елизаровская&raquo;</span>
                </a>
                <ul className={cx(styles.header__social, styles.social)}>
                    <li className={styles.social__item}>
                        <a className={styles.social__link} href="#">
                            <Icon className={styles.social__icon} role='instagram' />
                        </a>
                    </li>
                    <li className={styles.social__item}>
                        <a className={styles.social__link} href="#">
                            <Icon className={styles.social__icon} role='telegram' />
                        </a>
                    </li>
                    <li className={styles.social__item}>
                        <a className={styles.social__link} href="#">
                            <Icon className={styles.social__icon} role='whats-app' />
                        </a>
                    </li>
                    <li className={styles.social__item}>
                        <a className={styles.social__link} href="#">
                            <Icon className={styles.social__icon} role='vk' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
)}
