import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Cartprovider from "@/components/Providers";
import ShoppingCartModal from "@/components/ShoppingCartModal";

export const metadata: Metadata = {
  title: "Shop Co",
  description: "Online shopping Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Cartprovider>
            <Navbar />
            <ShoppingCartModal />
            {children}
            <Footer />
          </Cartprovider>
        </ClerkProvider>
      </body>
    </html>
  );
}
