/**
 * @copyright Copyright 2024. xxx. all rights reserved.
 * @context redux loading reducer 기반 로딩
 * @description 화면 전역으로 loading 표시
 * @author xx
 * @since 2025.01.01
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.01        				xxxx xxx        			  신규 생성
 */

// hooks
import { useAppSelector } from '@/store/coreHook';

// Antd items
import { Spin } from 'antd';

const Loading = () => {
  /**
   * =====================================================================
   *  변수 선언부
   * =====================================================================
   */
  const { loading } = useAppSelector((state) => state.loading);

  return (
    <>
      {loading && (
        <div className="loading-indicator">
          <Spin size="large" delay={3}></Spin>
        </div>
      )}
    </>
  );
};

export default Loading;
