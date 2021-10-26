import React from 'react';


const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide mr-40 ml-40" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner ">
                <div className="carousel-item justify-content-center active">
                    <img src="./images/bannerweb.png" className="d-block w-100 h-60" alt="slide1"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-yellow-400">WAJEEHA FAROOQI</h5>
                        <p className="text-yellow-400 font-bold">Researcher | Data Scientist| Web Developeur</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./images/bannerds.jpg" className="d-bloc w-100 h-60" alt="slide2"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-yellow-400">WAJEEHA FAROOQI</h5>
                        <p className="text-yellow-400 font-bold">Researcher | Data Scientist| Web Developeur</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./images/SLIDE4.jpg" className="d-bloc w-100 h-60" alt="slide3"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-yellow-400">WAJEEHA FAROOQI</h5>
                        <p className="text-yellow-400 font-bold">Researcher | Data Scientist| Web Developeur</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner
