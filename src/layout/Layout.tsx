import React, { useEffect } from 'react';
import KeepAlive from 'react-activation';
import routes from '~react-pages';
import FrameLayout from '@/layout/FrameLayout';

const Layout = () => {
  return (
    <>
      <FrameLayout>
        <CenterLayout />
      </FrameLayout>
    </>
  );
};

export default React.memo(Layout);

const CenterLayout = () => {
  const location = useLocation();
  const route = useRoutes(routes);

  useEffect(() => {
    console.log('route: ', route);
  }, [route]);

  useEffect(() => {
    console.log('location: ', location);
  }, [location]);

  return (
    <KeepAlive
      id={location.pathname}
      name={location.pathname}
      cacheKey={location.pathname}
    >
      <Suspense>
        <div id="keep-alive-content" className="keep-alive-content">
          <div className="alive-content">{route}</div>
        </div>
      </Suspense>
    </KeepAlive>
  );
};
