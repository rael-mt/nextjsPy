"use client"

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/legacy/image';

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('Token inválido ou ausente');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não correspondem');
      return;
    }

    if (!token) {
      setError('Token ausente');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/reset-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, new_password: password }),
      });

      if (response.ok) {
        setMessage('Senha atualizada com sucesso');
        setTimeout(() => {
          router.push('auth/login');
        }, 3000);
      } else {
        const data = await response.json();
        setError(data.detail);
      }
    } catch (err) {
      setError('Ocorreu um erro. Por favor, tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex bg-[#3f4444] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/logo.svg" sizes="100%" layout="fill" objectFit="cover" className='w-full' alt="bgLogo"></Image>
      </div>
      <div className="max-w-md w-full space-y-8 z-10">
        <div className='flex items-center justify-center'>
          <Image src="/volus_frotas.svg" alt="Logo" width={233} height={100}></Image>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Redefinir Senha</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='flex items-baseline border-b-[3px] border-b-[#6ED761] mb-3'>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none bg-[#3f4444] rounded-none relative block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-xl"
                placeholder="Nova Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-baseline border-b-[3px] border-b-[#6ED761] mb-3'>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="appearance-none bg-[#3f4444] rounded-none relative block w-full px-3 py-2 mb-3 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-xl"
                placeholder="Confirmar Nova Senha"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
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
              Redefinir Senha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
