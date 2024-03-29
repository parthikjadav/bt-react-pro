import React from 'react'
import "./LandingPage.css"
import "./ProductCard.css"

const ProductCard = () => {
    return (
        <div className='bg-black text-white'>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Our Best <span className='bg-custom'>Seller</span> Product's</h2>
                    </div>
                    <div className="col-md-6 col-xl-4 col-lg-4 col-sm-6 col-xs-6">
                        <div class="card custom-css-card" >
                            <img src="https://img.freepik.com/free-photo/sunglasses-reflection-close-up-eyesight-urban-skyline-modern-elegance-generated-by-ai_188544-19636.jpg" class="card-img-top p-3" alt="..." />
                            <div class="card-body text-white">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn bg-green text-white">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-lg-4 col-sm-6 col-xs-6">
                        <div class="card custom-css-card" >
                            <img src="https://img.freepik.com/free-photo/sunglasses-reflection-close-up-eyesight-urban-skyline-modern-elegance-generated-by-ai_188544-19636.jpg" class="card-img-top p-3" alt="..." />
                            <div class="card-body text-white">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn bg-green text-white">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-lg-4  col-sm-6 col-xs-6">
                        <div class="card custom-css-card" >
                            <img src="https://img.freepik.com/free-photo/sunglasses-reflection-close-up-eyesight-urban-skyline-modern-elegance-generated-by-ai_188544-19636.jpg" class="card-img-top p-3" alt="..." />
                            <div class="card-body text-white">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn bg-green text-white">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
