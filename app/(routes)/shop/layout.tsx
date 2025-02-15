import Navbar from "@/app/components/shop/Navbar";
import { ModalProvider } from "@/app/components/ui/animated-modal";
import { UserContextProvider } from "@/app/provider/UserContextProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <ModalProvider>
        <UserContextProvider>
          <Toaster />
          <div className="mx-auto mt-24" suppressHydrationWarning>
            <Navbar />
            {children}
          </div>
        </UserContextProvider>
      </ModalProvider>
    );
  }