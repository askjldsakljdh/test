import Sidebar from "@/components/layout/Sidebar";
import "./globals.scss";
import { Header } from "@/components/layout/Header";
import { GlobalPopupsProvider } from "@/providers/GlobalPopupsProvider";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalPopupsProvider>
          <div className="container">
            <Sidebar />
            <div className="content">
              <Header />
              <main className="main">
                {children}
              </main>
            </div>
            <MobileMenu />
          </div>
        </GlobalPopupsProvider>
        <div id="portal"></div>
      </body>
    </html>
  );
}

