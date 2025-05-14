import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center w-full border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="relative">
          <span className="text-xl font-semibold text-[#0054A6]">AIOrtho</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          <Image
            src="/notification.png"
            alt="Notification Icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
          <Image
            src="/bp.png"
            alt="Profile"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}