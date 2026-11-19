import { Container } from "@/shared/ui/container";
import FooterComponent from "@/widgets/footer/FooterComponent";
import HeaderComponent from "@/widgets/header/ui/HeaderComponent";

export default function DeliveryPage() {
  return (
      <div>
      <HeaderComponent />
      <main>
        <Container>
          <div>
            Delivery Page 
          </div>
        </Container>
      </main>
      <FooterComponent />
    </div>
  )
}
