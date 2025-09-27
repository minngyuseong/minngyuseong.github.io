"use client"

export function ReturnTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-600 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:text-[#333] hover:shadow-xl"
    >
      ↑
    </button>
  )
}
