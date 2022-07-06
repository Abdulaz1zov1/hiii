import slide_5 from '../../images/slide1.jpg'
import slide_2 from '../../images/slide2.jpg'
import slide_3 from '../../images/slide3.jpg'
import slide_4 from '../../images/slide4.jpg'
import slide_1 from '../../images/Qabul22.jpg'

function MainSlider() {
    return (
        <>
            <div class="header_img">
                <div className="container-fluid">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <img class="" src={`${slide_5}`} width="100%" height="100%" alt="" />
                            </div>
                            <div class="carousel-item active">
                                <img class="" src={`${slide_1}`} width="100%" height="100%" alt="" />
                            </div>
                            <div class="carousel-item">
                                <img class="" src={`${slide_2}`} width="100%" height="100%" alt="" />
                            </div>
                            <div class="carousel-item">
                                <img class="" src={`${slide_3}`} width="100%" height="100%" alt="" />
                            </div>
                            <div class="carousel-item">
                                <img class="" src={`${slide_4}`} width="100%" height="100%" alt="" />
                            </div>

                        </div>
                        <button class="carousel-control-prev slider__btn" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button class="carousel-control-next slider__btn" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSlider;
