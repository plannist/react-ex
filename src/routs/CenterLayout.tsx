// @ts-ignore
import routes from "~react-pages";
import KeepAlive from "react-activation";
import React from "react";

const CenterLayout = () => {
  const location = useLocation();
  const route = useRoutes(routes);

  return (
    <Suspense>
      <KeepAlive
        id={location.state?.uuid}
        name={location.state?.uuid}
        cacheKey={location.state?.uuid}
      >
        <div id="keep-alive-content" className="keep-alive-content">
          <div className="alive-content">{route}</div>
        </div>
      </KeepAlive>
    </Suspense>
  );
};

export default React.memo(CenterLayout);
