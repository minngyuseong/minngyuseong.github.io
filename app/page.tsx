import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import React from "react";
import { WorkItem, ProjectItem } from "../types"; // 정의한 타입 불러오기

// --- 데이터 구조 (WorkItem, ProjectItem 타입 사용) ---
const SKILLS: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "FIGMA",
  "Bootstrap",
  "Photoshop",
  "Illustrator",
  "Adobe XD",
  "jQuery",
];

const WORK_LIST: WorkItem[] = [
  {
    title: "병원 홈페이지 리뉴얼",
    category: "Web | 퍼블리싱 · SEO · 반응형",
    description: "니즈를 파악한 반응형 홈페이지 구축.",
  },
  {
    title: "문자팝 웹 사이트",
    category: "Web | 디자인 · 퍼블리싱 · 유지보수",
    description: "사용자 중심의 UI/UX 디자인 적용.",
  },
  //... 추가 작업 목록
];

const PROJECT_LIST: ProjectItem[] = [
  { name: "PANORAMA", hashtags: ["#3D", "#CSS", "#JS", "#인터랙티브"] },
  { name: "SORO", hashtags: ["#GSAP", "#Clone", "#인터랙티브", "#반응형"] },
  //... 추가 프로젝트 목록
];

// --- Section 컴포넌트: Props에 타입 정의 ---
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode; // 자식 요소의 타입
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section
    id={id}
    className="mx-auto min-h-screen max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
  >
    <h2 className="section-title">{title}</h2>
    <div className="mt-10">{children}</div>
  </section>
);

// --- 메인 함수 컴포넌트 ---
const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>이소영 | 웹 포트폴리오 | Soyoung&apos;s Web Portfolio</title>
      </Head>

      <Header />

      {/* --------------------- HERO SECTION --------------------- */}
      <main className="pt-16">
        <section className="flex h-screen items-center justify-center bg-[#f7f7f7] text-center">
          <div>
            <h1 className="mb-4 text-6xl font-extrabold text-[#333]">
              SOYOUNG&apos;S PORTFOLIO
            </h1>
            <p className="text-xl text-gray-600">
              안녕하세요. 저는 UIUX 디자인, 퍼블리싱 하는 6년 차 웹 퍼블리셔
              이소영입니다.
            </p>
            <p className="mt-2 text-lg text-gray-500">
              어떠한 사용자에게든 편리하고 좋은 웹 페이지를 만듭니다!
            </p>
          </div>
        </section>

        {/* --------------------- ABOUT ME SECTION --------------------- */}
        <Section id="about" title="ABOUT ME">
          <div className="grid gap-12 md:grid-cols-2">
            {/* 1. 자기소개 및 경력 */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[#333]">
                Soyoung Lee
              </h3>
              <p className="mb-6 leading-relaxed">
                안녕하세요! 6년 차 웹 퍼블리셔 이소영입니다. HTML, CSS,
                JavaScript, Figma 등 다양한 툴을 활용하여 웹사이트의 레이아웃과
                디자인을 구성하고, 웹 표준과 웹 접근성을 준수하여 모든
                사용자들이 웹사이트를 손쉽게 이용할 수 있도록 합니다.
              </p>
              <p className="border-l-4 border-[#333] pl-4 leading-relaxed text-gray-600 italic">
                맡은 일에 애정을 가지고 책임감 있게 업무를 수행합니다. 주어진
                역할에서 가치를 창출하며, 제 역량을 충분히 발휘하고자 합니다.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">
                WORK & EDUCATION
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>**2025.01 - NOW:** 테크랩스</li>
                <li>**2019.02 - 2023.11:** (주)아이엠오</li>
                <li>
                  **2018.06 - 2018.11:** 스마트기기 UX/UI디자인 수료 -
                  그린컴퓨터아카데미
                </li>
              </ul>
            </div>

            {/* 2. 스킬셋 */}
            <div>
              <h4 className="mb-4 text-xl font-semibold text-[#333]">SKILLS</h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map(
                  (
                    skill: string, // skill에 string 타입 명시
                  ) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#e0e0e0] px-4 py-2 text-sm font-medium text-gray-800"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* --------------------- WORK SECTION --------------------- */}
        <Section id="work" title="WORK">
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
        </Section>

        {/* --------------------- PROJECT SECTION --------------------- */}
        <Section id="project" title="PROJECT">
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
        </Section>

        {/* --------------------- CONTACT SECTION --------------------- */}
        <Section id="contact" title="CONTACT">
          <div className="rounded-lg bg-[#f7f7f7] p-16 text-center shadow-inner">
            <h3 className="mb-4 text-3xl font-bold">
              함께 일할 웹 퍼블리셔를 찾고 계신가요?
            </h3>
            <p className="mb-6 text-xl text-gray-700">
              저에게 궁금한 점이 있으시다면{" "}
              <span className="font-medium">s.young1922@gmail.com</span> 으로
              연락해 주세요 :)
            </p>

            <a
              href="mailto:s.young1922@gmail.com"
              className="primary-button inline-block"
            >
              메일보내기
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
