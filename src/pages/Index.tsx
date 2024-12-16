import { useEffect } from 'react';
import { Button } from 'antd';

const Index = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
  const [count, setCount] = useState(0);
  /**
   * =====================================================================
   *	Hook
   * =====================================================================
   */
  useEffect(() => {
    console.log('index');
  }, []);

  return (
    <>
      <div>
        <h2>Hi</h2>
        <h1>{count}</h1>
      </div>
      <div>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {'count+1'}
        </Button>
      </div>
    </>
  );
};

export default Index;
