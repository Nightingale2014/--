# 🧠 STUDYLOG

스터디 기록과 검색을 위한 웹 플랫폼 프론트엔드입니다.  
검색창, 태그 버튼, 헤더/푸터 레이아웃을 포함한 기본 구조를 React + TailwindCSS로 구성했습니다.

---

## 📁 주요 파일 설명

### 1. `App.jsx`

- 전체 페이지 레이아웃 구성 (헤더, 메인, 푸터 포함)
- 메인 영역에 검색창과 태그 버튼 UI 포함
- `SearchPage.jsx`를 메인 컴포넌트로 렌더링

---

### 2. `SearchPage.jsx`

- 검색창과 태그 버튼을 표시하는 메인 UI
- 태그 배열을 `.map()`으로 순회하여 버튼 컴포넌트(`Button.jsx`) 생성
- 버튼 클릭 시 태그명 alert로 출력

---

### 3. `Button.jsx`

- 태그 버튼 컴포넌트
- 전달된 `label` 값을 기반으로 클릭 시 alert 발생
- TailwindCSS를 사용해 회색 배경 + hover/active 효과 적용

---

### 4. `Header.jsx` / `Footer.jsx`

- 간단한 상단/하단 레이아웃 컴포넌트
- 전체 페이지 레이아웃의 일관성 유지용

---

### 5. `SearchBar.jsx`

- 검색 입력창 구성
- 디자인용 입력 UI로, 기능은 추후 연동 예정

---

## 🛠️ 사용 기술

- React 18
- Vite
- Tailwind CSS

---

## 🚀 실행 방법

```bash
npm install
npm run dev
