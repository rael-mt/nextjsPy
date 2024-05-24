export interface IDepartamento {
    codigo: number;
    filial: number;
    cliente: number;
    departamento: string;
    cnpj: string;
    razao_social: string;
    nome_fantasia: string;
    bairro: string;
    cidade: string;
    estado: string;
    codigo_centro_custo: number;
  }
  
  export interface ICentroCusto {
    codigo: number;
    descricao: string;
    filial: number;
    cliente: number;
  }
  