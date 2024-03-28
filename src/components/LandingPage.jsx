import React from 'react'
import ImgSrc from "../images/1.jpg"
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <div className='custom-container'>
            <img src={ImgSrc} className='img-class image-fluid' />
            <div className=''>
                <h1 className='landingpage-title'>We Bulit <span className='text-success'>Anything</span><br /> For Your</h1>
                <p className='landingpage-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Aperiam, cum <span className='underline-success'>accusantium</span>  illum culpa at voluptates. </p>
                <button className='btn btn-custom rounded-pill'>Get Started <i class="fa-solid fa-arrow-right fa-spin"></i></button>
            </div>
        </div>
    )
}

export default LandingPage
