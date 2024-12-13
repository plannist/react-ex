import React, { useEffect } from "react";
import { ReactNode } from "react";
import { useResizeObserver } from "@/hooks/useResizeObserver";
import Header from "@/routs/Header";
// @ts-ignore
import routes from "~react-pages";

export interface ComponentReactElement {
  children?: ReactNode | ReactNode[];
  layout?: string;
  view?: any;
}

type Props = ComponentReactElement;

const Layout = ({ children }: Props) => {
  const { ref, width } = useResizeObserver(); //변경 여부 체크
  const route = useRoutes(routes);

  useEffect(() => {
    // if (width) {
    console.log("width is [", width, "]");
    window.dispatchEvent(new Event("resize"));
    // }
  }, [width, route]);

  return (
    <>
      <main>
        <Header />
        <div className="content">
          <div ref={ref}>{children}</div>
        </div>
      </main>
    </>
  );
};

export default React.memo(Layout);
