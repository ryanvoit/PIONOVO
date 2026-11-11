import { BurgerIcon } from "@/shared/assets/icons"
import { Button } from "@/shared/ui/button"
import { CATALOGUE_LINKS } from "../config/content"
import styles from "./HeaderCatalogue.module.css"

export function HeaderCatalogue() {
    return (
        <div className={styles["header__catalogue-wrapper"]}>
            <Button
                variant="secondary"
                className={styles["header__btn-catalogue"]}
            >
                <span>Каталог</span>
                <BurgerIcon />
            </Button>
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
