import { Container } from "@/shared/ui/container";
import FooterComponent from "@/widgets/footer/FooterComponent";
import HeaderComponent from "@/widgets/header/ui/HeaderComponent";

export default function PaymentPage() {
  return (
    <div>
      <HeaderComponent />
      <main>
        <Container>
          <div>
            Payment Page
          </div>
        </Container>
      </main>
      <FooterComponent />
    </div>
  )
}
