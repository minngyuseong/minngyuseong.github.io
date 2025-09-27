import React from "react"
// 정의한 타입 불러오기
import Image from "next/image"
import AutoplaySwiper from "@/components/AutoplaySwiper"
import profile from "@/public/profile.png"

// const WORK_LIST: WorkItem[] = [
//   {
//     title: "병원 홈페이지 리뉴얼",
//     category: "Web | 퍼블리싱 · SEO · 반응형",
//     description: "니즈를 파악한 반응형 홈페이지 구축.",
//   },
//   {
//     title: "문자팝 웹 사이트",
//     category: "Web | 디자인 · 퍼블리싱 · 유지보수",
//     description: "사용자 중심의 UI/UX 디자인 적용.",
//   },
//   //... 추가 작업 목록
// ]

// const PROJECT_LIST: ProjectItem[] = [
//   { name: "PANORAMA", hashtags: ["#3D", "#CSS", "#JS", "#인터랙티브"] },
//   { name: "SORO", hashtags: ["#GSAP", "#Clone", "#인터랙티브", "#반응형"] },
//   //... 추가 프로젝트 목록
// ]

const TECH_STACK = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "shadcn/ui",
    icon: "https://avatars.githubusercontent.com/u/139895814?s=280&v=4",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NestJS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
  },
  {
    name: "Bruno",
    icon: "https://bestofjs.org/logos/bruno.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Android Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
]

// --- Section 컴포넌트: Props에 타입 정의 ---
interface SectionProps {
  id: string
  children: React.ReactNode // 자식 요소의 타입
}

const Section: React.FC<SectionProps> = ({ id, children }) => (
  <section
    id={id}
    className="mx-auto min-h-screen max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
  >
    {children}
  </section>
)

// --- 메인 함수 컴포넌트 ---
const HomePage: React.FC = () => {
  return (
    <>
      <main className="pt-16">
        <section className="flex h-[20vh] items-center justify-center text-center lg:h-[50vh]">
          <div>
            <h1 className="mb-4 text-3xl font-extrabold text-[#333] lg:text-6xl">
              MINGYU
            </h1>
            <p className="text-lg font-semibold text-gray-600 lg:text-xl">
              안녕하세요. 프론트엔드 개발자 성민규입니다.
            </p>
            <p className="lg:text-md mt-2 text-sm text-gray-500">
              간단한 코드를 추구하며 사용자가 중심이 되는 개발을 합니다.
            </p>
          </div>
        </section>
        <AutoplaySwiper>
          {TECH_STACK.map((tech, index) => (
            <div
              key={index}
              className="flex h-40 w-full items-center justify-center rounded-lg"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={80}
                height={80}
                title={tech.name}
              />
            </div>
          ))}
        </AutoplaySwiper>

        {/* --------------------- ABOUT ME SECTION --------------------- */}
        <Section id="about">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            <div className="flex justify-center lg:justify-start">
              <Image
                src={profile}
                alt={"Mingyu Seong"}
                width={300}
                height={300}
                className="w-40 rounded-lg object-cover md:w-60 lg:w-72"
              />
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[#333]">
                성민규
              </h3>
              <p className="mb-6 leading-relaxed">
                안녕하세요, 프론트엔드 개발자 성민규입니다.
              </p>
              <p className="border-l-4 border-[#333] pl-4 leading-relaxed text-gray-600 italic">
                사용자 경험을 최우선으로 생각하며, 효율적이고 직관적인 UI/UX를
                구현하는 데 집중하고 있습니다.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">경력</h4>
              <ul className="text-md space-y-1 text-gray-700">
                <li>
                  2024.06 - 2024.12&nbsp;&nbsp;&nbsp;&nbsp; 에스엠베이커스 인턴
                </li>
                <li>
                  2025.07 - 2025.08&nbsp;&nbsp;&nbsp;&nbsp; 타이가글로벌 인턴
                </li>
              </ul>

              <h4 className="mt-8 mb-3 text-xl font-semibold">학력</h4>
              <ul className="text-md space-y-1 text-gray-700">
                <li>
                  2020.03 - 2024.02&nbsp;&nbsp;&nbsp;&nbsp;숭실대학교 컴퓨터학부
                </li>
                <li>
                  2024.03 - 2026.02&nbsp;&nbsp;&nbsp;&nbsp;성균관대학교
                  소프트웨어학과
                </li>
              </ul>

              <h4 className="mt-8 mb-3 text-xl font-semibold">수상</h4>
              <ul className="text-md space-y-1 text-gray-700">
                <li>
                  2025.05&nbsp;&nbsp;&nbsp;&nbsp;성균관대학교 S-TOP 최우수상
                </li>
              </ul>

              <h4 className="mt-8 mb-3 text-xl font-semibold">프로젝트</h4>
              <ul className="text-md space-y-1 text-gray-700">
                <li>
                  2024.06 - 2024.12 (7개월)&nbsp;&nbsp;&nbsp;&nbsp;피트니스 센터
                  통합 플랫폼
                </li>
                <li>
                  2024.09 -
                  현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(12개월)&nbsp;&nbsp;&nbsp;교내
                  강의 지원 웹페이지
                </li>
                <li>
                  2025.07 - 2025.08 (2개월)&nbsp;&nbsp;&nbsp;&nbsp;IoT 기기
                  모바일앱
                </li>
                <li>
                  2025.08 - 2025.09 (2개월)&nbsp;&nbsp;&nbsp;주점 예약 플랫폼
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-semibold text-[#333]">SKILLS</h4>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#e0e0e0] px-4 py-2 text-sm font-medium text-gray-800"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/minngyuseong"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-black px-5 py-2 text-white transition hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub 바로가기
              </a>
            </div>
          </div>
        </Section>

        {/* --------------------- WORK SECTION --------------------- */}
        {/* <Section id="work" title="WORK">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {WORK_LIST.map(
              (
                work: WorkItem,
                index: number, // work에 WorkItem 타입 명시
              ) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-lg border p-6 shadow-md transition duration-300 hover:shadow-xl"
                >
                  <h3 className="mb-2 text-xl font-semibold text-[#333]">
                    {work.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">{work.category}</p>
                  <p className="text-gray-700">{work.description}</p>
                </div>
              ),
            )}
          </div>
          <div className="mt-12 text-center">
            <button className="primary-button bg-gray-600 hover:bg-gray-700">
              WORK 더보기
            </button>
          </div>
        </Section> */}

        {/* --------------------- PROJECT SECTION --------------------- */}
        {/* <Section id="project" title="PROJECT">
          <div className="grid gap-8 md:grid-cols-3">
            {PROJECT_LIST.map(
              (
                project: ProjectItem,
                index: number, // project에 ProjectItem 타입 명시
              ) => (
                <div key={index} className="rounded-lg border bg-[#fcfcfc] p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#333]">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.hashtags.map(
                      (
                        tag: string, // tag에 string 타입 명시
                      ) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </Section> */}
      </main>
    </>
  )
}

export default HomePage
