import { useEffect } from 'react';
import { Button, Space } from 'antd';
import { AntDesignOutlined, MinusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { MenuType, setMenu } from '@/store/reducers/menuReducer';

const Index = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
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
    console.log('index');
    //TODO: 서버 연동
    //prettier-ignore
    const menuList: MenuType[] = [
      { menuId: 'root1', menuName: '대메뉴1', menuUrl: '' },
      { menuId: 'root2', menuName: '대메뉴2', menuUrl: '', parentId: '' },
      { menuId: 'sec1', menuName: '중메뉴1', menuUrl: '', parentId: 'root1' },
      { menuId: 'sec2', menuName: '중메뉴2', menuUrl: '', parentId: 'root1' },
      { menuId: 'thd1', menuName: '홈화면', menuUrl: '/', parentId: 'sec1' },
      {menuId: 'thd2',menuName: '테스트등록',menuUrl: '/example/InsertForm',parentId: 'sec1'},
      {menuId: 'thd3',menuName: '테스트 그리드 조회',menuUrl: '/example/SearchForm',parentId: 'sec1'},
    ];
    dispatch(setMenu(menuList));
  }, []);

  return (
    <>
      <div>
        <h2>Keep Alive Count!</h2>
        <h1>{count}</h1>
      </div>
      <div>
        <Space>
          <Button
            type="primary"
            size="large"
            icon={<AntDesignOutlined />}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {'count+1'}
          </Button>
          <Button
            className={'bg-secondary'}
            size="large"
            icon={<MinusOutlined />}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            {'count-1'}
          </Button>
        </Space>
      </div>
    </>
  );
};

export default Index;
