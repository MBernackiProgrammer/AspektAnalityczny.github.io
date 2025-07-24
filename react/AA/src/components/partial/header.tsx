import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header>
                <h1><Link to="/" >Dania Polszy</Link></h1>
                <nav>
                    <Link to="bigos">Bigos</Link>
                    <Link to="pierogi">Pierogi</Link>
                    <Link to="golabki">Gołąbki</Link>
                    <Link to="zurek">Żurek</Link>
                </nav>
            </header>
        </>
    )
}