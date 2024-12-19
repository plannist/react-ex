import { Button, Form } from 'antd';
import InputText from '@/component/form/InputText';
import MenuTitle from '@/component/core/MenuTitle';

const InsertForm = () => {
  console.log('TestRout');
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <>
      <div className={'page'}>
        <MenuTitle title={'등록양식'} />
        <section className="section">
          <Form form={form}>
            <div className="tbl-wrap">
              <table className="tbl">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>
                      <InputText name="id"></InputText>
                    </td>
                    <th>저장</th>
                    <td>
                      <Button
                        onClick={() => {
                          console.log('formData: ', form.getFieldsValue());
                        }}
                        type="primary"
                      >
                        {'저장'}
                      </Button>
                    </td>
                    <th>뒤로가기</th>
                    <td>
                      <Button
                        onClick={() => {
                          navigate(-1);
                        }}
                        type="text"
                      >
                        {'뒤로가기'}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Form>
        </section>
      </div>
    </>
  );
};

export default InsertForm;
