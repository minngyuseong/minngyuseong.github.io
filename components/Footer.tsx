"use client"
export default function Footer() {
  const currentYear: number = new Date().getFullYear() // currentYear에 number 타입 명시

  return (
    <footer className="border-t border-gray-200 bg-[#f7f7f7] py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
        <div className="mb-4 space-x-6">
          <a
            href="https://github.com/minngyuseong"
            className="transition duration-150 hover:text-[#333]"
          >
            GITHUB
          </a>
        </div>

        <p>© {currentYear} minngyuseong.com</p>
      </div>
    </footer>
  )
}
