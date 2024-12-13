import Nav from "@/assets/Nav/Nav";
import { Button } from "antd";
import { dispatchSetLoading } from "@/store/core/loadingStore";
import _ from "lodash";
import { ButtonGroup } from "react-bootstrap";

const Header = () => {
  const refHeader = useRef(null);
  const navigate = useNavigate();

  const goPage = (url: string) => {
    if (_.isEmpty(url)) {
      console.log("page is empty");
      return false;
    }
    console.log("page url is [", url, "]");
    navigate(url);
  };

  const progressLoading = () => {
    // dispatchSetLoading(true);
    // setTimeout(() => {
    //   dispatchSetLoading(false);
    // }, 2000);
  };

  return (
    <header className="mt-3">
      <ButtonGroup>
        <Button onClick={() => goPage("/test/TestRout")}>
          {"App.tsx 버튼"}
        </Button>
        <Button
          onClick={() => {
            progressLoading();
          }}
        >
          {"Loading On Off"}
        </Button>
        <Button
          onClick={() => {
            goPage("/");
          }}
        >
          {"back"}
        </Button>
      </ButtonGroup>
    </header>
  );
};

export default Header;
