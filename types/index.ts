// --- 1. 내비게이션 아이템 타입 정의 ---
export interface NavItem {
  name: string;
  href: string;
}

// --- 2. Work 경험 목록 타입 정의 ---
export interface WorkItem {
  title: string;
  category: string;
  description: string;
}

// --- 3. Project 목록 타입 정의 ---
export interface ProjectItem {
  name: string;
  hashtags: string[];
}
