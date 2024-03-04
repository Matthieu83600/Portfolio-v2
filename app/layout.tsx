import { Inter } from "next/font/google";
import { ThemeContext } from "./providers";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Metadata } from "./components/Metadata";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { ...Metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" suppressHydrationWarning>
      <body className="${inter.className} bg-slate-50 dark:bg-slate-950 mx-8">
        <ThemeContext>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
