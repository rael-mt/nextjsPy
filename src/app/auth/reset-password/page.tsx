"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '../../utils/api';
// import { User, Mail } from '@phosphor-icons/react';
import Image from 'next/image';


const ResetPasswordPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        console.log(username, email)
      await api.sendResetEmail(username, email);
      setMessage('Email de redefinição de senha enviado com sucesso!');
      setTimeout(() => {
        router.push('/auth/login');
      }, 10000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#3f4444] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/logo.svg" alt="bgLogo" layout="fill" objectFit="cover" className="w-full" />
      </div>
      <div className="max-w-md w-full space-y-8 z-10">
        <div className="flex items-center justify-center">
          <Image src="/volus_frotas.svg" alt="Logo" width={233} height={100} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Altera Senha Usuário</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex items-baseline border-b-[3px] border-b-[#6ED761] mb-3">
              {/* <User size={22} /> */}
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none bg-[#3f4444] rounded-none relative block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-xl"
                placeholder="Nome de usuário"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-baseline border-b-[3px] border-b-[#6ED761] mb-3">
              {/* <Mail size={22} /> */}
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none bg-[#3f4444] rounded-none relative block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-xl"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
          {message && <p className="mt-2 text-green-600 text-sm">{message}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border-[3px] border-[#6ED761] text-sm font-medium rounded-md text-white bg-[#3f4444] hover:bg-[#6ED761] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enviar nova senha
            </button>
          </div>
        </form>
        <div className="text-center">
          <a href="/auth/login" className="text-sm text-gray-500 hover:text-gray-400">Login usuário</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
