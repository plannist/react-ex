import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    Pages({
      dirs: [
        { dir: "src/pages", baseRoute: "" },
        // { dir: 'src/publish', baseRoute: 'publish' },
      ],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],
      imports: [
        // presets
        "react",
        {
          react: ["Suspense"],
        },
        "react-router-dom",
        "react-router",
        {
          "react-i18next": ["initReactI18next", "useTranslation"],
        },
      ],
      dts: "./auto.d.ts",
    }),
  ],
  //Vite 개발 서버 정의
  server: {
    port: 7007,
    proxy: {
      "/api": {
        // 요청 전달 대상 서버 주소 설정
        target: "http://localhost:8080",
        // 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로  변경
        changeOrigin: true,
        // 요청 경로에서 '/api' 제거
        rewrite: (path) => path.replace(/^\/api/, ""),
        // SSL 인증서 검증 무시
        secure: false,
        // WebSocket 프로토콜 사용
        ws: true,
      },
    },
  },
});
