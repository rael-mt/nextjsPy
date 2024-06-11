"use client"
import React, { useState, useEffect } from 'react';
import { ICentroCusto, IDepartamento } from './type';
import DepartmentModal from '@/components/Modal/DepartmentModal';

const Departamento: React.FC = () => {
  const [departamentos, setDepartamentos] = useState<IDepartamento[]>([]);
  const [centrosCusto, setCentrosCusto] = useState<ICentroCusto[]>([]);
  const [selectedCentroCusto, setSelectedCentroCusto] = useState<number | null>(null);
  const [selectedDepartamento, setSelectedDepartamento] = useState<number | null>(null);
  const [centroCustoOpen, setCentroCustoOpen] = useState<number | null>(null);
  const [consultaFeita, setConsultaFeita] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState<IDepartamento | null>(null);

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
      setConsultaFeita(true); // Define que a consulta foi feita
    } catch (error) {
      console.error('Erro ao buscar departamentos:', error);
    }
  };
  const handleDepartmentClick = (department: IDepartamento) => {
    setCurrentDepartment(department);
    setIsModalOpen(true);
  };

  const handleCentroCustoChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const centroCustoId = Number(e.target.value) || null;
    setSelectedCentroCusto(centroCustoId);
    setSelectedDepartamento(null);
    setConsultaFeita(false); // Resetar consulta ao mudar centro de custo

    if (centroCustoId !== null) {
      try {
        const response = await fetch(`http://localhost:8000/api/departamentos/centro-custo/${centroCustoId}`);
        const data = await response.json();
        setDepartamentos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Erro ao buscar departamentos:', error);
      }
    } else {
      setDepartamentos([]);
    }
  };

  return (
    <div className='block left-24 relative bg-white dark:bg-[--body]'>
      <div className="flex justify-start text-[36px] font-semibold my-8 top-6 bg-white dark:bg-[--body] w-full h-14 ">
        <span className="flex justify-start items-center text-[#77C26D] text-center w-[428px] rounded-lg shadow-[0px 4px 10px 0px #C5C5C5]">
          Consulta Departamento
        </span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="inline-flex gap-6 bg-white dark:bg-[--body] w-full h-36 rounded-lg">
          <div className="bg-white dark:bg-[--body] w-[30rem] h-[5rem] rounded-lg">
            <label className='block text-xl' htmlFor="centro_custo">Centro de Custo</label>
            <select
              id="centroCusto"
              className='input-focus border dark:border-b-white dark:text-white w-[29.93rem] h-[2.5rem]'
              onChange={handleCentroCustoChange}
            >
              <option className='dark:bg-[--body]' value="">Todos</option>
              {centrosCusto.map((centro) => (
                <option className='dark:bg-[--body]' key={centro.codigo} value={centro.codigo}>{centro.descricao}</option>
              ))}
            </select>
          </div>
          <div className="bg-white dark:bg-[--body] w-[30rem] h-[5rem] rounded-lg"> 
            <label className='block text-xl' htmlFor="custo_departamento">Departamento</label>
            <select
              id="departamento"
              className='input-focus border dark:border-b-white dark:text-white w-[29.93rem] h-[2.5rem]'
              onChange={(e) => setSelectedDepartamento(Number(e.target.value) || null)}
              value={selectedDepartamento || ''}
            >
              <option className='dark:bg-[--body]' value="">Todos</option>
              {departamentos.map((departamento) => (
                <option className='dark:bg-[--body]' key={departamento.codigo} value={departamento.codigo}>{departamento.departamento}</option>
              ))}
            </select>
          </div>
          <div className="relative top-[30px]">
            <button
              className='flex items-center px-4 py-2 bg-button'
              onClick={handleConsulta}
            >
              <span>Consultar</span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-[93%]'>
        {consultaFeita && (
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
                  <div className={`accordion-body ${centroCustoOpen === centro.codigo ? 'block' : 'hidden'} bg-gray-500 py-2 px-4`}>
                    <table className='min-w-full divide-y '>
                      <thead>
                        <tr>
                          <th className='px-6 py-3 bg-[--body] text-left text-xs font-medium text-[#77C26D] uppercase tracking-wider rounded-s-2xl'>Departamento</th>
                          <th className='px-6 py-3 bg-[--body] text-left text-xs font-medium text-[#77C26D] uppercase tracking-wider rounded-e-2xl'>Número Departamento</th>
                        </tr>
                      </thead>
                      <tbody className='bg-[--body] divide-y '>
                        {departamentos
                          .filter((departamento) =>
                            departamento.codigo_centro_custo === centro.codigo &&
                            (selectedDepartamento === null || departamento.codigo === selectedDepartamento)
                          )
                          .map((departamento) => (
                            <tr key={departamento.codigo} onClick={() => handleDepartmentClick(departamento)}>
                              <td className='px-6 py-3 text-xs whitespace-nowrap rounded-s-2xl'>{departamento.departamento}</td>
                              <td className='px-6 py-3 text-xs whitespace-nowrap rounded-e-2xl'>{departamento.codigo}</td>
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
        <button className='bg-button px-4 py-2'>+ Importação</button>
        <button className='bg-button px-4 py-2'>Gerar Relatório</button>
        <button className='bg-button px-4 py-2'>+ Cadastrar Centro Custo</button>
        <button className='bg-button px-4 py-2'>+ Cadastrar Departamento</button>
      </div>
      {currentDepartment && (
        <DepartmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          department={currentDepartment}
        />
      )}
    </div>
  );
};

export default Departamento;
