import { Container } from "@/shared/ui/container"
import { HeaderAdvantages } from "./HeaderAdvantages"
import { HeaderLocation } from "./HeaderLocation"
import styles from "./HeaderTop.module.css"

export function HeaderTop() {
    return (
        <div className={styles.header__top}>
            <Container className={styles["header__top-inner"]}>
                <HeaderAdvantages />
                <HeaderLocation />
            </Container>
        </div>
    )
}
