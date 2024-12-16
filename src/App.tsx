// import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfigProvider } from 'antd';

import ko from 'antd/es/locale/ko_KR';
//style
import '@/assets/sass/style.scss';

import Loading from '@/component/core/Loading';
import Layout from '@/layout/Layout';
import { useEffect } from 'react';

const App = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */

  const { VITE_APP_TITLE } = import.meta.env;

  // const loading = useAppSelector((state) => state.loading);
  //
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

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
            colorPrimary: '#3579d4',
            colorPrimaryBg: '#3579d4',
            fontFamily: 'Pretender',
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
