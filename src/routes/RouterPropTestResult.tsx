interface propTypes {
    location: {
        state: {
            menu: {
                name: string,
                price: string
            }
        }
    }
}

export default function RouterPropTestResult(prop:propTypes) {
    const name = prop.location.state.menu.name;
    const price = prop.location.state.menu.price;
    return(
        <>
            <h1>Router Prop TestResult</h1>
            <div>{name}</div>
            <div>{price}</div>
        </>
    );
}