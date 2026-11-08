import { LocationIcon } from "../../../../shared/assets/icons"
import { SocialLinks } from "../../../../shared/ui/social-links"
import styles from "./HeaderInfo.module.css"
import headerStyles from "../HeaderComponent.module.css"

export function HeaderInfo() {
    return (
        <div className={styles.header__info}>
            <ul className={styles["header__advantage-list"]}>
                <li className={styles["header__advantage-item"]}>Свежие пионы</li>
                <li className={styles["header__advantage-item"]}>Подарки к букетам</li>
            </ul>
            <div className={styles["header__info-wrapper"]}>
                <a className={headerStyles.header__link} href="#">
                    <LocationIcon className={headerStyles.header__icon} />
                    <span>Санкт-Петербург, Проспект Обуховской обороны, 73; Метро &laquo;Елизаровская&raquo;</span>
                </a>
                <SocialLinks />
            </div>
        </div>
)}
