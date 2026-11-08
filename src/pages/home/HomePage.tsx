import FooterComponent from "../../widgets/footer/FooterComponent";
import HeaderComponent from "../../widgets/header/HeaderComponent";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
    <HeaderComponent/>
    <div className="container">
      <div className={styles["main-page"]}>
        <p className={styles.ffff}>
          Home Page
        </p>
      </div>
    </div>
    <FooterComponent/>
    </div>
  )
}
