"use client"
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '../../context/ThemeContext';

const HomePage: React.FC = () => {
  const router = useRouter()

  return (
    // <ThemeProvider>
      // <Layout>
        <div className="min-h-screen flex items-center justify-center dark:bg-[--body]">
          <h1 className="dark:text-[--text] text-3xl">Bem-vindo!</h1>
        </div>
      // </Layout>
    // </ThemeProvider>
  )
}

export default HomePage
