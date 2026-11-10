import { Container } from "@/shared/ui/container"
import { HeaderBottom } from "./HeaderBottom"
import { HeaderMiddle } from "./HeaderMiddle"
import { HeaderTop } from "./HeaderTop"
import styles from "./HeaderComponent.module.css"

export default function HeaderComponent() {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <HeaderTop />
                    <HeaderMiddle />
                    <HeaderBottom />
                </div>
            </Container>
        </div>
    )
}
