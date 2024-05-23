import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

const departamento: React.FC = () => {
  return (
    <>
      <div className='block left-20 relative'>
        <div className="flex justify-start text-[36px] font-semibold my-8 top-6 bg-white w-full h-14 ">
          <span className="flex justify-start items-center text-[#77C26D] text-center w-[428px] rounded-lg shadow-[0px 4px 10px 0px #C5C5C5]">
            Consulta Departamento
          </span>
        </div>
        <div className="inline-flex gap-6 bg-white w-full h-64 rounded-lg">

          <div className="bg-white w-[30rem] h-[5rem] rounded-lg">

            <label className='block text-xl' htmlFor="custo_departamento">Departamento</label>
            <input className='border-b border-black w-[29.93rem] h-[2.5rem]' type="text" value="" />

          </div>

          <div className=" bg-white w-[30rem] h-[5rem] rounded-lg">
            <label className='block text-xl' htmlFor="custo_departamento">Centro de Custo</label>
            <input className='border-b border-black w-[29.93rem] h-[2.5rem]' type="text" value="" />
          </div>
          <div className="flex items-end py-5 bg-white w-[30rem] h-[5rem] rounded-lg">
            <button className='w-[8.93rem] h-[2.5rem] rounded-[0.9375rem] bg-[#3F4444] text-white hover:bg-[#77C26D]' type='button'>
            <MagnifyingGlass size={22} />
              Consultar
              </button>
          </div>

        </div>
      </div >
    </>
  );
};

export default departamento;