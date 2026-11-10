import clsx from "clsx"
import { LocationIcon } from "@/shared/assets/icons"
import { SocialLinks } from "@/shared/ui/social-links"
import { ADVANTAGES, LOCATIONS } from "../config/content"
import { formatAddress, getMapLink } from "../lib"
import styles from "./HeaderTop.module.css"
import headerStyles from "@/widgets/header/ui/HeaderComponent.module.css"

export function HeaderTop() {
    const mainAddress = formatAddress(LOCATIONS.main)

    return (
        <div className={styles.header__top}>
            <ul className={styles["header__advantage-list"]}>
                {ADVANTAGES.map(({ id, text }) => (
                    <li key={id} className={styles["header__advantage-item"]}>
                        {text}
                    </li>
                ))}
            </ul>
            <div className={styles["header__top-wrapper"]}>
                <a
                    className={headerStyles.header__link}
                    href={getMapLink(LOCATIONS.main)}
                    target="_blank"
                    rel="noreferrer"
                    title={mainAddress}
                >
                    <LocationIcon
                        className={clsx(
                            headerStyles.header__icon,
                            headerStyles["header__icon--white"],
                        )}
                    />
                    <span>{mainAddress}</span>
                </a>
                <SocialLinks />
            </div>
        </div>
    )
}
