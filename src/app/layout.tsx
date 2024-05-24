"use client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname && pathname.startsWith("/auth");

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {isAuthPage ? (
            children
          ) : (
            <Layout>
              {children}
            </Layout>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
