"use client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} dark:bg-[--body]`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
