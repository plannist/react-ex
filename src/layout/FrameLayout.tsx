import React, { ReactNode, useEffect } from 'react';
import Header from '@/routs/Header';
import { useResizeObserver } from '@/hooks/useResizeObserver';

export interface ComponentReactElement {
  children?: ReactNode | ReactNode[];
  layout?: string;
  view?: any;
}

type Props = ComponentReactElement;

const FrameLayout = ({ children }: Props) => {
  const { ref, width } = useResizeObserver(); //변경 여부 체크

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
        <Header />
        <div className="content">
          <div ref={ref}>{children}</div>
        </div>
      </main>
    </>
  );
};

export default React.memo(FrameLayout);
