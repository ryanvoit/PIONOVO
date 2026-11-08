import { Icon } from "../../shared/ui/icon/Icon"
import Container from "../../shared/ui/container/Container"
import { cx } from "../../shared/lib/cx"
import styles from "./FooterComponent.module.css"

export default function FooterComponent() {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__description}>
                        <p className={styles.footer__text}>Мы - P.I.O.N.O.V.O.</p>
                    </div>
                    <div className={styles.footer__contacts}>
                        <h2 className={styles.footer__heading}>Контакты</h2>
                        <a className={styles.footer__link} href="#">
                            <Icon role='phone' className={styles.footer__icon}/>
                            <span>+7 (931) 281-09-22</span>
                        </a>
                        <a className={styles.footer__link} href="#">
                            <Icon role='email' className={styles.footer__icon}/>
                            <span>hello@pionovo.ru</span>
                        </a>
                        <ul className={cx(styles.header__social, styles.social, styles["social--footer"])}>
                            <li className={styles.social__item}>
                                <a className={styles.social__link} href="#">
                                    <Icon role='instagram' className={styles.social__icon}/>
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <a className={styles.social__link} href="#">
                                    <Icon role='telegram' className={styles.social__icon}/>
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <a className={styles.social__link} href="#">
                                    <Icon role='whats-app' className={styles.social__icon}/>
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <a className={styles.social__link} href="#">
                                    <Icon role='vk' className={styles.social__icon}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className={styles["footer__advantages-list"]}>
                        <li className={styles["footer__advantages-item"]}>
                            <p className={styles["footer__advantages-text"]}>Доставка по всему городу</p>
                        </li>
                        <li className={styles["footer__advantages-item"]}>
                            <p className={styles["footer__advantages-text"]}>Свежие пионы</p>
                        </li>
                        <li className={styles["footer__advantages-item"]}>
                            <p className={styles["footer__advantages-text"]}>Работаем 24/7</p>
                        </li>
                        <li className={styles["footer__advantages-item"]}>
                            <p className={styles["footer__advantages-text"]}>Что-то ещё</p>
                        </li>
                    </ul>

                </div>
            </Container>
        </div>
    )
}
