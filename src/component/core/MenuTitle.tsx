import Title from '@/assets/styled/Title/title';
import { Button, Tooltip } from 'antd';

const MenuTitle = (props: any) => {
  const { title } = props;
  return (
    <>
      <Title className="menu-title">
        <div className="title-text">
          <div className="title">
            <h2>{title}</h2>
            <Tooltip placement="rightBottom" title={'sddd'} arrow={false} open={false} overlayClassName={'path-more'}>
              <Button className="btn-text"></Button>
            </Tooltip>
          </div>
        </div>
      </Title>
    </>
  );
};

export default MenuTitle;
