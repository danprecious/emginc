import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/globals/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EmgincMarketing",
  description: "Your business gateway to massive growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primaryContrast text-primary`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
