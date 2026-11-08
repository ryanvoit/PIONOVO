import FooterComponent from "../../widgets/FooterComponent/FooterComponent";
import HeaderComponent from "../../widgets/HeaderComponent/HeaderComponent";

export default function HomePage() {
  return (
    <>
    <div className="container">
      <HeaderComponent/>
    </div>
    <div className="container">
      <div className="main-page">
        <p className="ffff">
          Home Page
        </p>
      </div>
    </div>
    <div className="container">
      <FooterComponent/>
    </div>
    </>
  )
}
