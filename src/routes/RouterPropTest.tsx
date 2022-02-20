import {Link} from "react-router-dom";

export default function RouterPropTest() {
    const menu = {
        name : "라떼",
        price : "5,000원"
    };
    return(
        <>
            <h1>Router Prop Test</h1>
            <Link to={{
                pathname : "/routerproptestresult",
                state : {
                    menu
                }
            }}>데이터 날리기</Link>
        </>
    );
}