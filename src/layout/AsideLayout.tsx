import Aside from '@/assets/styled/Aside/aside';
import { Button } from 'antd';

//svg
import MenuIcon from '@/assets/icon/icon-menu.svg?react';
import StarIcon from '@/assets/icon/icon-star.svg?react';
import SiteMapIcon from '@/assets/icon/icon-sitemap.svg?react';
import DarkModeIcon from '@/assets/icon/icon-dark.svg?react';
import LightModeIcon from '@/assets/icon/icon-light.svg?react';
import MenuArrIcon from '@/assets/icon/icon-menu-arr.svg?react';
import _ from 'lodash';
import { useAppSelector } from '@/store/coreHook';
import { MenuType, setSelectedMenu } from '@/store/reducers/menuReducer';
import { useDispatch } from 'react-redux';

type AsideProps = {
  collapse: boolean;
  setCollapse: any;
};

const AsideLayout = (props: AsideProps) => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
  const { collapse, setCollapse } = props;
  const [activeMenu, setActiveMenu] = useState(0);
  const [rootMenu, setRootMenu] = useState<MenuType[]>([]);
  const [isDark, setDark] = useState(false);
  const navigate = useNavigate();
  const { menuList } = useAppSelector((state) => state.menu);
  const selectedMenu = useAppSelector((state) => state.menu.selectedMenu);

  const [rootOpenMenu, setRootOpenMenu] = useState<MenuType>();
  const [secOpenMenu, setSecOpenMenu] = useState<MenuType>();

  const dispatch = useDispatch();

  /**
   * =====================================================================
   *	함수
   * =====================================================================
   */
  const menuClick = async (idx: any) => {
    // console.log('idx: ', idx);
    if (activeMenu === idx) setCollapse(!collapse);
    else if (collapse === true) {
      setCollapse(false);
    }

    /*    if (idx === 1) {
      setBokMkList(await MenuStore.fetchBokMkList());
      setBokMkType(
        await apiComSearchBokMkType({}).then((res) => res.statusMessage)
      );
      setIsBokMkMenu(false); // [즐겨찾기] 전체메뉴 닫은 상태로 초기화
    } else if (idx === 0) {
      setIsAllMenu(false); // [메뉴] 전체메뉴 닫은 상태로 초기화
    }*/

    setActiveMenu(idx);
  };

  const goPage = (url: string) => {
    if (_.isEmpty(url)) {
      console.log('page is empty');
      return false;
    }

    console.log('page url is [', url, ']');
    navigate(url);
  };

  useEffect(() => {
    setRootMenu(menuList.filter((e: MenuType) => !e.parentId));
  }, []);

  useEffect(() => {
    if (rootMenu && rootMenu.length > 0) {
      console.log('rootMenu: ', rootMenu);
    }
  }, [rootMenu]);

  return (
    <>
      <Aside className={props.collapse ? 'aside off' : 'aside on'}>
        {/*   side - left   */}
        <div className="menu-side">
          <ul>
            <li className={activeMenu === 0 ? 'menu-side-item on' : 'menu-side-item'}>
              <Button className="btn-icon btn-icon-home" type="link" size="small" onClick={() => menuClick(0)}>
                <MenuIcon />
                {'메뉴'}
              </Button>
            </li>
            <li className={activeMenu === 1 ? 'menu-side-item on' : 'menu-side-item'}>
              <Button className="btn-icon btn-icon-star" type="link" size="small" onClick={() => menuClick(1)}>
                <StarIcon />
                {'즐겨찾기'}
              </Button>
            </li>
            <li className="menu-side-item">
              <Button className="btn-icon btn-icon-site" type="link" size="small" onClick={() => menuClick(2)}>
                <SiteMapIcon />
                {'사이트맵'}
              </Button>
            </li>
          </ul>
          <ul className="menu-side-bottom">
            <li className="menu-side-item">
              <Button
                type="link"
                size="small"
                className="btn-icon btn-icon-dark"
                onClick={() => {
                  setDark(!isDark);
                }}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                {isDark ? '라이트모드' : '다크모드'}
              </Button>
            </li>
          </ul>
        </div>
        {/*   side - right  */}
        <menu>
          <h1 className="logo">
            <a className="logo-icon">
              {/*로고아이콘*/}
              로고영역
            </a>
          </h1>
          <div className="menu-top">{/*검색폼등*/}</div>

          {rootMenu.map((main) => {
            //중메뉴조회
            const middleMenus = menuList.filter((e) => {
              return e.parentId === main.menuId;
            });
            return (
              <ul key={'ul_'.concat(main.menuId)} className="aside__1depth">
                {/* 1.대메뉴 */}
                <li
                  id={main.menuId}
                  key={main.menuId}
                  // className="aside__1depth-item close"
                  className={`aside__1depth-item ${rootOpenMenu?.menuId === main.menuId ? 'open' : 'close'}`}
                >
                  <div
                    className="icon-arrow"
                    onClick={() => {
                      console.log('rootOpenMenu: ', rootOpenMenu);
                      if (rootOpenMenu?.menuId === main.menuId) {
                        setRootOpenMenu(null);
                      } else {
                        setRootOpenMenu(main);
                      }
                    }}
                  >
                    {main.menuName}
                    <MenuArrIcon />
                  </div>
                  {/* 2.중메뉴1 */}
                  <ul key={'menu_second'} className="aside__2depth">
                    {middleMenus.map((middle) => {
                      //소메뉴조회
                      const lastMenus = menuList.filter((e) => e.parentId === middle.menuId);

                      return (
                        <li
                          id={middle.menuId}
                          key={middle.menuId}
                          className={`aside__2depth-item ${secOpenMenu?.menuId === middle.menuId ? 'open' : 'close'}`}
                          // className="aside__2depth-item close"
                        >
                          <div
                            className="icon-arrow"
                            onClick={() => {
                              // console.log('rootOpenMenu: ', secOpenMenu);
                              if (secOpenMenu?.menuId === middle.menuId) {
                                setSecOpenMenu(null);
                              } else {
                                setSecOpenMenu(middle);
                              }
                            }}
                          >
                            {middle.menuName}
                            <MenuArrIcon />
                          </div>
                          {/* 3.소메뉴 */}
                          <dl className="aside__3depth open">
                            {lastMenus.map((last) => {
                              //
                              return (
                                <dd
                                  key={last.menuId}
                                  className={`aside__3depth-item ${selectedMenu?.menuId === last.menuId ? 'selected' : ''}`}
                                  onClick={() => {
                                    dispatch(setSelectedMenu(last));
                                    goPage(last.menuUrl);
                                  }}
                                >
                                  {last.menuName}
                                </dd>
                              );
                            })}
                          </dl>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            );
          })}
        </menu>
      </Aside>
    </>
  );
};

export default AsideLayout;
