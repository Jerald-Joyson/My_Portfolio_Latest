import { Outfit } from "next/font/google";
import "./globals.css";
//compoments
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
//themeprovider
import { ThemeProvider } from "@/components/themeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Jerald",
  description: "Created by Jerald Joyson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
