import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import AnnoucmentBar from "@/components/AnnoucmentBar/Index";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <AnnoucmentBar Message={"Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"}></AnnoucmentBar>
        <Header/>
        </header>
        <main className="main mx-32 h-min-[90vh] mt-6">
        {children}
        </main>
        <footer>
        <Footer/>
        </footer>
      </body>
    </html>
  );
}
