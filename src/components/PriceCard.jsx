export const PriceCard = ( props ) => {
    
    return (
        <div className="priceCard" data-cardtype={props.cardType}>
            <span > {props.data.title} </span>
            <span ref={ props.priceRef } className="cardPrice"> <span className="currencySign">$</span> {props.price} </span>
            <div className="cardCons">
                <hr />
                <span className="cardCon"> {props.data.storage} </span>
                <hr />
                <span className="cardCon"> {props.data.users} </span>
                <hr />
                <span className="cardCon"> {props.data.send} </span>
                <hr />
            </div>

            <button className="cardSubmit"> <span>LEARN MORE</span> </button>
        </div>
    )
}