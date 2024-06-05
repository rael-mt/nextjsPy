import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function PageComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-[#3f4444]">
          <Navbar />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow">{children}</main>
          </div>
          
        </div>
      </ThemeProvider>

    </>
  )
}
