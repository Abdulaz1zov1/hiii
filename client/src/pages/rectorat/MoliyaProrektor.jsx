import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ParticlesBg from 'particles-bg'
import ImageRector from '../../images/rectorat/Moliya-pro-rectori.jpg'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

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
                        <h2>{context[lang].rahbariyat.nineth}</h2>
                        <p>{context[lang].rahbariyat.fourth} <a href=" "><i class="fa-brands fa-facebook"></i></a> <a href="#"><i class="fa-brands fa-instagram"></i></a></p>
                        <p className='info'>{context[lang].bobiramon.p1}</p>
                    </div>
                    <div class="wrapper">
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-1" />
                            <label for="tab-1">
                                <span>{context[lang].bobiramon.p2}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <p>{context[lang].bobiramon.p3}</p>
                                <p>{context[lang].bobiramon.p4}</p>
                                <p>{context[lang].bobiramon.p5}</p>
                                <p> {context[lang].bobiramon.p6}</p>
                            </div>
                        </div>
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-2" />
                            <label for="tab-2">
                                <span>{context[lang].bobiramon.p7}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].bobiramon.p8}</li>
                                    <li>{context[lang].bobiramon.p9}</li>
                                    <li>{context[lang].bobiramon.p10}</li>
                                    <li>{context[lang].bobiramon.p11}</li>
                                    <li>{context[lang].bobiramon.p12}</li>
                                    <li>{context[lang].bobiramon.p13}</li>
                                    <li>{context[lang].bobiramon.p14}</li>
                                    <li>{context[lang].bobiramon.p15}</li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="parent-tab tab-3">
                            <input type="radio" name="tab" id="tab-3" />
                            <label for="tab-3" class="tab-3">
                                <span>{context[lang].bobiramon.p16}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-6" />
                            <label for="tab-6">
                                <span>{context[lang].bobiramon.p17}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].bobiramon.p18}</li>
                                    <li>{context[lang].bobiramon.p19}</li>
                                    <li>{context[lang].bobiramon.p20}</li>
                                    <li>{context[lang].bobiramon.p21}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photo">
                    <img src={ImageRector} />
                    <p><i class="fa-solid fa-mobile-screen-button"></i>+998-71-244-79-15</p>
                    <a href=" "><i class="fa-solid fa-envelope"></i>{context[lang].bobiramon.p22}</a>
                    <p><i class="fa-solid fa-location-dot"></i>{context[lang].bobiramon.p23}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RectorPage;
