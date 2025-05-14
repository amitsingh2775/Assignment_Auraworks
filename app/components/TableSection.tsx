import Image from 'next/image';

export default function TableSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          처방 대기 <span className="text-gray-600 font-normal">(최근 30일 기준)</span>
        </h2>
        <button className="bg-[#0054A6] text-white px-4 py-2 rounded text-sm">환자 등록하기</button>
      </div>
      {/* Search Result Section */}
      <div className="p-4 rounded-lg relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 text-md font-semibold">
            검색 결과 <span className="text-blue-500 font-bold">0</span>건
          </span>
          <div className="relative">
            <input
              type="text"
              placeholder="검색"
              className="pl-8 pr-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-xl bg-gray-100"
            />
            <Image
              src="/search.png"
              alt="Search Icon"
              width={16}
              height={16}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
        </div>
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-700 text-sm border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2">등록번호</th>
                <th className="p-2">환자명</th>
                <th className="p-2">성별</th>
                <th className="p-2">생년월일</th>
                <th className="p-2">S/A</th>
                <th className="p-2">근육 방향</th>
                <th className="p-2">치료 처방 기간</th>
                <th className="p-2">환자 등록일</th>
                <th className="p-2">최종 처방일</th>
                <th className="p-2">처방 상태</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty State */}
              <tr>
                <td colSpan={10} className="text-center text-gray-500 py-6">
                  <p className="mb-4">환자 등록 후 처방이 가능합니다.</p>
                  <button className="bg-[#0054A6] text-white px-6 py-2 rounded text-sm">환자 등록하기</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-start mt-4">
        <nav className="flex items-center space-x-2 text-gray-700">
          <button className="px-3 py-1 text-gray-400 hover:text-[#0054A6] focus:outline-none">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none">
            1
          </button>
          <button className="px-3 py-1 text-gray-400 hover:text-[#0054A6] focus:outline-none">&gt;</button>
        </nav>
      </div>
    </div>
  );
}