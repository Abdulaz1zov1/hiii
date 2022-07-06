import { Helmet } from "react-helmet";
import { useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react'
// import TelegramIcon from '../../images/social-icons/telegram-brands.svg'
// import InstagramIcon from '../../images/social-icons/instagram-brands.svg'
// import FacebookIcon from '../../images/social-icons/facebook-brands.svg'
// import YoutubeIcon from '../../images/social-icons/youtube-brands.svg'


function Footer() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <div className="container-fluid">
                <footer class="footer d-flex align-items-center">
                    {/* <div class="gerb">
                        <img class="mt--3" src={Gerb} alt="" width="100" height="100" />
                    </div> */}
                    <div class="location">
                        <h4><i class="fa-solid fa-location-dot"></i>{context[lang].footerText.first}</h4>
                        <p><i class="fa-solid fa-mobile-screen-button"></i>{context[lang].footerText.second} (998-71)244-79-15.: (998-71)244-79-18.:</p>
                        <p>(998-71)244-79-20.: {context[lang].footerText.third}  (998-71)244-79-17</p>
                        <p><i class="fa-solid fa-envelope"></i>{context[lang].footerText.fourth}  info@tcti.uz, @tktimatbuotxizmati</p>
                    </div>
                    {/* <div className="social">
                        <ul className="social-list">
                            <li className="social-items social_telegram">
                                <img src={TelegramIcon} />
                            </li>
                            <li className="social-items social_instagram">
                                <img src={InstagramIcon} />
                            </li>
                            <li className="social-items social_facebook">
                                <img src={FacebookIcon} />
                            </li>
                            <li className="social-items social_youtube">
                                <img src={YoutubeIcon} />
                            </li>
                        </ul>
                    </div> */}
                    <div className="footer-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652870310479!5m2!1suz!2s" width="450" height="260" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <Helmet>
                        <script src="../../js/lang_data.js" type="text/javascript" />
                    </Helmet>
                </footer>
            </div>
        </>
    );
}

export default Footer;
