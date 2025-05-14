"use client";
import React, { useState } from "react";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    prescription: false,
    myPage: false,
  });

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col gap-4 md:w-48 sm:w-full sm:rounded-none">
      <nav className="flex flex-col gap-2 text-gray-700 text-sm">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-600 font-bold p-2 rounded bg-blue-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6"
          >
            <path
              d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
            />
          </svg>
          홈
        </a>
        {/* Prescription Management (Dropdown) */}
        <div className="flex flex-col gap-2">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleMenu("prescription")}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <span>처방 관리</span>
            <svg
              className={`ml-auto w-4 h-4 transition-transform ${openMenus.prescription ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {openMenus.prescription && (
            <div className="flex flex-col gap-1 pl-6">
              <a href="#" className="text-gray-600 text-xs">
                처방 내역
              </a>
              <a href="#" className="text-gray-600 text-xs">
                표준 치료 프로그램
              </a>
            </div>
          )}
        </div>
        {/* My Page (Dropdown) */}
        <div className="flex flex-col gap-1">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleMenu("myPage")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-500"
            >
              <path
                fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <span>마이페이지</span>
            <svg
              className={`ml-auto w-4 h-4 transition-transform ${openMenus.myPage ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {openMenus.myPage && (
            <div className="flex flex-col gap-1 pl-6">
              <a href="#" className="text-gray-60 text-xs">
                개인정보 수정
              </a>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}