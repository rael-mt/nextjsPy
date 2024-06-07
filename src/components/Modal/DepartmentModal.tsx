import React from 'react';

interface DepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  department: any; // Ajuste o tipo conforme necessário
}

const DepartmentModal: React.FC<DepartmentModalProps> = ({ isOpen, onClose, department }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-1/2">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>X</button>
        <h2 className="text-2xl mb-4">ALTERAR DEPARTAMENTO</h2>
        <div className="space-y-4">
          <div>
            <label>Centro de Custo</label>
            <input type="text" className="input" value={department.centroCusto} readOnly />
          </div>
          <div>
            <label>Departamento</label>
            <input type="text" className="input" value={department.departamento} readOnly />
          </div>
          <div>
            <label>Número Departamento</label>
            <input type="text" className="input" value={department.numeroDepartamento} readOnly />
          </div>
          {/* Adicione os outros campos conforme necessário */}
          <button className="bg-button px-4 py-2" onClick={onClose}>Alterar</button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentModal;
