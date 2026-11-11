import { Link } from "react-router"
import styles from "./HeaderMainLink.module.css"
import { Pionovo } from "@/shared/assets/icons"
import { COMPANY_NAME } from "../config/content"

export function HeaderMainLink() {
    return (
        <Link className={styles["header__main-link"]} to="/">
            <Pionovo className={styles["header__main-link-icon"]} />
            <span className={styles["header__main-link-text"]}>{COMPANY_NAME}</span>
        </Link>
    )
}
