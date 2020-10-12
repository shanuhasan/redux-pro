import React from 'react'

function Home() {
    return (
        <div className="home">
            <h1>Home Component</h1>
            <div className="home__cart">
                <div className="home__image">
                    <img src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png" alt="" />
                </div>
                <div className="home__info">
                    <span>Samsung A30</span>
                    <span>Price: $1000</span>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
