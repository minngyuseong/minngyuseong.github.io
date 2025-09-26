import Link from "next/link";
import { NavItem } from "../types";

const navItems: NavItem[] = [
  { name: "ABOUT ME", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "PROJECT", href: "#project" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  // 함수 컴포넌트이므로 React.FC를 사용할 수도 있으나, 여기서는 일반 함수 구문 사용
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 / 타이틀 */}
        <Link href="/" className="text-xl font-bold text-[#333]">
          SOYOUNG&apos;S PORTFOLIO
        </Link>

        {/* 내비게이션 링크 */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map(
              (
                item: NavItem, // item에 NavItem 타입을 명시
              ) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[#333] transition duration-150 hover:text-[#555]"
                  >
                    {item.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
