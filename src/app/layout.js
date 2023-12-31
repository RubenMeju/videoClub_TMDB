import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VideoClub",
  description: "VideoClub digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-neutral-900`}>
        <NavBar />
        <div className="w-full 2xl:w-[50%] m-auto">{children}</div>
      </body>
    </html>
  );
}
