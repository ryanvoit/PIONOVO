import { EmailIcon, PhoneIcon } from "../../shared/assets/icons"
import { Container } from "../../shared/ui/container"
import { SocialLinks } from "../../shared/ui/social-links"
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
                            <PhoneIcon className={styles.footer__icon}/>
                            <span>+7 (931) 281-09-22</span>
                        </a>
                        <a className={styles.footer__link} href="#">
                            <EmailIcon className={styles.footer__icon}/>
                            <span>hello@pionovo.ru</span>
                        </a>
                        <SocialLinks />
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
