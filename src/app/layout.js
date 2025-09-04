import './reset.css';
import "./globals.scss";

export const metadata = {
  title: "Portfolio ASiaka",
  description: "Recherche d'alternance - Concepteur d'application web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
