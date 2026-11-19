import { Container } from "@/shared/ui/container"
import { HeaderNav } from "./HeaderNav"
import styles from "./HeaderBottom.module.css"

export function HeaderBottom() {
    return (
        <div className={styles.header__bottom}>
            <Container className={styles["header__bottom-inner"]}>
                <HeaderNav />
            </Container>
        </div>
    )
}
