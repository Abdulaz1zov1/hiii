import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import ParticlesBg from 'particles-bg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'

import Image from '../../images/356a192b79_1644576467.png'
import Image2 from '../../images/da4b9237ba_1644576474.png'

function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={50} bg={true} />
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <div class="row">
                            <div class="col-lg-10 col-md-12">
                                <h3>{context[lang].centre.fivth}</h3>
                                <div class="tab">
                                    <button class="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].centre.fifteenth}</button>
                                    <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.b1}</button>
                                    <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.a3}</button>
                                </div>
                                <div id="About" ref={tabOne} class="tabcontent opened">
                                    <h3>{context[lang].centre.fifteenth}</h3>
                                    <p>{context[lang].xalqaroAloqa.x1}</p>
                                    <p>{context[lang].xalqaroAloqa.x2}</p>
                                </div>
                                <div id="Functions" ref={tabTwo} class="tabcontent">
                                    <h3>{context[lang].facultet1.b1}</h3>
                                    <p>{context[lang].xalqaroAloqa.x3}</p>
                                    <p>{context[lang].xalqaroAloqa.x4}</p>
                                    <p>{context[lang].xalqaroAloqa.x5}</p>
                                    <p>{context[lang].xalqaroAloqa.x6}</p>
                                    <p>{context[lang].xalqaroAloqa.x7}</p>
                                    <p>{context[lang].xalqaroAloqa.x8}</p>
                                    <p></p>
                                </div>
                                <div id="Management" ref={tabThree} class="tabcontent">
                                    <h3>{context[lang].facultet1.a3}</h3>
                                    <p>{context[lang].xalqaroAloqa.x9}</p>
                                    <p>{context[lang].xalqaroAloqa.x10}</p>
                                    <p>{context[lang].xalqaroAloqa.x11}</p>
                                    <p>{context[lang].xalqaroAloqa.x12}</p>
                                    <p>{context[lang].xalqaroAloqa.x13}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="teachers justify-content-center">
                                    <div class="wrapper-personal">
                                        <div class="photo-personal">
                                            <img class="images-personal" src={Image} alt="About us" />
                                            <div class="photo__large">
                                                <div class="bg-text">
                                                    <span class="degree">{context[lang].facultet6.a42}</span>
                                                    <p class="info">{context[lang].xalqaroAloqa.x14} <br />
                                                        {context[lang].xalqaroAloqa.x16} <br />
                                                        {context[lang].bizningManzil.fourth} zebo.babakhanova@gmail.com
                                                        {context[lang].bizningManzil.second} (+998 71) 244-77-26
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal">{context[lang].xalqaroAloqa.x14}</h6>
                                    </div>
                                    <div class="wrapper-personal">
                                        <div class="photo-personal">
                                            <img class="images-personal" src={Image2} alt="About us" />
                                            <div class="photo__large">
                                                <div class="bg-text">
                                                    <span class="degree">{context[lang].monitoring.m10}</span>
                                                    <p class="info">{context[lang].xalqaroAloqa.x15}
                                                        <br />
                                                        {context[lang].bizningManzil.fourth} tkti_xab@mail.ru
                                                        <br />
                                                        {context[lang].bizningManzil.second} (+998 71) 244-77-26.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal">{context[lang].xalqaroAloqa.x15}</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].centre.first}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].centre.fivth}</a></li>
                            <Link to={'/page/static/get/9'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/8'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/13'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.sixth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/10'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.seventh}</a></li>
                            </Link>
                            <Link to={'/page/static/get/7'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.eighth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/4'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.nineth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/6'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.tenth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/12'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.eleventh}</a></li>
                            </Link>
                            <Link to={'/page/static/get/44'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.bugalter}</a></li>
                            </Link>
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].centre.second}</p></li>
                            <Link to={'/page/static/get/11'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.twelveth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/14'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.thirteenth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/5'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.fourteenth}</a></li>
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
