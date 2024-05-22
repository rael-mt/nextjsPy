"use client"
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Bem-vindo à sua página inicial</h2>
        </div>
      </div>
    </div>
  )
}

export default HomePage
