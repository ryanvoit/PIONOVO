import clsx from "clsx"
import { LocationIcon } from "@/shared/assets/icons"
import { LOCATIONS } from "@/shared/config"
import { formatAddress, getMapLink } from "@/shared/lib"
import headerStyles from "@/widgets/header/ui/HeaderComponent.module.css"
import styles from "./HeaderLocation.module.css"

export function HeaderLocation() {
    const mainAddress = formatAddress(LOCATIONS.main)

    return (
        <div className={styles["header__top-wrapper"]}>
            <a
                className={clsx(
                    headerStyles.header__link,
                    styles.header__link
                )}
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
        </div>
    )
}
