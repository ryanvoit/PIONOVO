import clsx from "clsx"
import { EmailIcon, PhoneIcon } from "@/shared/assets/icons"
import headerStyles from "@/widgets/header/ui/HeaderComponent.module.css"
import styles from "./HeaderContacts.module.css"

export function HeaderContacts() {
    return (
        <div className={styles.header__contacts}>
            <a
                className={clsx(headerStyles.header__link, headerStyles["header__link--contrast"])}
                href="tel:+79312810922"
            >
                <PhoneIcon className={headerStyles.header__icon} />
                <span>+7 (931) 281-09-22</span>
            </a>
            <a
                className={clsx(headerStyles.header__link, headerStyles["header__link--contrast"])}
                href="mailto:hello@pionovo.ru"
            >
                <EmailIcon className={headerStyles.header__icon} />
                <span>hello@pionovo.ru</span>
            </a>
        </div>
    )
}
