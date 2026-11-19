import { Container } from "@/shared/ui/container";
import FooterComponent from "@/widgets/footer/FooterComponent";
import HeaderComponent from "@/widgets/header/ui/HeaderComponent";

export default function CataloguePage() {
    return (
      <div>
        <HeaderComponent />
        <main>
          <Container>
            <div>
              Catalogue Page
            </div>
          </Container>
        </main>
        <FooterComponent />
      </div>
    )
}
