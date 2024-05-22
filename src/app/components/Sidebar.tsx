import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Download,
  Clock,
  Gear,
  Printer,
  CreditCard,
  Warning,
  CaretRight,
  CaretDown,
} from '@phosphor-icons/react';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleMenuClick = (menu: string) => {
    if (openMenu === menu) {
      setOpenMenu(null); // Fecha o menu se já estiver aberto
    } else {
      setOpenMenu(menu); // Abre o novo menu e fecha os outros
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-black text-white h-full fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex items-center justify-center h-16">
        <span className="text-xl font-bold">{isExpanded ? 'Vólus' : 'V'}</span>
      </div>
      <ul className="mt-2">
        {/* Cadastros/Consultas */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleMenuClick('cadastrosConsultas')}
          >
            <div className="flex items-center space-x-2">
              <Plus size={22} />
              {isExpanded && <span>Cadastros/Consultas</span>}
            </div>
            {isExpanded && (
              openMenu === 'cadastrosConsultas' ? (
                <CaretDown size={16} />
              ) : (
                <CaretRight size={16} />
              )
            )}
          </div>
          {isExpanded && openMenu === 'cadastrosConsultas' && (
            <ul className="ml-8">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/cadastrosConsultas/bloqueioRede">Bloqueio rede</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/cadastrosConsultas/cartao">Cartão</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/cadastrosConsultas/centroDeCusto">Centro de custo e de...</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/cadastrosConsultas/condutores">Condutores</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/cadastrosConsultas/lotacaoDoCartao">Lotação do cartão</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/cadastrosConsultas/precoNegociado">Preço negociado de p...</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Faturamento */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleMenuClick('faturamento')}
          >
            <div className="flex items-center space-x-2">
              <Download size={22} />
              {isExpanded && <span>Faturamento</span>}
            </div>
            {isExpanded && (
              openMenu === 'faturamento' ? (
                <CaretDown size={16} />
              ) : (
                <CaretRight size={16} />
              )
            )}
          </div>
          {isExpanded && openMenu === 'faturamento' && (
            <ul className="ml-8">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/faturamento/relatorios">Relatórios</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/faturamento/historico">Histórico</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Gráficos */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleMenuClick('graficos')}
          >
            <div className="flex items-center space-x-2">
              <Clock size={22} />
              {isExpanded && <span>Gráficos</span>}
            </div>
            {isExpanded && (
              openMenu === 'graficos' ? (
                <CaretDown size={16} />
              ) : (
                <CaretRight size={16} />
              )
            )}
          </div>
          {isExpanded && openMenu === 'graficos' && (
            <ul className="ml-8">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/graficos/analise">Análise</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/graficos/comparacao">Comparação</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Operacional */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleMenuClick('operacional')}
          >
            <div className="flex items-center space-x-2">
              <Gear size={22} />
              {isExpanded && <span>Operacional</span>}
            </div>
            {isExpanded && (
              openMenu === 'operacional' ? (
                <CaretDown size={16} />
              ) : (
                <CaretRight size={16} />
              )
            )}
          </div>
          {isExpanded && openMenu === 'operacional' && (
            <ul className="ml-8">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/operacional/configuracao">Configuração</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/operacional/mantenimiento">Manutenção</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Relatórios */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleMenuClick('relatorios')}
          >
            <div className="flex items-center space-x-2">
              <Printer size={22} />
              {isExpanded && <span>Relatórios</span>}
            </div>
            {isExpanded && (
              openMenu === 'relatorios' ? (
                <CaretDown size={16} />
              ) : (
                <CaretRight size={16} />
              )
            )}
          </div>
          {isExpanded && openMenu === 'relatorios' && (
            <ul className="ml-8">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/relatorios/financas">Finanças</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/relatorios/desempenho">Desempenho</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Serviços */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleMenuClick('servicos')}
          >
            <div className="flex items-center space-x-2">
              <CreditCard size={22} />
              {isExpanded && <span>Serviços</span>}
            </div>
            {isExpanded && (
              openMenu === 'servicos' ? (
                <CaretDown size={16} />
              ) : (
                <CaretRight size={16} />
              )
            )}
          </div>
          {isExpanded && openMenu === 'servicos' && (
            <ul className="ml-8">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/servicos/assinatura">Assinatura</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/servicos/consulta">Consulta</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Vencimentos */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleMenuClick('vencimentos')}
          >
            <div className="flex items-center space-x-2">
              <Warning size={22} />
              {isExpanded && <span>Vencimentos</span>}
            </div>
            {isExpanded && (
              openMenu === 'vencimentos' ? (
                <CaretDown size={16} />
              ) : (
                <CaretRight size={16} />
              )
            )}
          </div>
          {isExpanded && openMenu === 'vencimentos' && (
            <ul className="ml-8">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/vencimentos/pagamentos">Pagamentos</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/vencimentos/atrasados">Atrasados</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
