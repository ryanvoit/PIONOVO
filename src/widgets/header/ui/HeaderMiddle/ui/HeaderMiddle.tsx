import { Container } from "@/shared/ui/container"
import { SocialLinks } from "@/shared/ui/social-links"
import { HeaderContacts } from "./HeaderContacts"
import { HeaderMainLink } from "./HeaderMainLink"
import { HeaderMiddleButtons } from "./HeaderMiddleButtons"
import { HeaderSearchInput } from "./HeaderSearchInput"
import styles from "./HeaderMiddle.module.css"

export function HeaderMiddle() {
    return (
        <div className={styles.header__main}>
            <Container className={styles["header__main-inner"]}>
                <HeaderMainLink />
                <HeaderSearchInput />
                <div className={styles["header__main-wrapper"]}>
                    <HeaderContacts />
                    <SocialLinks />
                    <HeaderMiddleButtons />
                </div>
            </Container>
        </div>
    )
}
