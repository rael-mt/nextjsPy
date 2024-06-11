import { ReactNode } from 'react';
import {
  Plus,
  Download,
  Clock,
  Gear,
  Printer,
  CreditCard,
  Warning,
} from '@phosphor-icons/react';

type SubItem = {
  title: string;
  path: string;
};

type MenuItem = {
  title: string;
  icon: ReactNode;
  subItems: SubItem[];
};

export const menuItems: MenuItem[] = [
  {
    title: 'Cadastros/Consultas',
    icon: <Plus size={22} />,
    subItems: [
      { title: 'Bloqueio Rede', path: '/cadastrosConsultas/bloqueioRede' },
      { title: 'Cartão', path: '/cadastrosConsultas/cartao' },
      { title: 'Centro de Custo e Departamento', path: '/cadastrosConsultas/centroCustoDepartamento' },
      { title: 'Condutores', path: '/cadastrosConsultas/condutores' },
      { title: 'Lotação do Cartão', path: '/cadastrosConsultas/lotacaoDoCartao' },
      { title: 'Preço Negociado de Produto', path: '/cadastrosConsultas/precoNegociado' },
    ],
  },
  {
    title: 'Faturamento',
    icon: <Download size={22} />,
    subItems: [
      { title: 'Relatórios', path: '/faturamento/relatorios' },
      { title: 'Histórico', path: '/faturamento/historico' },
    ],
  },
  {
    title: 'Gráficos',
    icon: <Clock size={22} />,
    subItems: [
      { title: 'Análise', path: '/graficos/analise' },
      { title: 'Comparação', path: '/graficos/comparacao' },
    ],
  },
  {
    title: 'Operacional',
    icon: <Gear size={22} />,
    subItems: [
      { title: 'Configuração', path: '/operacional/configuracao' },
      { title: 'Manutenção', path: '/operacional/manutencao' },
    ],
  },
  {
    title: 'Relatórios',
    icon: <Printer size={22} />,
    subItems: [
      { title: 'Finanças', path: '/relatorios/financas' },
      { title: 'Desempenho', path: '/relatorios/desempenho' },
    ],
  },
  {
    title: 'Serviços',
    icon: <CreditCard size={22} />,
    subItems: [
      { title: 'Assinatura', path: '/servicos/assinatura' },
      { title: 'Consulta', path: '/servicos/consulta' },
    ],
  },
  {
    title: 'Vencimentos',
    icon: <Warning size={22} />,
    subItems: [
      { title: 'Pagamentos', path: '/vencimentos/pagamentos' },
      { title: 'Atrasados', path: '/vencimentos/atrasados' },
    ],
  },
];
