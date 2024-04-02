import {Suspense} from 'react'
import './App.css'


import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {useNavigate, useRoutes} from "react-router-dom";

// @ts-ignore
import routes from "~react-pages";
// import { useNavigate, useRoutes } from 'react-router';




function App() {

    const navigate = useNavigate();


    const goPage = (url : string) => {
      console.log("page 이동");
      // useRoutes(routes)
        navigate(url);


    }

    return (
        <>
            <Button onClick={()=>{goPage('/test/Ts')}} variant={"primary"}>
                테스트페이지
            </Button>
            <Button onClick={()=>{goPage('/')}} variant={"primary"}>
                메인페이지
            </Button>

            <Suspense fallback={<p>Loading...</p>}>



                {useRoutes(routes)}
            </Suspense>

            <p className="read-the-docs">
            Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
