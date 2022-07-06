import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'


function Aloqa(){
    const { lang } = useContext(LanguageContext);
    return(
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={150} bg={true} />
            <div className="container-pages">
                
                <Header />
                    <div className="mainsss">
                        <div className="page_main">
                        <div class="page-container">
                        <h3 class="title">Aloqa</h3>
                        <div class="text">
                         <p><iframe frameborder="0" height="800px" scrolling="no" src="http://tkti.uz/uz/site/feedback" width="100%"></iframe></p>

                         <p>&nbsp;</p>
                        </div>
                         </div>
                        </div>
                            <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].header.first}</p></li>
                        <li className="nav-ul-li active"><a href="">{context[lang].generalInformation.fourth}</a></li>
                        <Link to={'/page/static/get/otm_ish_reja'}>
                        <li className="nav-ul-li"><a href="">{context[lang].generalInformation.third}</a></li>
                        </Link>
                        <Link to={'/page/static/get/biz_bn_aloqa'}>
                        <li className="nav-ul-li"><a href="">{context[lang].generalInformation.fifth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/bizning_manzil'}>
                        <li className="nav-ul-li"><a href="">{context[lang].generalInformation.second}</a></li>
                        </Link>
                        <Link to={'/page/static/get/univer_haqida'}>
                        <li className="nav-ul-li"><a href="">{context[lang].generalInformation.first}</a></li>
                        </Link>
                        <Link to={'/page/static/get/otm_ustavi'}>
                        <li className="nav-ul-li"><a href="">{context[lang].generalInformation.sixth}</a></li>
                        </Link>
                    </ul>
                    </div>
                    <div>
          </div>
                    </div>
                <Footer />
            </div>
        </>
    );
}

export default Aloqa;