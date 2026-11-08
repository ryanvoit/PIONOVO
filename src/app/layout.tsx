import "@/styles/styles.scss"
import FooterComponent from "../../../last version/src/components/Footer/FooterComponent";
import HeaderComponent from "../../../last version/src/components/Header/HeaderComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <HeaderComponent />
        </header>
        <main>{children}</main>
        <footer className="footer">
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
