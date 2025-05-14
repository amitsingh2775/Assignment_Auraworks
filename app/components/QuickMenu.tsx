export default function QuickMenu() {
  return (
    <div className="mb-6">
      <h2
  className="text-gray-800 mb-4"
  style={{
    fontFamily: 'Pretendard Variable',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '40px',
    letterSpacing: '0px',
    width: '300px',
    height: '40px',
    top: '243px',
    left: '272px',
  }}
>
  Quick Menu
</h2>

      <div className="flex justify-between gap-4">
        {/* Left Card */}
        <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col gap-2 flex-1 relative">
  <span className="text-sm text-gray-500">빠르고 간편하게</span>
  <div className="flex items-center justify-between">
    <span className="text-gray-700 text-sm font-extrabold">바로 견적하기</span>
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
      <div className="w-10 h-10 bg-[#8280FF] rounded-full flex items-center justify-center">
        <span className="text-white text-xl">📋</span>
      </div>
    </div>
  </div>
</div>


        {/* Right Card */}
        <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col gap-2 flex-1 relative">
          <span className="text-sm text-gray-500">처음 진료 받는</span>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm font-extrabold">견적 등록하기</span>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-10 h-10 bg-[#FEC53D] rounded-full flex items-center justify-center">
  <img src="/grp.png" alt="icon" className="w-6 h-6" />
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
