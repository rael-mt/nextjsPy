"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { usePathname } from "next/navigation";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import PrivateRoute from "@/components/PrivateRoute";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isPublicpage = checkIsPublicRoute(pathname!)

  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className}`}>
          {isPublicpage && children}
          {!isPublicpage && <PrivateRoute>{children}</PrivateRoute>}
        </body>
      </ThemeProvider>
    </html>
  );
}
