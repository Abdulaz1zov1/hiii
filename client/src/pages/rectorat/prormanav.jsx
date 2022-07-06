
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ParticlesBg from 'particles-bg'
import ImageRector from '../../images/rectorat/Manviy-pro-rector.jpg'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import '../../pages/rectorat/style-rectorat.css';

function RectorPageManav() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={150} bg={true} />
            <div className="container-pages"><Header /></div>

            <div class="container-rektor">
                <div class="about">
                    <div class="about-text">
                        <h2>{context[lang].rahbariyat.tenth}</h2>
                        <p>{context[lang].rahbariyat.fifth}  <a href=" "><i class="fa-brands fa-facebook"></i></a> <a href=" "><i class="fa-brands fa-instagram"></i></a></p>
                        <p className='info'>{context[lang].prormanav.f1}</p>
                    </div>
                    <div class="wrapper">
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-1" />
                            <label for="tab-1">
                                <span>{context[lang].prormanav.f2}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <p>{context[lang].prormanav.f3}</p>
                                <p>{context[lang].prormanav.f4}</p>
                                <p>{context[lang].prormanav.f5}</p>

                            </div>
                        </div>
                        <div class="parent-tab">
                            <input type="radio" name="tab" id="tab-2" />
                            <label for="tab-2">
                                <span>{context[lang].prormanav.f11}</span>
                                <div class="icon"><i class="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div class="content">
                                <ul>
                                    <li>{context[lang].prormanav.f7} </li>
                                    <li>{context[lang].prormanav.f8}</li>
                                    <li>{context[lang].prormanav.f9}</li>
                                    <li>{context[lang].prormanav.f10}</li>
                                    <li>{context[lang].prormanav.f11}</li>
                                    <li>{context[lang].prormanav.f12}</li>
                                    <li>{context[lang].prormanav.f13}</li>
                                    <li>{context[lang].prormanav.f14}</li>
                                    <li>{context[lang].prormanav.f15}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photo">
                    <img src={ImageRector} />
                    <p><i class="fa-solid fa-mobile-screen-button"></i>Tel: (998 71) 244-79-24</p>
                    <a href="#"><i class="fa-solid fa-envelope"></i>{context[lang].prormanav.f16}</a>
                    <p><i class="fa-solid fa-location-dot"></i> {context[lang].prormanav.f17}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RectorPageManav;
