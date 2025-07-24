import { Outlet } from "react-router-dom";
import Header from "./components/partial/header";

export default function Layout(){
    return(
        <>
            <Header></Header>
            
            <Outlet/>
        </>
    )
}