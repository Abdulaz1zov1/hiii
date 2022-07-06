
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ParticlesBg from 'particles-bg'
import ImageRector from '../../images/rectorat/Oquv-pro-rector.jpg'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import '../../pages/rectorat/style-rectorat.css';

function RectorPageOquv() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={150} bg={true} />
            <div className="container-pages"><Header /></div>

            <div class="container-rektor">
                <div class="about">
                    <div class="about-text">
                    <h2>{context[lang].rahbariyat.seventh}</h2>
                        <p>{context[lang].rahbariyat.second}  <a href=" "><i class="fa-brands fa-facebook"></i></a> <a href=" "><i class="fa-brands fa-instagram"></i></a></p>
                        <p className='info'>{context[lang].safarov.p1}</p>
                    </div>
                    <div class="wrapper">
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-1" />
                            <label for="tab-1">
                                <span>{context[lang].safarov.p2}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <p>{context[lang].safarov.p3}</p>
                                <p>{context[lang].safarov.p4}</p>
                                <p>{context[lang].safarov.p5}</p>
                                
                            </div>
                        </div>
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-2" />
                            <label for="tab-2">
                                <span>{context[lang].safarov.p6}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].safarov.p7} </li>
                                    <li>{context[lang].safarov.p8}</li>
                                    <li>{context[lang].safarov.p9}</li>
                                    <li>{context[lang].safarov.p10}</li>
                                    <li>{context[lang].safarov.p11}</li>
                                    <li>{context[lang].safarov.p12}</li>
                                    <li>{context[lang].safarov.p13}</li>
                                    <li>{context[lang].safarov.p14}</li>
                                    <li>{context[lang].safarov.p15}</li>
                                    <li>{context[lang].safarov.p16}</li>
                                    <li>{context[lang].safarov.p17}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="parent-tab tab-3">
                            <input type="radio" name="tab" id="tab-3" />
                            <label for="tab-3" class="tab-3">
                                <span>{context[lang].safarov.p18}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].safarov.p19}</li>
                                    <li>{context[lang].safarov.p20}</li>
                                    <li>{context[lang].safarov.p21}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-6" />
                            <label for="tab-6">
                                <span>{context[lang].safarov.p22}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].safarov.p23}</li>
                                    <li>{context[lang].safarov.p24}</li>
                                    <li>{context[lang].safarov.p25}</li>
                                    <li>{context[lang].safarov.p26}</li>
                                    <li>{context[lang].safarov.p27}</li>
                                    <li>{context[lang].safarov.p28}</li>
                                    <li>{context[lang].safarov.p29}</li>
                                    <li>{context[lang].safarov.p30}</li>
                                    <li>{context[lang].safarov.p31}</li>
                                    <li>{context[lang].safarov.p32}</li>
                                    <li>{context[lang].safarov.p33}</li>
                                    <li>{context[lang].safarov.p34}</li>
                                    <li>{context[lang].safarov.p35}</li>
                                    <li>{context[lang].safarov.p36}</li>
                                    <li>{context[lang].safarov.p37}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photo">
                    <img src={ImageRector} />
                    <p><i class="fa-solid fa-mobile-screen-button"></i>998 (71) 244-79-18</p>
                    <a href="#"><i class="fa-solid fa-envelope"></i>{context[lang].safarov.p38}</a>
                    <p><i class="fa-solid fa-location-dot"></i> {context[lang].safarov.p39}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RectorPageOquv;
