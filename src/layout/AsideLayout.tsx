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
  const [isDark, setDark] = useState(false);
  const navigate = useNavigate();

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

  return (
    <>
      <Aside className={props.collapse ? 'aside off' : 'aside on'}>
        {/*      */}
        <div className="menu-side">
          <ul>
            <li
              className={
                activeMenu === 0 ? 'menu-side-item on' : 'menu-side-item'
              }
            >
              <Button
                className="btn-icon btn-icon-home"
                type="link"
                size="small"
                onClick={() => menuClick(0)}
              >
                <MenuIcon />
                {'메뉴'}
              </Button>
            </li>
            {/*  */}
            <li
              className={
                activeMenu === 1 ? 'menu-side-item on' : 'menu-side-item'
              }
            >
              <Button
                className="btn-icon btn-icon-star"
                type="link"
                size="small"
                onClick={() => menuClick(1)}
              >
                <StarIcon />
                {'즐겨찾기'}
              </Button>
            </li>
            <li className="menu-side-item">
              <Button
                className="btn-icon btn-icon-site"
                type="link"
                size="small"
                onClick={() => menuClick(2)}
              >
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

        <menu>
          <h1 className="logo">
            로고영역
            <a className="logo-icon">{/*로고아이콘*/}</a>
          </h1>
          <div className="menu-top">{/*검색폼등*/}</div>
          <ul key={'main_menu_1'} className="aside__1depth">
            <li
              id={'left_1'}
              key={'aside_header_1'}
              // className="aside__1depth-item close"
              className="aside__1depth-item"
            >
              <div className="icon-arrow">
                대메뉴
                <MenuArrIcon />
              </div>

              {/* 2.중메뉴 */}
              <ul key={'header_2'} className="aside__2depth">
                <li
                  id={'left_2'}
                  className="aside__2depth-item"
                  // className="aside__2depth-item close"
                  key={'aside_header_2'}
                >
                  <div className="icon-arrow">
                    중메뉴
                    <MenuArrIcon />
                  </div>

                  {/* 3.소메뉴 */}
                  <dl className="aside__3depth">
                    <dd
                      key={'aside_menu_1'}
                      className={'aside__3depth-item selected'}
                      onClick={() => {
                        goPage('/');
                      }}
                    >
                      홈화면
                    </dd>
                    <dd
                      key={'aside_menu_2'}
                      className={'aside__3depth-item selected'}
                      onClick={() => {
                        goPage('/example/InsertForm');
                      }}
                    >
                      테스트폼 등록
                    </dd>
                    <dd
                      key={'aside_menu_3'}
                      className={'aside__3depth-item'}
                      onClick={() => {
                        goPage('/example/SearchForm');
                      }}
                    >
                      테스트 그리드 조회
                    </dd>
                  </dl>
                </li>
              </ul>
            </li>
          </ul>
        </menu>
      </Aside>
    </>
  );
};

export default AsideLayout;
