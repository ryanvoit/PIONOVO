import Container from "../../shared/ui/container/Container";
import FooterComponent from "../../widgets/footer/FooterComponent";
import HeaderComponent from "../../widgets/header/HeaderComponent";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <HeaderComponent />
      <main>
        <Container>
          <div className={styles["main-page"]}>
            Home Page
          </div>
        </Container>
      </main>
      <FooterComponent />
    </div>
  )
}
