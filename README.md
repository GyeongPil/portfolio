# 개인 포트폴리오 & 자기소개

HTML, CSS, JavaScript만 사용한 반응형 단일 페이지 포트폴리오/자기소개 사이트입니다.

## 기술 스택

- **HTML5**
- **CSS3** (반응형, 다크 모드)
- **JavaScript** (Vanilla JS)

외부 프레임워크·백엔드·DB 없이 정적 페이지로 구성되어 있습니다.

## 주요 기능

- **반응형**: 모바일 / 태블릿 / 데스크톱 대응
- **다크 모드**: 라이트/다크 토글, `localStorage`로 설정 유지
- **섹션 구성**: 히어로, 자기소개, 기술 스택, Projects, GitHub, 연락처
- **프로젝트 카드**: 완료 / 진행 중 구분, Live Demo·GitHub 링크

## 실행 방법

1. 저장소 클론 후 프로젝트 폴더로 이동
2. `index.html`을 브라우저에서 열기

```bash
git clone https://github.com/GyeongPil/저장소이름.git
cd 저장소이름
# index.html 더블클릭 또는 브라우저에서 열기
```

로컬 서버를 쓰려면 (선택):

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve
```

이후 브라우저에서 `http://localhost:8000` 접속

## 프로젝트 구조

```
introduce/
├── index.html   # 메인 페이지
├── styles.css   # 스타일 (반응형, 다크 모드)
├── script.js    # 다크 모드 토글, 프로젝트 카드 렌더링
└── README.md
```

## 라이선스

개인 포트폴리오용 프로젝트입니다.
