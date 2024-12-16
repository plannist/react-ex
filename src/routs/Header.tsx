import { Button } from 'antd';
import { setLoading } from '@/store/core/loadingStore';
import _ from 'lodash';
import { ButtonGroup } from 'react-bootstrap';
import { useAppDispatch } from '@/store/coreHook';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goPage = (url: string) => {
    if (_.isEmpty(url)) {
      console.log('page is empty');
      return false;
    }

    console.log('page url is [', url, ']');
    navigate(url);
  };

  const progressLoading = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  };

  return (
    <header className="mt-3">
      <ButtonGroup>
        <Button onClick={() => goPage('/test/TestRout')}>
          {'App.tsx 버튼'}
        </Button>
        <Button
          onClick={() => {
            progressLoading();
          }}
        >
          {'Loading On Off'}
        </Button>
        <Button
          onClick={() => {
            goPage('/');
          }}
        >
          {'back'}
        </Button>
      </ButtonGroup>
    </header>
  );
};

export default Header;
