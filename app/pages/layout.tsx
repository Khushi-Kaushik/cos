import { ModalProvider } from "../components/ui/animated-modal";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../provider/UserContextProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export default function ComingSoonLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <ModalProvider>
        <UserContextProvider>
        <html lang="en">
          <body
            className={`${poppins.variable} antialiased`}
          >
           
            <Toaster/>
            {children}
            
            </body>
          </html>
        </UserContextProvider>
      </ModalProvider>
    );
  }
  