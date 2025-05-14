import Header from './components/Header';
import QuickMenu from './components/QuickMenu';
import TableSection from './components/TableSection';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col p-6 bg-gray-100 min-h-full ">
      <div className="flex items-center gap-3 mb-12 border-b border-gray-200">
        <img 
          src="/bp.png" 
          alt="Profile Icon" 
          className="w-12 h-12 rounded-full" 
        />
        <div >
          <h1 className="text-lg font-semibold text-gray-800">박의사님, 안녕하세요</h1>
          <p className="text-sm text-gray-500">의사 No - UH246001</p>
        </div>
      </div>
      <QuickMenu />
      <TableSection />
    </div>
  );
}