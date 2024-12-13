// import "./App.css";

import ReactDOM from "react-dom"; // React 17

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ConfigProvider } from "antd";

import ko from "antd/es/locale/ko_KR";
import _ from "lodash";

//style
import "@/assets/sass/style.scss";

import { useAppDispatch, useAppSelector } from "@/store/coreHook";
import Loading from "@/component/core/Loading";
import Layout from "@/routs/Layout";
import { useResizeObserver } from "@/hooks/useResizeObserver";
import { useEffect } from "react";
import Header from "@/routs/Header";

const App = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */

  const { VITE_APP_TITLE } = import.meta.env;

  const loading = useAppSelector((state) => state.loading);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /**
   * =====================================================================
   *	함수
   * =====================================================================
   */

  /**
   * =====================================================================
   *	Hook
   * =====================================================================
   */
  useEffect(() => {
    document.title = VITE_APP_TITLE;
  }, []);

  return (
    <>
      <ConfigProvider
        theme={{
          hashed: false,
          token: {
            colorPrimary: "#3579d4",
            colorPrimaryBg: "#3579d4",
            // fontFamily: '',
          },
        }}
        locale={ko}
      >
        <div className="App">
          <Layout />
          <Loading />
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
