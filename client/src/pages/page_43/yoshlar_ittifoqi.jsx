import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import YoshlarItt from '../../images/yosh.png';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'



function PageStaticYoshlarIttifoqi() {
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
                                <h3>{context[lang].YoshlarIttifoqi.first}</h3>
                                <div class="tab">
                                    <button class="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].YoshlarIttifoqi.second}
                                    </button>
                                    <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen"> </button>
                                    <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">   </button>
                                </div>
                                <div id="About" ref={tabOne} class="tabcontent opened">
                                    <h4>{context[lang].YoshlarIttifoqi.second}</h4>
                                    <p>{context[lang].YoshlarIttifoqi.p1}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p2}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p3}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p4}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p5}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p6}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p7}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p8}</p>
                                    <p>{context[lang].YoshlarIttifoqi.p9}</p>
                                </div>

                                <div id="Functions" ref={tabTwo} class="tabcontent">

                                </div>

                                <div id="Management" ref={tabThree} class="tabcontent">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="teachers">
                                    <div class="wrapper-personal">
                                        <div class="photo-personal">
                                            <img class="images-personal" src={YoshlarItt} alt="About us" />
                                            <div class="photo__large">
                                                <div class="bg-text">
                                                    <span class="degree"><p>{context[lang].YoshlarIttifoqi.p10}</p></span>
                                                    <span class="info">
                                                        <br />
                                                        <p>{context[lang].YoshlarIttifoqi.p11}</p>
                                                        <br />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal"><p>{context[lang].YoshlarIttifoqi.p12}</p></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Tuzilma</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].underCategory.seventh}</a></li>
                            <Link to={'/page/static/get/rectorat'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.first}</a></li>
                            </Link>
                            <Link to={'/'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/faculties'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/1'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/3'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/filial'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.sixth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/litsey'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.eighth}</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticYoshlarIttifoqi;
