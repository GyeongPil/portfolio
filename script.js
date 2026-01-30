(function () {
  "use strict";

  // ===== 프로젝트 데이터 (PRD 구조) =====
  const projects = [
    {
      title: "Weather Web App",
      description:
        "현재 날씨 정보를 한눈에 확인할 수 있도록 만든 웹 애플리케이션입니다.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://gyeongpil.github.io/weather_last/",
      github: "https://github.com/GyeongPil/weather_last",
      status: "completed",
    },
    {
      title: "School Meal Information App",
      description:
        "날짜별 학교 급식 정보를 정확하게 확인할 수 있도록 제작한 웹 애플리케이션입니다.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://gyeongpil.github.io/school_meal/",
      github: "https://github.com/GyeongPil/school_meal",
      status: "completed",
    },
    {
      title: "Todo Memo Web App",
      description:
        "날짜 기반 할 일 관리를 목표로 제작 중인 웹/앱 프로젝트입니다.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://gyeongpil.github.io/todo_memo/",
      github: "https://github.com/GyeongPil/todo_memo",
      status: "in-progress",
    },
  ];

  const STORAGE_KEY = "portfolio-theme";

  // ===== 다크 모드 =====
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      if (value) localStorage.setItem(STORAGE_KEY, value);
      else localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");
    applyTheme(theme);
  }

  function toggleTheme() {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    setStoredTheme(next);
  }

  // ===== 프로젝트 카드 렌더링 =====
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = projects
      .map(function (p) {
        const isInProgress = p.status === "in-progress";
        const cardClass = isInProgress ? "project-card in-progress" : "project-card";
        const badge = isInProgress
          ? '<span class="project-badge">In Progress</span>'
          : "";

        const techStr = p.tech.join(" / ");

        return (
          '<li class="' +
          cardClass +
          '">' +
          '<div class="project-header">' +
          "<h3 class=\"project-title\">" +
          escapeHtml(p.title) +
          "</h3>" +
          badge +
          "</div>" +
          '<p class="project-description">' +
          escapeHtml(p.description) +
          "</p>" +
          '<p class="project-tech">Tech: ' +
          escapeHtml(techStr) +
          "</p>" +
          '<div class="project-links">' +
          '<a href="' +
          escapeAttr(p.demo) +
          '" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Demo</a>' +
          '<a href="' +
          escapeAttr(p.github) +
          '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>' +
          "</div>" +
          "</li>"
        );
      })
      .join("");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function escapeAttr(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ===== 이벤트 바인딩 =====
  function bindThemeToggle() {
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  }

  // ===== 초기화 =====
  function init() {
    initTheme();
    renderProjects();
    bindThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
