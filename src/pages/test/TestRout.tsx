import { Button, Form, Input } from 'antd';

const TestRout = () => {
  console.log('TestRout');
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <>
      <div className={'page'}>
        <section className="section">
          <Form form={form}>
            <div className="tbl-wrap">
              <table className="tbl">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>
                      <Input name="id"></Input>
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
                    <th>두번째페이지</th>
                    <td>
                      <Button
                        onClick={() => {
                          navigate('/test/SecondsRoute');
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

export default TestRout;
