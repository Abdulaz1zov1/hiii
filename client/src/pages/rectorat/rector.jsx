import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ParticlesBg from 'particles-bg'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ImageRector from '../../images/rectorat/Rector.jpeg'

import '../../pages/rectorat/style-rectorat.css';

function RectorPage() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={150} bg={true} />
            <div className="container-pages"><Header /></div>

            <div class="container-rektor">
                <div class="about">
                    <div class="about-text">
                        <h2>{context[lang].rahbariyat.sixth}</h2>
                        <p>{context[lang].rahbariyat.first} <a href="https://www.facebook.com/botir.usmonov.5" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a> <a href="https://www.instagram.com/b.usmonov_/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></p>
                        <p className='info'>{context[lang].rektor.p1}</p>
                    </div>
                    <div class="wrapper">
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-1" />
                            <label for="tab-1">
                                <span>{context[lang].rektor.p2}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <p>{context[lang].rektor.p3}</p>
                                <p>{context[lang].rektor.p4}</p>
                                <p>{context[lang].rektor.p5}</p>
                                <p>{context[lang].rektor.p6}</p>
                            </div>
                        </div>
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-2" />
                            <label for="tab-2">
                                <span>{context[lang].rektor.p7}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].rektor.p8}</li>
                                    <li>{context[lang].rektor.p9}</li>
                                    <li>{context[lang].rektor.p10}</li>
                                    <li>{context[lang].rektor.p11}</li>
                                    <li>{context[lang].rektor.p12}</li>
                                    <li>{context[lang].rektor.p13}</li>
                                    <li>{context[lang].rektor.p14}</li>
                                    <li>{context[lang].rektor.p15}</li>
                                    <li>{context[lang].rektor.p16}</li>
                                    <li>{context[lang].rektor.p17}</li>
                                    <li>{context[lang].rektor.p18}</li>
                                    <li>{context[lang].rektor.p19}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="parent-tab tab-3">
                            <input type="radio" name="tab" id="tab-3" />
                            <label for="tab-3" class="tab-3">
                                <span>{context[lang].rektor.p20}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].rektor.p21}</li>
                                    <li>{context[lang].rektor.p22}</li>
                                    <li>{context[lang].rektor.p23}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-6" />
                            <label for="tab-6">
                                <span>{context[lang].rektor.p24}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].rektor.p25}</li>
                                    <li>{context[lang].rektor.p26}</li>
                                    <li> {context[lang].rektor.p27}</li>
                                    <li>{context[lang].rektor.p28}</li>
                                    <li>{context[lang].rektor.p29}</li>
                                    <li>{context[lang].rektor.p30}</li>
                                    <li> {context[lang].rektor.p31}</li>
                                    <li>{context[lang].rektor.p32}</li>
                                    <li>{context[lang].rektor.p33}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photo">
                    <img src={ImageRector} />
                    <p><i class="fa-solid fa-mobile-screen-button"></i>(998-71)244-79-17</p>
                    <a href="http://rector.tcti.uz/"><i class="fa-solid fa-envelope"></i>{context[lang].rektor.p34}</a>
                    <p><i class="fa-solid fa-location-dot"></i> {context[lang].rektor.p35}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RectorPage;
