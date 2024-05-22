import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Sidebar from '@/app/components/Sidebar';

const BloqueioRede: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="flex-grow p-4">
          <h1 className="text-2xl font-bold">Bloqueio de Rede</h1>
          <p>Conteúdo da página de Bloqueio de Rede...</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BloqueioRede;
