import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import Image1 from '../../images/bux1.jpg'
import Image2 from '../../images/bux2.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'


function Bugalter() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);

    return (
        <>
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                <div className='page_main'>
                    <div class="row">
                        <div class="col-lg-10 col-md-12">
                            <h3>{context[lang].centre.bugalter}</h3>

                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].bugalter.bug5}</button>
                                {/* <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">Bizning
                                    maqsadimiz</button> */}
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].facultet1.a3}</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>{context[lang].bugalter.bug5}</h3>
                                <ul>
                                    <li>{context[lang].bugalter.bug7}</li>
                                    <li>{context[lang].bugalter.bug8}</li>
                                    <li>{context[lang].bugalter.bug9}</li>
                                    <li>{context[lang].bugalter.bug10}</li>
                                    <li>{context[lang].bugalter.bug11}</li>
                                    <li>{context[lang].bugalter.bug12}</li>
                                    <li>{context[lang].bugalter.bug13}</li>
                                    <li>{context[lang].bugalter.bug14}</li>
                                </ul>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                {/* <h3>{context[lang].bugalter.bug15}</h3> */}
                                {/* <p>Bo‘limning maqsadi oliy ta’lim muassasasida Kadrlar tayyorlash milliy modeli vazifalariga muvofiq mamlakatimizning ijtimoiy- iqtisodiy rivojlanish tendensiyalaridan kelib chiqqan holda tegishli mutaxassislik bo‘yicha kasbiy, pedogogik, ilmiy, huquqiy va psixologik bilimlarni chuqur o‘zlashtirgan jamiyat, davlat va oila oldida ma’suliyatini to‘la anglaydigan yuqori malakali magistrlar-mutaxassislarni tayyorlashni tashkil etishdan iborat.</p> */}
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>{context[lang].bugalter.bug6}</h3>
                                <ul>
                                    <li>{context[lang].bugalter.bug16}</li>
                                    <li>{context[lang].bugalter.bug17}</li>
                                    <li>{context[lang].bugalter.bug18}</li>
                                    <li>{context[lang].bugalter.bug19}</li>
                                    <li>{context[lang].bugalter.bug20}</li>
                                    <li>{context[lang].bugalter.bug21}</li>
                                </ul>
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
                                                <span class="degree">{context[lang].bugalter.bug1}</span>
                                                <span class="info">{context[lang].bugalter.bug2}
                                                <br />
                                                    {context[lang].bizningManzil.fourth} -
                                                    <br />
                                                    {context[lang].bizningManzil.second} (0 371) 244-79-22
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">{context[lang].bugalter.bug2}</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image2} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">{context[lang].bugalter.bug3}</span>
                                                <span class="info">{context[lang].bugalter.bug4}
                                                <br />
                                                    {context[lang].bizningManzil.second} (0 371) 244-78-53</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">{context[lang].bugalter.bug4}</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].centre.first}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].centre.bugalter}</a></li>
                            <Link to={'/page/static/get/8'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/9'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/15'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.fivth}</a></li>
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

export default Bugalter;
