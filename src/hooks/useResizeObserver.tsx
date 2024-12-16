/**
 * @copyright Copyright 2024. CJ OliveNetworks Co. all rights reserved.
 * @file hooks/useResizeObserver.tsx
 * @description 웹 요소의 크기변화를 관찰하고 반응하는 hooks
 * @author Canal framework
 * @since 2024.03.11
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2024.03.11           Canal framework        		신규 생성
 */
export const useResizeObserver = () => {
  /**
   * =====================================================================
   *  변수 선언부
   * =====================================================================
   */
  const [width, setWidth] = useState(null);
  const ref = useRef(null);
  /**
   * =====================================================================
   *  Hook
   * =====================================================================
   */
  useEffect(() => {
    const observeTarget = ref.current;
    if (!observeTarget) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setWidth(entry.contentRect.width);
      });
    });

    resizeObserver.observe(observeTarget);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref.current]);

  return { ref, width };
};
