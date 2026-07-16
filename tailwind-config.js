// 솔솔방충망 공통 Tailwind 설정 (Material 3 토큰)
// 각 페이지에서 cdn.tailwindcss.com 스크립트 다음에 로드합니다.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#181c1e",
        "on-secondary": "#ffffff",
        "surface-container-high": "#e5e9eb",
        "on-secondary-fixed-variant": "#00504d",
        "surface-container-lowest": "#ffffff",
        "background": "#f7fafc",
        "tertiary-fixed-dim": "#f2bc82",
        "on-primary-fixed-variant": "#2d476f",
        "outline-variant": "#c4c6cf",
        "surface": "#f7fafc",
        "inverse-on-surface": "#eef1f3",
        "on-secondary-container": "#006f6a",
        "secondary": "#006a66",
        "secondary-container": "#81f2eb",
        "surface-bright": "#f7fafc",
        "on-primary": "#ffffff",
        "surface-variant": "#e0e3e5",
        "primary": "#002045",
        "inverse-primary": "#adc7f7",
        "outline": "#74777f",
        "on-tertiary-container": "#c6955e",
        "error": "#ba1a1a",
        "on-surface-variant": "#43474e",
        "primary-fixed": "#d6e3ff",
        "on-secondary-fixed": "#00201e",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e0e3e5",
        "on-primary-fixed": "#001b3c",
        "surface-container": "#ebeef0",
        "primary-fixed-dim": "#adc7f7",
        "surface-tint": "#455f88",
        "on-primary-container": "#86a0cd",
        "on-background": "#181c1e",
        "tertiary-fixed": "#ffddba",
        "surface-dim": "#d7dadc",
        "tertiary": "#321b00",
        "primary-container": "#1a365d",
        "on-error-container": "#93000a",
        "on-tertiary-fixed-variant": "#633f0f",
        "inverse-surface": "#2d3133",
        "on-tertiary-fixed": "#2b1700",
        "secondary-fixed-dim": "#66d8d2",
        "surface-container-low": "#f1f4f6",
        "tertiary-container": "#4f2e00",
        "secondary-fixed": "#84f5ee"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        "base": "8px",
        "section-gap": "80px",
        "container-max": "1200px",
        "gutter": "24px"
      },
      fontFamily: {
        "headline-lg": ["Noto Sans"],
        "headline-xl": ["Noto Sans"],
        "headline-md": ["Noto Sans"],
        "body-md": ["Noto Sans"],
        "label-md": ["Noto Sans"],
        "headline-xl-mobile": ["Noto Sans"],
        "body-lg": ["Noto Sans"],
        "caption": ["Noto Sans"]
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }],
        "headline-xl-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "caption": ["12px", { lineHeight: "16px", fontWeight: "400" }]
      }
    }
  }
};
