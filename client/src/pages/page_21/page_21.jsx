import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/jis-tar.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'



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
                            <h3>{context[lang].kafedra.third}</h3>
                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf4.p1}</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf4.p2}</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf4.p3}</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <p>{context[lang].kaf4.p4}</p>
                                <p> {context[lang].kaf4.p5}</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <p>{context[lang].kaf4.p6}</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <p>{context[lang].kaf4.p7}</p>
                                <p> {context[lang].kaf4.p8}
                                </p>
                                {context[lang].kaf4.p9}
                                <br />
                                {context[lang].kaf4.p10}
                                <br />
                                {context[lang].kaf4.p11}
                                <br />
                                {context[lang].kaf4.p12}
                                <br />
                                {context[lang].kaf4.p13}
                                <br />
                                {context[lang].kaf4.p14}
                                <br />
                                {context[lang].kaf4.p15}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <div class="teachers">
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image1} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">{context[lang].kaf4.p16}</span>
                                                <span class="info">
                                                    
                                                {context[lang].kaf4.p17}

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">{context[lang].kaf4.p18}</h6>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].kaf4.p19}</p></li>
                        <li className="nav-ul-li active"><a href="">{context[lang].kaf4.p20}</a></li>
                        <Link to={'/page/static/get/18'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p21}</a></li>
                        </Link>
                        <Link to={'/page/static/get/19'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p22}</a></li>
                        </Link>
                        <Link to={'/page/static/get/20'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p23}</a></li>
                        </Link>
                        <Link to={'/page/static/get/22'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p24}</a></li>
                        </Link>
                        <Link to={'/page/static/get/13'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p25}</a></li>
                        </Link>
                        <Link to={'/page/static/get/24'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p26}</a></li>
                        </Link>
                        <Link to={'/page/static/get/25'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p27}</a></li>
                        </Link>
                        <Link to={'/page/static/get/26'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p28}</a></li>
                        </Link>
                        <Link to={'/page/static/get/27'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p29}</a></li>
                        </Link>
                        <Link to={'/page/static/get/28'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p30}</a></li>
                        </Link>
                        <Link to={'/page/static/get/29'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p31}</a></li>
                        </Link>
                        <Link to={'/page/static/get/30'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p32}</a></li>
                        </Link>
                        <Link to={'/page/static/get/31'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p33}</a></li>
                        </Link>
                        <Link to={'/page/static/get/32'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p34}</a></li>
                        </Link>
                        <Link to={'/page/static/get/33'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p35}</a></li>
                        </Link>
                        <Link to={'/page/static/get/34'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p36}</a></li>
                        </Link>
                        <Link to={'/page/static/get/35'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p37}</a></li>
                        </Link>
                        <Link to={'/page/static/get/36'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p38}</a></li>
                        </Link>
                        <Link to={'/page/static/get/37'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p39}</a></li>
                        </Link>
                        <Link to={'/page/static/get/38'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p40}</a></li>
                        </Link>
                        <Link to={'/page/static/get/39'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p41}</a></li>
                        </Link>
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p42}</a></li>
                        </Link>
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p43}</a></li>
                        </Link>
                        <Link to={'/page/static/get/42'}>
                        <li className="nav-ul-li"><a href="">{context[lang].kaf4.p44}</a></li>
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
