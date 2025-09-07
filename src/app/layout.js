import './reset.css';
import "./globals.scss";

export const metadata = {
  title: "Portfolio ASiaka",
  description: "Recherche d'alternance - Concepteur d'application web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
