import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div id="carouselExampleIndicators" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2491831/1707297534480.jpg?format=webp&imwidth=1024" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2560658/1710160354092.jpg?format=webp&imwidth=1024" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2509555/1708514177619.jpg?format=webp&imwidth=1024" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>


                            </div>
                            <br /><br />

                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <p>Deals!</p>
                                <div className="row g-3">
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://assetscdn1.paytm.com/images/cinema/Premalu--705x750-fef6e8d0-c4f5-11ee-851c-3901cd26a9f8.jpg?format=webp&imwidth=300" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Premalu</h5>
                                                <p class="card-text"></p>
                                                <a href="/Book" class="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://assetscdn1.paytm.com/images/cinema/Thankamani---705x750-9e0855f0-dabb-11ee-8171-7df0cded886f.jpg?format=webp&imwidth=300" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Thankamani</h5>
                                                <p class="card-text">
                                                </p>
                                                <a href="/Book" class="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://assetscdn1.paytm.com/images/cinema/Dune-Part-2-705x750-80a6cf10-ca89-11ee-a731-b5c20ce5229e-38a6ca90-d15e-11ee-812c-570f2acae884.jpg?format=webp&imwidth=300" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Dune</h5>
                                                <p class="card-text">
                                                </p>
                                                <a href="/Book" class="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://assetscdn1.paytm.com/images/cinema/Shaitaan-705x750-8476f990-d9e2-11ee-8171-7df0cded886f.jpg?format=webp&imwidth=300" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Shaitaan</h5>
                                                <p class="card-text">
                                                </p>
                                                <a href="/Book" class="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <a href="/view" class="btn btn-primary">More</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home