import React from "react";

function Home(props) {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://thumbs.dreamstime.com/b/pink-heart-shape-shopping-cart-rgb-color-icon-cartoon-store-trolley-small-purple-wheels-being-couple-rich-person-214308127.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://media.product.which.co.uk/prod/images/original/22480f842945-ic20006-0054-00-front-615x461.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({price:"100000", name:"iPhone"})}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;