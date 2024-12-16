/**
 * @copyright Copyright 2024. CJ OliveNetworks Co. all rights reserved.
 * @file component/commons/core/loading/Loading.tsx
 * @description Loading
 * @author Canal framework
 * @since 2024.03.11
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2024.03.11           Canal framework        		신규 생성
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
