"use client"
import React, { useState, useEffect } from 'react';
import { ICentroCusto, IDepartamento } from './type';

const Departamento: React.FC = () => {
  const [departamentos, setDepartamentos] = useState<IDepartamento[]>([]);
  const [centrosCusto, setCentrosCusto] = useState<ICentroCusto[]>([]);
  const [selectedCentroCusto, setSelectedCentroCusto] = useState<number | null>(null);
  const [selectedDepartamento, setSelectedDepartamento] = useState<number | null>(null);
  const [centroCustoOpen, setCentroCustoOpen] = useState<number | null>(null);

  useEffect(() => {
    const fetchCentrosCusto = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/centros-custo/');
        const data = await response.json();
        setCentrosCusto(data);
      } catch (error) {
        console.error('Erro ao buscar centros de custo:', error);
      }
    };

    fetchCentrosCusto();
  }, []);

  const handleConsulta = async () => {
    try {
      let url = 'http://localhost:8000/api/departamentos/';

      if (selectedCentroCusto !== null) {
        url += `centro-custo/${selectedCentroCusto}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setDepartamentos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Erro ao buscar departamentos:', error);
    }
  };

  return (
    <div className='block left-20 relative bg-white dark:bg-[--body]'>
      <div className="flex justify-start text-[36px] font-semibold my-8 top-6 bg-white dark:bg-[--body] w-full h-14 ">
        <span className="flex justify-start items-center text-[#77C26D] text-center w-[428px] rounded-lg shadow-[0px 4px 10px 0px #C5C5C5]">
          Consulta Departamento
        </span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="inline-flex gap-6 bg-white w-full h-36 rounded-lg">
          <div className="bg-white w-[30rem] h-[5rem] rounded-lg">
            <label className='block text-xl' htmlFor="centro_custo">Centro de Custo</label>
            <select
              id="centroCusto"
              className='border-b border-black w-[29.93rem] h-[2.5rem]'
              onChange={(e) => setSelectedCentroCusto(Number(e.target.value))}
            >
              <option value="">Todos</option>
              {centrosCusto.map((centro) => (
                <option key={centro.codigo} value={centro.codigo}>{centro.descricao}</option>
              ))}
            </select>
          </div>
          <div className="bg-white w-[30rem] h-[5rem] rounded-lg"> 
            <label className='block text-xl' htmlFor="custo_departamento">Departamento</label>
            <select
              id="departamento"
              className='border-b border-black w-[29.93rem] h-[2.5rem]'
              onChange={(e) => setSelectedDepartamento(Number(e.target.value))}
            >
              <option value="">Todos</option>
              {Array.isArray(departamentos) && departamentos.map((departamento) => (
                <option key={departamento.codigo} value={departamento.codigo}>{departamento.departamento}</option>
              ))}
            </select>
          </div>
          <div className="relative top-[30px]">
            <button
              className='flex items-center px-4 py-2 bg-[#3F4444] text-white rounded hover:bg-green-500'
              onClick={handleConsulta}
            >
              <span>Consultar</span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-[93%]'>
        {Array.isArray(departamentos) && departamentos.length > 0 && (
          <div className="accordion">
            {centrosCusto
              .filter((centro) => 
                selectedCentroCusto === null || 
                departamentos.some((departamento) => departamento.codigo_centro_custo === centro.codigo)
              )
              .map((centro) => (
                <div key={centro.codigo} className="accordion-item mb-2">
                  <button
                    className="accordion-header bg-[#77C26D] py-2 px-4 rounded-t-lg w-full text-left"
                    onClick={() => setCentroCustoOpen(centroCustoOpen === centro.codigo ? null : centro.codigo)}
                  >
                    {centro.descricao}
                  </button>
                  <div className={`accordion-body ${centroCustoOpen === centro.codigo ? 'block' : 'hidden'} bg-green-100 py-2 px-4`}>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead>
                        <tr>
                          <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Departamento</th>
                          <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Número Departamento</th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200'>
                        {departamentos
                          .filter((departamento) => departamento.codigo_centro_custo === centro.codigo)
                          .map((departamento) => (
                            <tr key={departamento.codigo}>
                              <td className='px-6 py-4 whitespace-nowrap'>{departamento.departamento}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{departamento.codigo}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className='mt-4 flex justify-end gap-2 relative right-40'>
        <button className='px-4 py-2 bg-[#3F4444] text-white rounded hover:bg-green-500'>+ Importação</button>
        <button className='px-4 py-2 bg-[#3F4444] text-white rounded hover:bg-green-500'>Gerar Relatório</button>
        <button className='px-4 py-2 bg-[#3F4444] text-white rounded hover:bg-green-500'>+ Cadastrar Centro Custo</button>
        <button className='px-4 py-2 bg-[#3F4444] text-white rounded hover:bg-green-500'>+ Cadastrar Departamento</button>
      </div>
    </div>
  );
};

export default Departamento;
