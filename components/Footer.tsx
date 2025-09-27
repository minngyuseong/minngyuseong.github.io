/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
export default function Footer() {
  const currentYear: number = new Date().getFullYear() // currentYear에 number 타입 명시

  return (
    <footer className="border-t border-gray-200 bg-[#f7f7f7] py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
        <div className="mb-4 space-x-6">
          <a href="#" className="transition duration-150 hover:text-[#333]">
            RESUME
          </a>
          <a href="#" className="transition duration-150 hover:text-[#333]">
            BLOG
          </a>
          <a href="#" className="transition duration-150 hover:text-[#333]">
            GITHUB
          </a>
        </div>

        <p>© {currentYear} soyoung-lee.com</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 text-xs hover:text-[#333]"
        >
          RETURN TOP
        </button>
      </div>
    </footer>
  )
}
