import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ModalProvider } from "../components/ui/animated-modal";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../provider/UserContextProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can adjust the weights based on your design needs
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "COS - Cycle of Samsara",
  description: "Online Thrift Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ModalProvider>
          <UserContextProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <Toaster />
              <main className="flex-grow">
                <div className="mx-auto mt-20">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </UserContextProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
