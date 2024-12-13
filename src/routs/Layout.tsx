import React, { useEffect } from "react";
import { ReactNode } from "react";
import { useResizeObserver } from "@/hooks/useResizeObserver";
import Header from "@/routs/Header";
import KeepAlive from "react-activation";
// @ts-ignore
import routes from "~react-pages";

export interface ComponentReactElement {
  children?: ReactNode | ReactNode[];
  layout?: string;
  view?: any;
}

type Props = ComponentReactElement;

const Layout = ({ layout }: Props) => {
  const { ref, width } = useResizeObserver(); //변경 여부 체크
  const location = useLocation();
  const route = useRoutes(routes);

  useEffect(() => {
    // if (width) {
    console.log("width is [", width, "]");
    window.dispatchEvent(new Event("resize"));
    // }
  }, [width, route]);

  useEffect(() => {
    console.log("layout Props > ", layout);
  }, [layout]);

  return (
    <>
      <main>
        <Header />
        <div className="content">
          <div ref={ref}>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default React.memo(Layout);
