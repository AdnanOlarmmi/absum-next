import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Absum Hub",
  description: "3-in-1 MULTIFUNCTIONAL VEGETABLE CUTTER",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
