import {Link} from "react-router-dom";

export default function Home() {
    return(
        <>
            <h1>Nav</h1>
            <ul className="navList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </>
    )
}