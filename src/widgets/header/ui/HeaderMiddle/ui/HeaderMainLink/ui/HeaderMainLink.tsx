import { Link } from "react-router"
import { COMPANY_NAME, PATHS } from "@/shared/config"
import { Pionovo } from "@/shared/assets/icons"
import styles from "./HeaderMainLink.module.css"

export function HeaderMainLink() {
    return (
        <Link className={styles["header__main-link"]} to={PATHS.HOME}>
            <Pionovo className={styles["header__main-link-icon"]} />
            <span className={styles["header__main-link-text"]}>{COMPANY_NAME}</span>
        </Link>
    )
}
