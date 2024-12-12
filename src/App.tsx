import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";

import ko from "antd/es/locale/ko_KR";
import _ from "lodash";
import Ts from "@/pages/test/Ts";

import { useAppDispatch, useAppSelector } from "@/store/coreHook";

const App = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */

  const { VITE_APP_TITLE } = import.meta.env;
  const dispatch = useAppDispatch();
  // const loading = useAppSelector((state) => state.loading);
  const navigate = useNavigate();

  // const { ref, width } = useResizeObserver(); //변경 여부 체크

  /**
   * =====================================================================
   *	함수
   * =====================================================================
   */

  const goPage = (url: string) => {
    if (_.isEmpty(url)) {
      console.log("page is empty");
      return false;
    }
    console.log("page url is [", url, "]");
    // useRoutes(routes)
    navigate(url);
  };

  /**
   * =====================================================================
   *	Hook
   * =====================================================================
   */
  useEffect(() => {
    document.title = VITE_APP_TITLE;
    goPage("");
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
          <main>
            <div className="content">
              <div>
                <Ts></Ts>
                <p>Hi</p>
              </div>
            </div>
          </main>
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
