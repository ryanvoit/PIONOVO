import clsx from "clsx"
// import { PhoneIcon } from "@/shared/assets/icons"
import { PHONE, PHONE_HREF } from "@/shared/config"
import headerStyles from "@/widgets/header/ui/HeaderComponent.module.css"
import styles from "./HeaderContacts.module.css"

export function HeaderContacts() {
    return (
        <div className={styles.header__contacts}>
            <a
                className={clsx(headerStyles.header__link, headerStyles["header__link--contrast"])}
                href={PHONE_HREF}
            >
                <span className={styles["header__phone-number"]}>{PHONE}</span>
            </a>
            <div>
                {/*<PhoneIcon className={headerStyles.header__icon} /> */}
                <span className={styles["header__contacts-text"]}>Заказ по телефону 24/7</span>
            </div>
        </div>
    )
}
