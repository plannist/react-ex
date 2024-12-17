import React, { ReactNode, useEffect } from 'react';
import Header from '@/routs/Header';
import { useResizeObserver } from '@/hooks/useResizeObserver';
import AsideLayout from '@/layout/AsideLayout';

export interface ComponentReactElement {
  children?: ReactNode | ReactNode[];
  layout?: string;
  view?: any;
}

type Props = ComponentReactElement;

const FrameLayout = ({ children }: Props) => {
  const { ref, width } = useResizeObserver(); //변경 여부 체크
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    console.log('children >> ', children);
    // if (width) {
    console.log('width is [', width, ']');
    window.dispatchEvent(new Event('resize'));
    // }
  }, [width, children]);

  return (
    <>
      <main>
        {/*<Header />*/}
        <AsideLayout
          collapse={false}
          setCollapse={() => setIsCollapse(!isCollapse)}
        />
        <div className="content">
          <div ref={ref}>{children}</div>
        </div>
      </main>
    </>
  );
};

export default React.memo(FrameLayout);
