"use client"
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  const router = useRouter()

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-[#3f4444]">
        <h1 className="text-white text-3xl">Bem-vindo!</h1>
      </div>
    </Layout>
  )
}

export default HomePage
