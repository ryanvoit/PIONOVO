import clsx from "clsx"
import { Button } from "@/shared/ui/button"
import { HEADER_BTN_CONTENT } from "../config/content"
import styles from "./HeaderBtn.module.css"
import type { HeaderBtnProps } from "./HeaderBtn.props"

export function HeaderBtn({ role, className, ...rest }: HeaderBtnProps) {
    const { label, Icon } = HEADER_BTN_CONTENT[role]

    return (
        <Button className={clsx(styles.header__btn, className)} {...rest}>
            <span className={styles["header__btn-label"]}>{label}</span>
            <span className={styles["header__btn-badge"]}>
                <Icon />
            </span>
        </Button>
    )
}
