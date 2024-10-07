## 🎮 Riot Dex App

### 개인 프로젝트 소개

Next.js와 Typescript, Riot API를 활용한 리그오브레전드 정보 앱 입니다. App Router를 사용해 폴더 구조 기반의 라우팅을 지원합니다.

배포 링크 :  https://riot-dex-app.vercel.app/<br />
깃허브 링크 : https://github.com/smu06030/riot-dex-app

## 💡 주요 기능

### 구현 사항

- ✅ 챔피언 목록 페이지 (`/champions`)
  - ISR 방식으로 챔피언 목록을 표시합니다.
- ✅ 챔피언 상세 페이지 (`/champions/[id]`)
  - 동적 렌더링 방식으로 구현했고 해당 페이지에서 동적 메타데이터를 생성하도록 했습니다.
- ✅ 챔피언 로테이션 페이지 (`/rotation`)
  - CSR 방식으로 구현하고 Riot API KEY를 활용해 로테이션 정보를 표시합니다.
- ✅ 아이템 목록 페이지 (`/items`)
  - SSG 방식으로 구현했고 아이템 목록을 표시합니다.

    <br />

## 🗂️ 파일 구조

📦src <br />
 ┣ 📂app <br /> 
 ┃ ┣ 📂api <br />
 ┃ ┃ ┗ 📂rotation <br />
 ┃ ┣ 📂champions <br />
 ┃ ┃ ┣ 📂[id] <br />
 ┃ ┣ 📂fonts <br />
 ┃ ┣ 📂items <br />
 ┃ ┣ 📂rotation <br />
 ┣ 📂components <br />
 ┣ 📂hooks <br />
 ┣ 📂types <br />
 ┗ 📂utils <br />
<br />

## 🛠️ 사용 기술

### 프론트 엔드

<img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge" alt="nextjs" /><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" /><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind-css" /><br />

### API

<img src="https://img.shields.io/badge/Riot_Games-D32936?style=for-the-badge&logo=riot-games&logoColor=white" alt="riotGame" /><br />

### 버전 관리

<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/><br />

### 배포

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/><br />
