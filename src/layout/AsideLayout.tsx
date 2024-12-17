import Aside from '@/assets/styled/Aside/aside';
import { Button } from 'antd';

//svg
import MenuIcon from '@/assets/icon/icon-menu.svg?react';
import StarIcon from '@/assets/icon/icon-star.svg?react';
import SiteMapIcon from '@/assets/icon/icon-sitemap.svg?react';
import DarkModeIcon from '@/assets/icon/icon-dark.svg?react';
import LightModeIcon from '@/assets/icon/icon-light.svg?react';
import MenuArrIcon from '@/assets/icon/icon-menu-arr.svg?react';

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
              className="aside__1depth-item close"
            >
              <div className="icon-arrow">
                1번메뉴
                <MenuArrIcon />
              </div>
            </li>
          </ul>
        </menu>
      </Aside>
    </>
  );
};

export default AsideLayout;
