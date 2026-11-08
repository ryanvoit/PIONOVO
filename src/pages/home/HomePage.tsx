import FooterComponent from "../../widgets/footer/FooterComponent";
import HeaderComponent from "../../widgets/header/HeaderComponent";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <HeaderComponent />
      <main>
        <div className="container">
          <div className={styles["main-page"]}>
            Home Page
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  )
}
