"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/legacy/image';
import { SignIn } from '@phosphor-icons/react/dist/ssr/SignIn';
import { User } from '@phosphor-icons/react/dist/ssr/User';
import { LockKey } from '@phosphor-icons/react/dist/icons/LockKey';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attemptCount, setAttemptCount] = useState(0)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    const isAuthenticated = username === 'usuario' && password === 'senha'

    if (isAuthenticated) {
      router.push('/home')
    } else {
      setAttemptCount(prev => prev + 1)
      if (attemptCount >= 3) {
        setError('Sistema bloqueado por excesso de tentativas.')
      } else {
        setError('Credenciais inválidas. Por favor, tente novamente.')
      }
    }
  }

  return (
    <div className="min-h-screen flex bg-[#3f4444] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/logo.svg" sizes="100%" layout="fill" objectFit="cover" className='w-full' alt="bgLogo" />
      </div>
      <div className="max-w-md w-full space-y-8 z-10">
        <div className='flex items-center justify-center'>
          <Image src="/volus_frotas.svg" alt="Logo" width={233} height={100} />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='flex items-baseline border-b-[3px] border-b-[#6ED761] mb-3'>
              <User size={22} />
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none bg-[#3f4444] rounded-none relative block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-xl"
                placeholder="Nome de usuário"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className='flex items-baseline border-b-[3px] border-b-[#6ED761] mb-3'>
              <LockKey size={22} />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none bg-[#3f4444] rounded-none relative block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-xl"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border-[3px] border-[#6ED761] text-sm font-medium rounded-md text-white bg-[#3f4444] hover:bg-[#6ED761] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <SignIn size={22} />
              <span>Entrar</span>
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <a href="/esquecisenha" className="text-sm text-gray-400 hover:text-gray-200">
              Esqueci minha senha
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
