import { HeaderBtn } from "@/widgets/header/ui/HeaderBtn"
import { CATALOGUE_LINKS } from "../config/content"
import styles from "./HeaderCatalogue.module.css"

export function HeaderCatalogue() {
    return (
        <div className={styles["header__catalogue-wrapper"]}>
            <HeaderBtn role="catalogue" />
            <ul className={styles["header__catalogue-list"]}>
                {CATALOGUE_LINKS.map((label) => (
                    <li key={label}>
                        <a href="#" className={styles["header__catalogue-link"]}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
