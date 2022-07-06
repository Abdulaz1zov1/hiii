import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom';
import { useRef } from 'react'
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/Baltabaev.jpg'
import Image2 from '../../images/zam-dekan.jpg'
import Logo from '../../images/logo-circle.png'
import Image3 from '../../images/zam-2.jpg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useContext } from 'react';

function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={150} bg={true} />
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <div class="row">
                            <div class="col-lg-10 col-md-12">
                                <div className="top-photo-oomf top-photo_style"></div>
                                <div class="tab">
                                    <button class="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.a1}</button>
                                    <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.a2}</button>
                                    {/* <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.a3}</button> */}
                                </div>
                                <div id="About" ref={tabOne} class="tabcontent opened">
                                    <h3>{context[lang].facultet1.a1}</h3>
                                    <p>
                                        {context[lang].facultet1.a4}
                                    </p>
                                </div>

                                <div id="Functions" ref={tabTwo} class="tabcontent">
                                    <h3>{context[lang].facultet1.a2}</h3>
                                    <h5>{context[lang].facultet1.a5}</h5>
                                    <ul>
                                        <li>“{context[lang].kafedra.eighth}”</li>
                                        <li>“{context[lang].kafedra.fivth}”</li>
                                        <li>“{context[lang].kafedra.sixth}”</li>
                                        <li>“{context[lang].kafedra.seventh}”</li>
                                    </ul>
                                    <p>{context[lang].facultet1.a6}</p>
                                </div>


                                <div id="Management" ref={tabThree} class="tabcontent">
                                    <h3>{context[lang].facultet1.a3}</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="teachers justify-content-center">
                                    <div class="wrapper-personal">
                                        <div class="photo-personal">
                                            <img class="images-personal" src={Image1} alt="About us" />
                                            <div class="photo__large">
                                                <div class="bg-text">
                                                    <span class="degree">{context[lang].facultet1.a8}</span>
                                                    <span class="info"><b>{context[lang].facultet1.a9}</b> {context[lang].facultet1.a10}, 16:00-17:00
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> +99871 244-92-35 <br /> 97-445-02-09
                                                        <br />
                                                        <b>{context[lang].bizningManzil.fourth}</b> ulug85bek77@gmail.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal">{context[lang].facultet1.a7}</h6>
                                    </div>
                                    <div class="wrapper-personal">
                                        <div class="photo-personal">
                                            <img class="images-personal" src={Image2} alt="About us" />
                                            <div class="photo__large">
                                                <div class="bg-text">
                                                    <span class="degree">{context[lang].facultet1.a12}</span>
                                                    <span class="info"><b>{context[lang].faculty_names.first}</b>
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 97 3307250
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal">{context[lang].facultet1.a11}</h6>
                                    </div>
                                    <div class="wrapper-personal">
                                        <div class="photo-personal">
                                            <img class="images-personal" src={Image3} alt="About us" />
                                            <div class="photo__large">
                                                <div class="bg-text">
                                                    <span class="degree">{context[lang].facultet1.a14}</span>
                                                    <span class="info"><b>{context[lang].faculty_names.first}</b>
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 97 7078337</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal">{context[lang].facultet1.a13}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].underCategory.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].faculty_names.first}</a></li>
                            <Link to={'/page/static/get/17'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/mktf'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/nmktf'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/vinoch'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/qush_talim'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.sixth}</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticOne;
