import clsx from "clsx"
import { LocationIcon } from "@/shared/assets/icons"
import { SocialLinks } from "@/shared/ui/social-links"
import { LOCATIONS } from "../../../config/content"
import { formatAddress, getMapLink } from "../../../lib"
import headerStyles from "@/widgets/header/ui/HeaderComponent.module.css"
import styles from "./HeaderTopRight.module.css"

export function HeaderTopRight() {
    const mainAddress = formatAddress(LOCATIONS.main)

    return (
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
    )
}
